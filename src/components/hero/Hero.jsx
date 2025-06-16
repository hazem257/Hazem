import React from "react";
import Lottie from "lottie-react";
import { motion, scale } from "framer-motion";
import HackerAnim from "../../../public/animation/hacker.json"
import { useRef } from "react";
import './hero.css';
const Hero = () => {
    // @ts-ignore
    const lottieRef = useRef();

    return (
        <section className="hero flex">
            <div className="left-sec ">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 7, type: "spring", stiffness: 100 }}

                        className="avatar" src="./hazem1.png" alt="" />
                    <div className="icon-verified" ></div>
                </div>
                <motion.h1

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title">
                    Full Stack Developer && Cyber Security Engineer.
                </motion.h1>
                <p className="subtitle">I'm Hazem Gamal, a full stack developer and Cyber Security Engineer </p>
                <div className="all-icons flex">
                    <a href=""><div className="icon icon-twitter"></div></a>
                    <a href="https://www.instagram.com/h_a_z_e_m_g_m_a_l_l/">  <div className="icon icon-instagram"></div></a>
                    <a href="https://github.com/hazem257"> <div className="icon icon-github"></div></a>
                    <a href="https://www.linkedin.com/in/hazem-gamal-2a145b320/"><div className="icon icon-linkedin-square"></div></a>
                </div>




            </div>
            <div className="right-sec animation ">
                <Lottie
                    lottieRef={lottieRef}
                    className="contact-anim"
                    style={{ height: 400 }}
                    onLoadedImages={() => {
                        lottieRef.current.setSpaed(0.55);
                    }}
                    animationData={HackerAnim} />
            </div>
        </section>

    );
}
export default Hero;