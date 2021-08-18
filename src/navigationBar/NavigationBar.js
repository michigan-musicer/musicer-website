import './NavigationBar.css';

export default function NavigationBar(props) {
  let listWithNumItems = [];
  // should replace with props.props.numItems
  for (let i = 0; i < 1; ++i) {
    listWithNumItems.push(i);
  }
  
  return (
    <div className='navigation-bar-spacing'>
      <div className='navigation-bar-container'>
        <ul className='navigation-bar-list'>
        {
          listWithNumItems.map((i) =>
            <li key={i} className='navigation-bar-item'>
              {/* should replace with props.props.items[i] */}
              <h2 className='navigation-bar-text'>Portfolio</h2>
              <hr className='navigation-bar-underline'/>
            </li>)
        }
        </ul>
      </div>
    </div>
  );
}