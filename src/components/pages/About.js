import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import photo from "../../assets/img/pf.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <img
          src={photo}
          alt="Max Altena"
          className="circle responsive-image right hide-on-med-and-down"
        />
        <div>
          <p>
            <span className="bold">Hey there!</span> As you might know by now,
            my name is Max and I'm a student.
          </p>
          <img
            src={photo}
            alt="Max Altena"
            className="circle responsive-image hide-on-large-only"
          />
          <p>
            I am an always cheerful and inquisitive person who is technically
            laid out with a sense of design.
          </p>
          <p>
            I'm currently a student at Fontys Hogescholen in Eindhoven, The
            Netherlands where I follow a Bachelor of ICT. Next to the main
            route, ICT & Media Design, I am following the ICT & Smart Mobile
            specialization route.
          </p>
          <p>
            Some projects me (and possibly my group) create will end up on my
            website. You can go and check these out on the{" "}
            <Link
              to="/projects"
              onClick={() =>
                scroll.scrollToTop({ duration: 500, smooth: "easeInOut" })
              }
            >
              projects
            </Link>{" "}
            page.
          </p>
          <p>
            I've always liked helping people with their problems, solving
            logical and technical puzzles. All of these become one once you
            start concepting, designing and developing websites and
            applications.
          </p>
          <p>
            I work accurately and carefully with a perfectionistic touch. I like
            to challenge myself by needing to learn new things and always
            wanting to improve and develop what I've already done.
          </p>
          <h4 className="hind">What do you do in your free time?</h4>
          <p>
            I mostly work on projects I came up with during school but won't be
            completing within school. Furthermore projects which improve my{" "}
            <Link
              to="/skills"
              onClick={() =>
                scroll.scrollToTop({ duration: 500, smooth: "easeInOut" })
              }
            >
              skills
            </Link>{" "}
            that I want to improve are also a big part of my time. Researching
            new technologies, learning them and implementing them within an
            (simple) application is something I like to do often.
          </p>
          <h4 className="hind">What do you want to become?</h4>
          <p>
            Later, when I grow up, I want to become a full-stack developer...
            which I kind of already am. So now an actual answer: I want to learn
            more about web technologies and become better in the ones I like
            and/or enjoy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
