import './Item.css'

export default function Item(props){ 
  return (
    <div className='item'>
      <div className='left'>
        {props.props.left}
      </div>
      <div className='right'>
        {props.props.right}
      </div>
    </div>
  );
}