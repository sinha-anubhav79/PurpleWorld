function ContactForm() {
  return (
    <form class="needs-validation" novalidate>
      <div class="row g-3 m-2">
        <div class="col-sm-6">
          <label for="firstName" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder=""
            value=""
            required
          />
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>

        <div class="col-sm-6">
          <label for="lastName" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder=""
            value=""
            required
          />
          <div class="invalid-feedback">Valid last name is required.</div>
        </div>

        <div class="col-12">
          <label for="mobile" class="form-label">
            Mobile
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
          <label for="email" class="form-label">
            Email
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
          <label for="address" class="form-label">
            Address <span class="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="1234 Main St"
          />
        </div>

        <div class="col-md-5">
          <label for="country" class="form-label">
            Country <span class="text-muted">(Optional)</span>
          </label>
          <select class="form-select" id="country">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div class="invalid-feedback">Please select a valid country.</div>
        </div>

        <div class="col-md-4">
          <label for="state" class="form-label">
            State <span class="text-muted">(Optional)</span>
          </label>
          <select class="form-select" id="state">
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div class="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div class="col-md-3">
          <label for="zip" class="form-label">
            Zip
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

      <br class="my-4" />

      <div className="d-flex justify-content-center mb-3">
        <button class="btn btn-outline-primary btn-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
