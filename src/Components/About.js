import React from "react";
import "../App.css";
import img2 from "./Images/img2.png";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Link } from "react-router-dom";

export const About = () => {
  const datalist = [
    {
      title: " I Do like the Rain",
      isLink: true,
    },
    {
      title: "Audio Drama",
    },
    {
      title: "Andy",
    },
    {
      title: "Lead",
    },
  ];
  const seclist = [
    {
      title: "Fireteam Wildcats ",
      isLink: true,
    },
    {
      title: "Audio Drama",
    },
    {
      title: "Rasson",
    },
    {
      title: "Lead",
    },
  ];
  const thrdlist = [
    {
      title: "The Leap of Ancients",
      isLink: true,
    },
    {
      title: "Audio Drama",
    },
    {
      title: "Edu",
    },
    {
      title: "Lead",
    },
  ];
  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="icon col-md-12">
            <Link to="/Home">
              <i className="fa fa-angle-up"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="three col-md-6">
            <Heading type="h3">ABOUT</Heading>
            <Paragraph>
              {/* textColor="red" */}
              Jack was once a software developer pining for a chance to perform
              for the world. Then he decided to do something about it and became
              a professional voice actor!
            </Paragraph>
            <Paragraph>
              If you have copy that you need to bring to life, Jack is your best
              bet. Whether its bringing a natural, conversational voice to your
              commercial project or stepping into the shoes of a character,
              Jack’s a professional that can knock it out of the park and make
              your life easier. Check out what some of his past clients have to
              say about his work.
            </Paragraph>
          </div>
          <div className="four col-md-6">
            <Heading type="h3">CLIENT</Heading>
            <img className="image-responsive" src={img2} alt="image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="five col-md-6">
          <Heading type="h3">CREDITS</Heading>
          <table className="tble">
            <tr className="tble-row">
              {datalist?.map((item, index) => {
                return (
                  <td key={index}>
                    {item.isLink ? (
                      <Link className="linc">{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </td>
                );
              })}
            </tr>
            <tr className="tble-row">
              {seclist?.map((item, index) => {
                return (
                  <td key={index}>
                    {item.isLink ? (
                      <Link className="linc">{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </td>
                );
              })}
            </tr>
            <tr>
              {thrdlist?.map((item, index) => {
                return (
                  <td key={index}>
                    {item.isLink ? (
                      <Link className="linc">{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </td>
                );
              })}
            </tr>
          </table>
        </div>
        <div className="five col-md-6">
          <Heading type="h3">TESTIMONIALS</Heading>
          <div className="mainSlider col-md-6">
            <div className="slider-item1 col-md-6">
              <Paragraph>
                "Jack had the perfect energy for our project and
                the professionalism to back it up. He hit it out of the park
                take after take. We couldn't be happier to work with him." -
                Blue Krueger | Engineer, Fireteam Wildcats"Jack did a great
                read, has an interesting voice, very professional." - Jeff Wold
                | CMD Agency"Wo
              </Paragraph>
            </div>
            <div className="slider-item2 col-md-6">
              <Paragraph>
               "Jack had the perfect energy for our project and
                the professionalism to back it up. He hit it out of the park
                take after take. We couldn't be happier to work with him." -
                Blue Krueger | Engineer, Fireteam Wildcats"Jack did a great
                read, has an interesting voice, very professional." - Jeff Wold
                | CMD Agency"Wo
              </Paragraph>
            </div>
            <div className="slider-item3  col-md-6">
              <Paragraph>
                Working with Jack is a pleasure. His energy was perfect and made
                every recording session an event"
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
