import React, { useState } from "react";
import './course.css';
import { Link, useParams } from "react-router-dom";
import { mycourse } from "./mycourse";
import { AnimatePresence, motion } from "framer-motion";

const Courses = ({ excludeId = false }) => {
  const { id } = useParams();
  const [currenActive, setCurrentActive] = useState("All Courses");
  
  // زرار لكل كورس
  const categories = ["All Courses", "HTML", "CSS", "JAVA SCRIPT", "DATA BASE", "REACT"];

  const filterCourses = (category) => {
    setCurrentActive(category);

    let filtered = mycourse;

    // فلترة حسب اسم الكورس
    if (category !== "All Courses") {
      filtered = filtered.filter((item) =>
        item.courseTitle === category
      );
    }

    // استثناء ID لو مطلوب
    if (excludeId && id) {
      filtered = filtered.filter((p) => p.id !== Number(id));
    }

    return filtered;
  };

  // البيانات عند تحميل الصفحة
  const [arr, setArr] = useState(() => filterCourses("All Courses"));

  const handleClic = (category) => {
    const filtered = filterCourses(category);
    setArr(filtered);
  };

  return (
    <main className="flex">
    
      {/* الأزرار */}
      <section className="left-sec flex">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClic(cat)}
            className={currenActive === cat ? "Active" : ""}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* الكورسات */}
      <section className="flex right-sec">
       
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 60 }}
              className="card"
              key={item.id}
            >
              <img width={266} src={item.CourseImg} alt={item.courseTitle} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.courseTitle}</h1>
                <br />
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.tele} target="_blank" rel="noopener noreferrer">
                      <div className="icon-telegram"></div>
                    </a>
                    <a href={item.whats} target="_blank" rel="noopener noreferrer">
                      <div className="icon-whatsapp"></div>
                    </a>
                  </div>
                  <Link className="link flex" to={`/project/${item.courseTitle}`}>
                    Register
                    <span className="icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Courses;
