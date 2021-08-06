import React from "react";
import "../App.css";
import sideimg from "./Images/img1.png";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";

export const Home = () => {
  const links = [
    {
      link: "FULL COMMERCIAL DEMO REAL"
    },
    {
      link: "MS DONELED- ENERGATIC & FUNNY"
    },
    {
      link: "INVASILE- ENERGATIC & FUNNY"
    },
    {
      link: "iPHONE-12 SHARP & SMART"
    },
    {
      link: "MS DONELED- ENERGATIC & FUNNY"
    },
    {
      link: "RAW AUDIO SAMPLE"
    },
    {
      link: "MS DONELED- ENERGATIC & FUNNY"
    },
    {
      link: "AS DONELED- ENERGATIC & FUNNY"
    },
    {
      link: "ASU- ENERGATIC & FUNNY"
    },
  ];
  // console.log(links);
  const seclink =[
    {
      link: "FULL COMMERCIAL DEMO REAL"
    },
    {
     link: "MS DONELED- ENER & FUNNY" 
    },
    {
      link: "INVASILE- ENERGATIC & FUNNY"
    },
    {
      link: "iPHONE-12 SHARP & SMART"
    },
    {
      link: "MS DONELED- ENER & FUNNY"
    },
    {
      link: "RAW AUDIO SAMPLE",
    },
    {
      link: "MS DONELED- ENER & FUNNY"
    },
    {
      link: "AS DONELED- ENERGA & FUNNY"
    },
    {
      link: "ASU- ENERGATIC & FUNNY"
    },
    {
      link: "MS DONELED- ENER & FUNNY" 
     },
     {
       link: "INVASILE- ENER & FUNNY"
     },
     {
       link: "iPHONE-12 SHARP & SMART"
     },
     {
       link: "MS DONELED- ENER & FUNNY"
     }
  ];
  const thrdlink=[
    {
      link: "Microphone: Neumann TLM103"
    },{
      link: "Interface: Solid State Logic SSL2"
    },{
      link: "Professional Isolation Booth"
    },{
      link: "Source Connect Standard & Phone Patch capable"
    }
  ]
  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="head col-md-12">
            <ul>
              <li className="list">
                <Link className="linc" to ="jack@jackstansbury.com">jack@jackstansbury.com</Link>
              </li>
              <li>(832) 299-4158</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="one col-md-6">
            <img className="imgg" src={sideimg} alt="pic" />
            <Heading type="h1">JACK STANSBURY</Heading>
            <Heading type="h3" className="sub-head">
              BRIGHT, fRIENDLY, RELATABLE
            </Heading>
          </div>
          <div className="two col-md-6">
            <div className="row">
              <div className="head1 col-md-6">
                <Heading type="h3">COMMERCIAL DEMO</Heading>
                <div className="headings">
                  <ul>
                  {links?.map((item, index) => {
                    return (
                        <li key={index}>
                          <Link className="linc">{item.link}</Link>
                        </li>
                    );
                  })}
                  </ul>
                </div>
              </div>
              <div className="head1 col-md-6">
                <Heading type="h3">CHARACTER DEMO</Heading>
                <div className="headings">
                  <div className="scrol">
                  <ul>
                  {seclink?.map((item,index)=>{
                    return(
                      <li key={index}>
                        <Link className="linc">{item.link}</Link>
                      </li>
                    );
                  })}
                  </ul>
                </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="head-link col">
                  <Heading type="h3">BROADCAST QUALITY HOME STUDIO</Heading>
                  <ul>
                    {thrdlink?.map((index)=>{
                      return(
                        <>
                      <li key={index}>Microphone: Neumann TLM103</li>
                      </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon">
          <Link to ="/About">
            <i className="fa fa-angle-down"></i>
          </Link>
        </div>
        <div />
      </div>
    </>
  );
};
