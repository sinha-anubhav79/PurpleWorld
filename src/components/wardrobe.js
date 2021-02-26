import wardrobe from "../assets/img/wardrobe.jpg";
import GridSection from "./grid-section";
function Wardrobe() {
  return (
    <div className="row" id="wardrobe">
      <GridSection img={wardrobe} heading="Wardrobe" />
    </div>
  );
}

export default Wardrobe;
