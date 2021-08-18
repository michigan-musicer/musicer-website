
export default function Item(props){ 
  console.log(props);
  return (
    
    <div>
      <p>{props.props.desc}</p>
      {/* <img>{props.props.img}</img> */}
    </div>
  );
}