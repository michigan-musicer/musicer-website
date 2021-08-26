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
          <img className='about-image' src={PortfolioPic} alt={'Kevin Wang'}/>
          {/* <p>{props.desc}</p> */}
          <p>I am a computer science student at the University of Michigan, planning on
            receiving my bachelor's degree this fall and entering an accelerated master's program at Michigan
            in the winter. As a researcher, I am interested in finding ways to reduce labeler workload in 
            machine learning pipelines by sampling representative subsets of large datasets. As a software engineer, I enjoy working on 
            newer, less solved problems in fast-paced environments.</p>
          <p>  
            <b>Seeking internships for summer 2022</b> in full stack software engineering 
            (bonus points if the position involves working with machine learning pipelines) 
            or machine learning research.
          </p>
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