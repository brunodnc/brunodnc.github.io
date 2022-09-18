import React from "react";
import {Linkedin, Github} from '@icons-pack/react-simple-icons'

export const About = () => {
    return (
    <article id="about">
    <h2>About</h2>
    <p>
      My name is <a href="https://www.linkedin.com/in/brunodnc/" target="_blank" rel="noreferrer">Bruno Domenico</a>. I am a web and software developer.
      In the section above and at my <a href="https://github.com/brunodnc" target="_blank" rel="noreferrer"> GitHub Profile {< Github/>}</a> you can find my personal projects. 
      Here is my <a href="https://www.linkedin.com/in/brunodnc/" target="_blank" rel="noreferrer">Linkedin Page {<Linkedin />}</a> where you can find out more about me and perhaps say hello =).
    </p>
  </article>
  )
}