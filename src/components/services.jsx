import React from 'react'
import developer from '../Images/developer.png'
import webdesign from '../Images/webdesign.png'
import graphic from '../Images/graphic.png'
const Services = () => {
  return (
    <div>
       <section id="services">
                <h1>What can i do?</h1>
                <div className="container">
                    <div className="service-box">
                        <img src={developer} alt="" width="70px" />
                        <div className="inner-box">
                            <h3>Web Development</h3>
                            <p>Web development is the process of building and maintaining websites. It includes tasks such as web design, content creation, and server-side scripting, resulting in functional and visually appealing online platforms</p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img src={webdesign} alt="" width="70px" />
                        <div className="inner-box">
                            <h3>Web Design</h3>
                            <p>Web design is crafting websites with focus on aesthetics and user experience. It combines creativity, technical skills, and usability to create visually appealing and functional online platforms.</p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img src={graphic} alt="" width="70px" />
                        <div className="inner-box">
                            <h3>Graphic Design</h3>
                            <p>Graphic design visually communicates ideas through art and technology, enhancing branding and communication across media.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
    </div>
  )
}

export default Services
