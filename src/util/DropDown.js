import { useState } from 'react';
import './DropDown.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function DropDown(props) {
  const [isHidden, setIsHidden] = useState(true);
  // there was an idea about having expanding width...but that is difficult to 
  // get working alongside transition and auto height
  // const [containerWidth, setContainerWidth] = useState('30%');
  // const [containerHeight, setContainerHeight] = useState(32);
  // const identifier = 'n' + Math.random().toString().substr(2);

  let listWithNumItems = [];
  for (let i = 0; i < props.props.items.length; ++i) {
    listWithNumItems.push(i);
  }

  function handleClick() {
    setIsHidden(!isHidden);
    // setContainerWidth(!isHidden ? '30%' : '75%');
    // console.log(identifier);
    // let height = document.querySelector('#' + identifier).offsetHeight;
    // setContainerHeight(!isHidden ? height + 32 : '1em');
    // console.log(height);
    // setContainerHeight()
  }

  return (
    <div className='dropdown-container' style={props.props.indent ? {}: {margin: '0.5em 0em'}}>
      <button className='dropdown-button' onClick={handleClick}>
        {/* I'd like to put some code here to preview the first however many 
        characters of the content */}
        <div className='dropdown-button-contents'>
          {props.props.title} {isHidden ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
        </div>
      </button>
      <div className='dropdown-content' hidden={isHidden}>
        <ul className='dropdown-content-list'>
          {
            listWithNumItems.map((i) =>         
              <li><div>{props.props.items[i].item}</div></li>
            )
          }
        </ul>
      </div>
    </div>
  );
}