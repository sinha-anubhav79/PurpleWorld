import bathroom from "../assets/img/bathroom.jpg";
import GridSection from "./grid-section";
function Bathroom() {
  return (
    <div className="row" id="bathroom">
      <GridSection img={bathroom} heading="Bathrooom" />
    </div>
  );
}

export default Bathroom;
