import './About.css'
import PortfolioPic from './images/PortfolioPic.jpg'

export default function About() {

  return (
    <div className='about-container'>
      <div className='about-spacing'>
        <div className='about-header-title'>
          <h1 className='about-header-title-text'>
            Kevin Wang
          </h1>
        </div>
        <div className='about-body'>
          <div className='about-image-container'>
            <img className='about-image' src={PortfolioPic} alt={'Kevin Wang'}/>
          </div>
          <div className='about-intro-text'>
            {/* <ReactMarkdown source={aboutIntroText}/> */}
          </div>
          <div className='about-contact-title'>
            <h2 className='about-contact-title-text'>  
              Contact
            </h2>
          </div> 
          <div className='about-contact-body'>
          {/* buttons for email, linkedin, medium */}
          </div>
        </div>
      </div>
    </div>
  );
}