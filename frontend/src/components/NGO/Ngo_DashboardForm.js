import React, { useState } from "react";

function NGO_Dashboard_form() {
  const [formData, setFormData] = useState({
    username: "",
    category: "",
    goal: {},
    desc: "",
    image: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access form data in formData object
    console.log(formData);

    // Add logic for form submission, e.g., sending data to the server

    try {
      // Make an HTTP POST request to your Node.js server using fetch
      const response = await fetch("http://localhost:4000/sitedata/ngosc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Ensure the request was successful (status code 2xx)
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Log the response from the server (you can handle it as needed)
      const responseData = await response.json();
      console.log(responseData);

      setFormData({
        username: "",
        category: "",
        goal: {},
        desc: "",
        image: "",
      });
    } catch (error) {
      console.log("Error Submitting form".error);
    }
  };
  return (
    <div>
      <center>
        <section className="contact-page">
          <div className="container">
            <div className="block-title text-center">
              <h4>Upload your Campaign</h4>
              <h2>Let us know about your NGO</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-form">
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form-validated contact-one__form"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="contact-form__input-box">
                          <input
                            required
                            type="text"
                            placeholder="Campaign Name"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-form__input-box">
                          <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-form__input-box">
                          <input
                            type="number"
                            placeholder="Goal"
                            name="goal"
                            value={formData.goal}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-form__input-box">
                          <textarea
                            name="desc"
                            required
                            placeholder="Write Description"
                            value={formData.desc}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                        <div className="DashReview">
                          <input
                            type="file"
                            className="thm-btn contact-form__btn"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                          />
                          <button
                            type="submit"
                            className="thm-btn contact-form__btn"
                          >
                            Upload Campaign
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </div>
  );
}
export default NGO_Dashboard_form;
