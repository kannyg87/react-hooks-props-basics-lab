import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {/* <Links
        linksG={user.links.github}
        githubText={user.links.github}
        linksL={user.links.linkedin}
        linkedinText={user.links.linkedin}
      /> */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
