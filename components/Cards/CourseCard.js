import Image from "next/image";
import React, { useState } from "react";
import DetailedCard from "./DetailedCard";

function CourseCard({ src, title, desc, language, price, hours }) {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className="w-[280px] rounded-br-[20px] shadow-lg flex flex-col items-start gap-2 h-[550px] bg-[#e07a5f] relative">
      <div className="relative w-[280px] h-[200px] flex-[0.4]">
        <Image
          loader={() => src}
          src={src}
          alt={title}
          width={280}
          height={200}
        />
      </div>
      <div className="flex flex-col items-start gap-2 p-2 flex-[0.4]">
        <h4 className="text-lg font-bold text-[#f4f1de] flex-[0.3]">{title}</h4>
        <p className="text-base text-[#3d405b] flex-[0.6]">
          {desc.length > 250 ? `${desc.substring(0, 150)}...` : desc}
        </p>
        <p className="text-base text-[#f4f1de] flex-[0.1]">{hours} hours</p>{" "}
      </div>
      <div className="flex gap-x-2 px-2 w-full items-center justify-start flex-[0.05]">
        <p className="text-base text-[#3d405b]">{language}</p>
        <p className="text-base text-[#3d405b]">{price} EGP</p>
      </div>
      <div className="flex flex-col items-start gap-x-2 px-2  flex-[0.15] absolute bottom-0 mb-4">
        <button className="button" onClick={openModal}>
          Learn More
        </button>
      </div>
      <DetailedCard
        open={open}
        closeModal={closeModal}
        title={title}
        src={src}
        desc={desc}
        language={language}
        price={price}
        hours={hours}
      />
    </div>
  );
}

export default CourseCard;
