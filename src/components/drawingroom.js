import drawingroom from "../assets/img/drawingroom.jpg";
import GridSection from "./grid-section";
function Drawingroom() {
  return (
    <div className="row" id="drawingroom">
      <GridSection img={drawingroom} heading="Drawingroom" />
    </div>
  );
}

export default Drawingroom;
