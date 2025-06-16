import React from "react";
import { useParams, Link } from "react-router-dom";
import './myprojects1.css';
import { myprojects } from "./myprojects";
import { motion } from "framer-motion";

const convertToEmbedURL = (url) => {
  if (!url) return "";
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = myprojects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="errorContainer">
        <h2>❌ المشروع غير موجود</h2>
        <Link to="/">🔙 الرجوع إلى المشاريع</Link>
      </div>
    );
  }

  return (
    <section>
      <section className="projectDeta flex ">
        <div className="project-container flex ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.8)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src={project.imgpath} alt={project.projectTitle} width={300} />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >{project.projectTitle}</motion.h1>
        </div>

        <div className="about flex">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}

          >{project.about}</motion.p>
          < motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="link flex">
            <a href={project.live}><div className="icon-link"></div></a>
            <a href={project.Github}><div className="icon-github"></div></a>
          </motion.div>
        </div>
      </section>

      <div className='divider'></div>

      <section className="video-cont flex">
        <h1>{project.projectTitle} <span>Video</span></h1>
        <motion.iframe

        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
          src={convertToEmbedURL(project.videoLink)}
          title={project.projectTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "10px",
            marginTop: "20px"
          }}
        ></motion.iframe>
      </section>
    </section>
  );
};

export default ProjectDetails;
