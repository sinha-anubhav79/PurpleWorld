import ContactForm from "./contact-form";

function Contact() {
  return (
    <section id="contact">
      <h1 className="text-center">Contact</h1>
      <div className="text-center mt-4">
        <a href="#">
          <i class="fa fa-instagram fa-2x social mx-5"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook-square fa-2x social mx-5"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter fa-2x social mx-5"></i>
        </a>
      </div>
      <br />
      <h2 className="text-center">Consult Our Interior Design Advisor</h2>
      <ContactForm />
    </section>
  );
}

export default Contact;
