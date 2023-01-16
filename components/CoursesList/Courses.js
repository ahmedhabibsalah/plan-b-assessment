import React, { useState, useEffect } from "react";
import CourseCard from "../Cards/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
  }, []);
  if (!courses)
    return (
      <div className="text-[#3d405b] text-center text-lg mt-4 bg-[#f4f1de]">
        Loading...
      </div>
    );
  return (
    <div className="flex flex-wrap items-center gap-8 justify-center mt-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.name}
          src={course.photo}
          desc={course.desc}
          language={course.language}
          price={course.price}
          hours={course.totalHouers}
        />
      ))}
    </div>
  );
}

export default Courses;
