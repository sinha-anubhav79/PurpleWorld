import bedroom from "../assets/img/bed2.jpg";
import GridSection from "./grid-section";
function Bedroom() {
  return (
    <div className="row" id="bedroom">
      <GridSection img={bedroom} heading="Bedrooom" />
    </div>
  );
}

export default Bedroom;
