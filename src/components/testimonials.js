import React, { useState } from "react";

import poem01 from "../assets/bedroom_d/bd01.jpg";
import poem02 from "../assets/bedroom_d/bd02.jpg";
import poem03 from "../assets/bedroom_d/bd03.jpg";
import poem04 from "../assets/bedroom_d/bd04.jpg";
import poem05 from "../assets/bedroom_d/bd05.jpg";
import poem06 from "../assets/bedroom_d/bd06.jpg";
import poem07 from "../assets/bedroom_d/bd07.jpg";
import poem08 from "../assets/bedroom_d/bd08.jpg";
import poem09 from "../assets/bedroom_d/bd09.jpg";
import poem10 from "../assets/bedroom_d/bd10.jpg";

function Testimonials() {
  const [currentImage, setCurrentImage] = useState(0);
  const pearray = [
    poem01,
    poem02,
    poem03,
    poem04,
    poem05,
    poem06,
    poem07,
    poem08,
    poem09,
    poem10,
  ];
  const headarray = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 4",
    "Person 5",
    "Person 6",
    "Person 7",
    "Person 8",
    "Person 9",
    "Person 10",
  ];
  const descarray = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  return (
    <section>
      <div className="testimonial">
        <h1 className="pt-5 pb-3 text-center">Testimonials</h1>
        <div className="container" data-aos="fade-up">
          <div className="card">
            <div className="row justify-content-center">
              <div className="carousel-control-prev">
                <i
                  className="fa fa-angle-left fa-4x"
                  onClick={() =>
                    currentImage > 0
                      ? setCurrentImage(currentImage - 1)
                      : setCurrentImage(9)
                  }
                ></i>
              </div>
              <div className="col-md-8 col-12 text-center align-self-center">
                <div className="pt-3">
                  <img
                    src={pearray[currentImage]}
                    alt="current"
                    className="align-self-center testimonial-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{headarray[currentImage]}</h5>
                    <p className="card-text">{descarray[currentImage]}</p>
                  </div>
                </div>
                <div className="carousel-control-next">
                  <i
                    className="fa fa-angle-right fa-4x"
                    onClick={() =>
                      currentImage < 9
                        ? setCurrentImage(currentImage + 1)
                        : setCurrentImage(0)
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
