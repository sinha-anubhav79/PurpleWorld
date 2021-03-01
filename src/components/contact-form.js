import React from "react";
function ContactForm() {
  return (
    <form className="needs-validation" noValidate>
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            First name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            required
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Last name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            required
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="mobile" className="form-label">
            Mobile <span className="text-danger">*</span>
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Mobile"
              required
            />
            <div className="invalid-feedback">Your Mobile is required.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            required
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
          />
        </div>

        <div className="col-12">
          <label htmlFor="country" className="form-label">
            Country <span className="text-muted">(Optional)</span>
          </label>
          <select className="form-select" id="country">
            <option>Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>

        <div className="col-12">
          <label htmlFor="state" className="form-label">
            State <span className="text-muted">(Optional)</span>
          </label>
          <select className="form-select" id="state">
            <option>Choose...</option>
            <option>California</option>
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div className="col-12">
          <label htmlFor="zip" className="form-label">
            Zip <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <div className="d-flex justify-content-center m-2">
        <button
          className="btn btn-outline-dark rounded-pill btn-lg px-5"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
