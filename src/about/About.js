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
          <p>I am a first-year master's student in computer science at the University of Michigan-Ann Arbor. I am currently a graduate student instructor for EECS 545, Michigan's graduate-level machine learning course. I am also the current coordinator for the new(ly revived) <a href='https://sites.google.com/umich.edu/mltheory/'>machine learning theory reading group</a> here at Michigan.</p>
          <p>I'm fortunate to be advised by <a href='https://web.eecs.umich.edu/~derezin/'>Michał Dereziński</a>, who I'm working with on optimization research. I am also fortunate to have an internship lined up at <a href='https://www.bungie.net/'>Bungie</a> for summer 2022, where I will be working on their game engine/platform as a platform engineer.</p>
          <p>&nbsp;</p>
          <p>As a researcher, I enjoy theoretical, math-y work over application-focused research, but at the same time I want my work to be relevant to practical models. At the moment I'm not too sure on where my specific interests lie -- working on narrowing that down =)</p>
          <p>As a software engineer, I still prefer close-to-the-metal work over higher-level stuff. I enjoy infrastructure-level engineering, and weirdly for an ML researcher I prefer C/C++ style languages over Python.</p>
          {/* <p>Right now I'm in an interesting place professionally: I could reasonably continue my graduate schooling and look towards a PhD program, or I could head off into industry and work in any number of interesting fields as a software engineer. My portfolio shows my experience in both, so here I want to give my philosophy:</p>
          <p>As a researcher, I enjoy theoretical, close-to-the-metal research over application-side research, but at the same time I want my work to be relevant to practical models. In the past, this meant an interest in unsupervised methods (sampling techniques, GANs, contrastive learning...) and theory tools for analyzing deep learning (in particular NTKs); right now I'm not too sure where I stand. This could all change in a year -- at the moment I'm trying to find more narrow interests =)</p>
          <p>As a software engineer, I also prefer close-to-the-metal work over higher-level stuff. I'm not a huge fan of web dev, and weirdly for an ML researcher I prefer C/C++ style languages over Python. I like infrastructure-level engineering, which motivated my senior design project (a from-scratch 16,000 line search engine written almost entirely in C++) and my choice of internship for this summer. The more dynamic and unsolved the problem space is, the more I'll probably enjoy it.</p> */}
          {/* <p>I'm pleased to announce that I'll be working at Bungie as a platform engineering intern this summer!</p> */}
          {/* <p>  
            <b>Seeking internships for summer 2022</b> in full stack software engineering 
            (bonus points if the position involves working with machine learning pipelines) 
            or machine learning research.
          </p> */}
          <p>  
            <a href='https://www.linkedin.com/in/kevin-wang-978627196/'>Here's my LinkedIn!</a> Someday I will make it a nice button, but today I am busy <em>(never updates it ever again)</em>
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