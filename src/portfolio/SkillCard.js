import './SkillCard.css'

export default function SkillCard(props) {
  let listWithNumItems = [];
  for (let i = 0; i < props.props.items.length; ++i) {
    listWithNumItems.push(i);
  }
  
  return (
    <div className='skillcard-container' style={{backgroundColor: props.props.cardColor}}>
      <div className='skillcard-spacing'>
        <div className='skillcard-title'>
          <h2 className='skillcard-title-text'>{props.props.title}</h2>
        </div>
        <div className='skillcard-body'>
          <ul>
            {
              listWithNumItems.map((i) =>
                <li>{props.props.items[i]}</li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}