import './Item.css'

export default function Item(props){ 
  return (
    <div className='item'>
      {props.props.left}
      {props.props.right}
    </div>
  );
}