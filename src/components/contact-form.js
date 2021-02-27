function ContactForm() {
  return (
    <form class="needs-validation" novalidate>
      <div class="row g-3">
        <div class="col-12">
          <label htmlFor="firstName" class="form-label">
            First name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
            value=""
            required
          />
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>

        <div class="col-12">
          <label htmlFor="lastName" class="form-label">
            Last name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Last Name"
            value=""
            required
          />
          <div class="invalid-feedback">Valid last name is required.</div>
        </div>

        <div class="col-12">
          <label htmlFor="mobile" class="form-label">
            Mobile <span className="text-danger">*</span>
          </label>
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="mobile"
              placeholder="Mobile"
              required
            />
            <div class="invalid-feedback">Your Mobile is required.</div>
          </div>
        </div>

        <div class="col-12">
          <label htmlFor="email" class="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="you@example.com"
            required
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="col-12">
          <label htmlFor="address" class="form-label">
            Address <span class="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="1234 Main St"
          />
        </div>

        <div class="col-12">
          <label htmlFor="country" class="form-label">
            Country <span class="text-muted">(Optional)</span>
          </label>
          <select class="form-select" id="country">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div class="invalid-feedback">Please select a valid country.</div>
        </div>

        <div class="col-12">
          <label htmlFor="state" class="form-label">
            State <span class="text-muted">(Optional)</span>
          </label>
          <select class="form-select" id="state">
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div class="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div class="col-12">
          <label htmlFor="zip" class="form-label">
            Zip <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="zip"
            placeholder=""
            required
          />
          <div class="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <div className="d-flex justify-content-center m-2">
        <button
          class="btn btn-outline-dark rounded-pill btn-lg px-5"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
