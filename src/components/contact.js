import ContactForm from "./contact-form";
import back from "../assets/img/sofa2.jpg";
function Contact() {
  return (
    <section id="contact" className="container">
      <h1 className="text-center p-3">Contact</h1>
      <div className="bg-grade">
        <div className="row">
          <div className="col-md-5 align-self-center bg-white m-5 p-5">
            <h1>Talk to a designer</h1>
            <ContactForm />
          </div>
          <div className="col-md-6 align-self-center">
            <div className="">
              <h1 className="text-center text-white mt-5">
                Consult Our Interior Design Advisor
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
