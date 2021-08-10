import Divider from "./Divider";
import Item from "./Item";

export default function Section(){
  return (
    <div>
      <title></title>
      <Divider/>
      <div>
        <ul>
          <Item/>
        </ul>
      </div>
    </div>
  );
}