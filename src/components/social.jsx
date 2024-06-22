import React from 'react'
import github from '../Images/github.png'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'

const Social = () => {
  return (
    <div>
       <section id="social">

<div className="social-links">
    <h1>You can find me</h1>
    <div className="social-icons">
        <a href="https://www.facebook.com/abdullah.atiq.505/" rel='norefferer'><img src={facebook}
            alt="" /></a>
        <a href="https://www.instagram.com/abd_atiq0180/" rel='norefferer'><img src={instagram} alt="" /></a>
        <a href="https://www.linkedin.com/in/abdullah-atiq-41145a236/" rel='norefferer'><img src={linkedin}
            alt="" /></a>
        <a href="https://github.com/abd-webdev" rel='noreferrer'><img src={github} alt="" /></a>
    </div>
</div>
</section>
    </div>
  )
}

export default Social
