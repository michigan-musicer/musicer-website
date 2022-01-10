import './About.css'
import PortfolioPic from '../images/PortfolioPic.jpg'

export default function About() {

  // says props.title and its other properties are null, not sure why
  // It does seem like I should put images in directly so that they are
  // correctly "interpreted" (is it an interpreter?)
  return (
    <div className='about-container'>
      <div className='about-spacing'>
        <div className='about-title'>
          {/* <title>{props.title}</title> */}
          <h1 className='about-title-text'><b>Kevin Wang</b></h1>
        </div>
        <div className='about-body'>
          {/* we can style the image to be circular or something fancier */}
          {/* something with a border for sure */}
          {/* either way, serious cropping necessary */}
          <div className='about-image-container'>
            <img className='about-image' src={PortfolioPic} alt={'Kevin Wang'}/>
          </div>
          {/* <p>{props.desc}</p> */}
          <p>I am a master's student in computer science at the University of Michigan-Ann Arbor. I am currently a graduate student instructor for EECS 545, Michigan's graduate-level machine learning course.</p>
          <p>As a researcher, I am interested in building bridges between sampling in machine learning theory and computer vision applications, with a focus on learning fair algorithms. As a software engineer, I enjoy working close to the metal (sorry Python coders) on lower-level infrastructure, and at this stage in my career I have a particular love for dynamic problem spaces with less established solutions.</p>
          <p>I'm pleased to announce that I'll be working at Bungie as a platform engineering intern this summer!</p>
          {/* <p>  
            <b>Seeking internships for summer 2022</b> in full stack software engineering 
            (bonus points if the position involves working with machine learning pipelines) 
            or machine learning research.
          </p> */}
          <p>  
            Contact: musicer (at) umich (dot) edu
          </p>
          <button className='about-copy-email' onClick={() => {navigator.clipboard.writeText('musicer@umich.edu')}}>
            Copy email to clipboard
          </button>
        </div>
      </div>
    </div>
  );
}