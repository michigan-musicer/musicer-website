import About from './about/About.js'
import Portfolio from './portfolio/Portfolio.js'
import NavigationBar from './navigationBar/NavigationBar.js'
import './App.css';
import getAboutProps from './about/getAboutProps.js';

export default function App() {
  const PortfolioProps = {
    title: 'hello world',
    item: {
      desc: 'who',
      img: ''
    }
  }

// need LHS about me bar, RHS portfolio
// about me bar should be in em, not percent
// will need to make it responsive to be viewable on mobile
  return (
    // copy the styling for matUI card and use it here
    <div className='app-container'> 
      <div className='app-leftside-container'>
        <About props={getAboutProps()}/>
      </div>
      <div className='app-rightside-container'>
        <NavigationBar />
        <Portfolio props={PortfolioProps}/>
      </div>
    </div>
  );
}