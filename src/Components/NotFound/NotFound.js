import React from "react";

const NotFound = () => {
  return (
    <div className=" card-container">
      <div class="alert alert-danger container" role="alert">
        <h1 class="alert-heading">404</h1>
        <h5>
          Page not found!!!
        </h5>
        <hr />
        <h5 class="mb-0 lead">
          The link you provide may not be valid. Please provide a valid link and try again.
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
