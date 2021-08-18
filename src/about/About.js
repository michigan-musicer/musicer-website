import './About.css'
import PortfolioPic from '../images/PortfolioPic.jpg'

export default function About(props) {

  // says props.title and its other properties are null, not sure why
  // It does seem like I should put images in directly so that they are
  // correctly "interpreted" (is it an interpreter?)
  return (
    <div className='about-container'>
      <div className='about-spacing'>
        <div className='about-title'>
          {/* <title>{props.title}</title> */}
          <h1>Kevin Wang</h1>
        </div>
        <div className='about-body'>
          {/* we can style the image to be circular or something fancier */}
          {/* something with a border for sure */}
          {/* either way, serious cropping necessary */}
          <img className='about-image' src={PortfolioPic}/>
          {/* <p>{props.desc}</p> */}
          <p>I am a computer science student at the University of Michigan, planning on
            graduating this fall and entering an accelerated master's program at Michigan
            in the winter. Currently I'm most interested in machine learning research 
            (strongly leaning towards computer vision), but I also enjoy just writing good
            code to make ideas real.</p>
          <p>  
            <b>Seeking internships for summer 2022</b> in full stack positions, preferably 
            those adjacent to machine learning or with opportunities to 
            contribute to machine learning pipelines.
          </p>
          <p>  
            Contact: musicer (at) umich.edu
          </p>
        </div>
      </div>
    </div>
  );
}