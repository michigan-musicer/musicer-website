import About from './about/About.js'
import Portfolio from './portfolio/Portfolio.js'
import NavigationBar from './navigationBar/NavigationBar.js'

export default function Main() {
// need LHS about me bar, RHS portfolio
// about me bar should be in em, not percent
// will need to make it responsive to be viewable on mobile
  return (
    // copy the styling for matUI card and use it here
    <div className='main-container'> 
      <div className='main-leftside-container'>
        <About/>
      </div>
      <div className='main-rightside-container'>
        <NavigationBar/>
        <Portfolio/>
      </div>
    </div>
  );
}