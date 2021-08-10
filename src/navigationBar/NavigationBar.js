import './NavigationBar.css';

export default function NavigationBar(props) {
  let listWithNumItems = [];
  for (let i = 0; i < props.numItems; ++i) {
    listWithNumItems.push(i);
  }
  
  return (
    <div className='navigation-bar-container'>
      <ul>
        {
          listWithNumItems.map(i =>
            {
              <li className='navigation-bar-item'>${props.items[i]}</li>
            }
        )};
      </ul>
    </div>
  );
}