import abtImg from "../assets/img/sofa.jpg";
function About() {
  return (
    <section id="about">
      <div className="">
        <img src={abtImg} className="col-4 float-end" />
        <h1 className="text-center col-8">About Us</h1>
        <p className="col-8 fs-4 p-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="col-4"></div>
    </section>
  );
}

export default About;
