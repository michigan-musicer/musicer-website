import './App.css';
import About from './About.js'

export default function App() 
{
  return (
    <div className='main-toplevel-container'>
      <div className='main-profile-container'>
        <About/>
      </div>
      <div className='main-portfolio-container'>
        {/* if we have a combined tab, then we really shouldn't have tabs - just filters */}
        <div className='main-portfolio-header'>
          {/* filter selection and title */}
        </div>
        <div className='main-portfolio-body'>
          { /* combined */ }
        </div>
        {/* <div className='main-portfolio-tab'> */}
          {/* SWE */}
        {/* </div> */}
        {/* <div className='main-portfolio-tab'> */}
          {/* Teacher */}
        {/* </div> */}
        {/* <div className='main-portfolio-tab'> */}
          {/* ML engineer */}
        {/* </div> */}
        {/* <div className='main-portfolio-tab'> */}
          {/* Person */}
        {/* </div> */}
      </div>
    </div>
  )
}