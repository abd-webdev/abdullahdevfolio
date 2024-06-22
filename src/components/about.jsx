import React from 'react'

import developer from '../Images/developer.png'
import JavaScript from '../Images/javascript.webp'
import Nodejs from '../Images/nodejs.png'
import Reactjs from '../Images/react.webp'


const About = () => {
  return (
    <div>
      <section id="about" className="second-section">
                <span>What i have done so far</span>
                <h1>Work Experience</h1>
                <div className="horizaontal">
                    <div className="vertical">
                        <img className="image-top" src={developer} alt="" width="50px" />
                        <div className="vertical-title">
                            HTML developer (2021-2023)
                        </div>
                        <div className="vertical-desc">
                        An HTML developer designs web content using HTML, ensuring proper layout and multimedia integration. They collaborate with designers and developers to create visually appealing websites.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" style={{"width": "4rem", "left": "-29px", "top": "-46px"}} src={JavaScript} alt="" width="40px" />
                        <div className="vertical-title">
                            JavaScript developer (2021-2023)
                        </div>
                        <div className="vertical-desc">
                        A JavaScript developer specializes in coding interactive and dynamic web elements, enhancing user experience on websites and web applications.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" src={Reactjs} alt="" width="40px" />
                        <div className="vertical-title">
                        ReactJS developer (2021-2023)
                        </div>
                        <div className="vertical-desc">
                        A "ReactJS developer" builds interactive user interfaces, leveraging ReactJS library to create seamless and responsive web applications.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" src={Nodejs} alt="" style={{"width": "4rem", "left": "-29px", "top": "-65px"}} />
                        <div className="vertical-title">
                        Node.js developer (2022-2023)
                        </div>
                        <div className="vertical-desc">
                        A "Node.js developer" specializes in server-side JavaScript programming, building scalable and high-performance web applications and APIs.
                        </div>
                    </div>

                </div>
            </section>
    </div>
  )
}

export default About
