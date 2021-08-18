import Column from '../util/Column.js'

export default function NavigationBar(props) {
  console.log(props);
  return (  
    <div>
      <Column props={props.props}/>
    </div>
  );
}