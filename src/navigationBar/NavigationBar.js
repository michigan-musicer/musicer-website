import './NavigationBar.css';
import Divider from '../util/Divider.js'

export default function NavigationBar(props) {
  let listWithNumItems = [];
  for (let i = 0; i < props.numItems; ++i) {
    listWithNumItems.push(i);
  }
  
  return (
    <div className='navigation-bar-spacing'>
      <div className='navigation-bar-container'>
        <ul className='navigation-bar-list'>
        {/* // temp before I figure out prop passing */}
        <li className='navigation-bar-item'>
          <h2 className='navigation-bar-text'>Portfolio</h2>
          <hr className='navigation-bar-underline'/>
        </li>  
        {/* 
          {
            listWithNumItems.map(i =>
              {
                <li className='navigation-bar-item'>{props.items[i]}</li>
              }
            )
          } */}
        </ul>
      </div>
    </div>
  );
}