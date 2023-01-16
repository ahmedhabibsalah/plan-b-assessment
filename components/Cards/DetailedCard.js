import Image from "next/image";
import React from "react";
import Modal from "react-modal";

function DetailedCard({
  src,
  title,
  desc,
  language,
  price,
  hours,
  open,
  closeModal,
}) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        content: {
          margin: "10px",
          padding: "0",
          inset: "auto",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      }}
      ariaHideApp={false}
    >
      <section className="text-gray-700 body-font overflow-hidden relative p-2">
        <div className="container px-4 py-4 ">
          <div className=" flex flex-col items-start">
            <div className="w-full h-[200px] sm:h-[300px] relative">
              <Image loader={() => src} src={src} alt={title} fill />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {language}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
            </div>

            <div className="flex flex-col items-start">
              <p className="leading-relaxed max-w-lg">{desc}</p>
              <div className="flex mt-4 w-full justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {price} EGP
                </span>
                <span className="title-font font-medium text-2xl text-gray-900">
                  {hours} Hours
                </span>
              </div>
            </div>
          </div>
        </div>
        <span
          className="absolute cursor-pointer right-2 top-0 text-[#000] text-xl font-bold"
          onClick={closeModal}
        >
          X
        </span>
      </section>
    </Modal>
  );
}

export default DetailedCard;
