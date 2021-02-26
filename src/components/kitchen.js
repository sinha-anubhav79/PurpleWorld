import kitchen from "../assets/img/kitchen.jpg";
import GridSection from "./grid-section";
function Kitchen() {
  return (
    <div className="row" id="kitchen">
      <GridSection img={kitchen} heading="Kitchen" />
    </div>
  );
}

export default Kitchen;
