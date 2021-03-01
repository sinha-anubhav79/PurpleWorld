import React from "react";
function GalItem(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2 thumb-post">
      <a
        href={props.imgAdd}

        //   data-bs-toggle="modal"
        //   data-bs-target="#exampleModal"
      >
        <img
          src={props.imgAdd}
          width="100"
          className="card-img-top thumb-img"
          alt="..."
        />
      </a>
    </div>
  );
}

export default GalItem;
