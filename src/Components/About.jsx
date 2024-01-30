/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/laptop-working-place-image.jpg";

const imageAltText = "Beautiful working place background ";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Passionate Web Developer and nthusiastically motivated to provide valuable contributions and actively participate in the operations of an organization.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Developer",
  "MERN Stack Developer",
  "React based webapps",
  "User experience",
  "Beautiful design",
  "Security matters",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Passionate about the endless possibilities of technology, I am an accomplished developer and programmer well-versed in HTML5, CSS3, and JavaScript. My journey in the world of programming has been a relentless pursuit of excellence, with a keen focus on mastering the intricacies of the MERN (MongoDB, Express.js, React, Node.js) stack. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
