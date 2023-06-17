import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "",
    email: "",
    password: "",
    retypePassword: ""
  });

  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setMsg("data submitted in console");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(data.name) || data.name.length < 5) {
      errors.name =
        "Name should only contain letters and spaces, and have a minimum length of 5";
    }

    // Mobile validation
    if (!/^[0-9]{5,}$/.test(data.mobile)) {
      errors.mobile =
        "Mobile should only contain numbers and have a minimum length of 5";
    }

    // Mobile validation
    if (!/^[0-9]+$/.test(data.mobile) || data.mobile.length < 5) {
      errors.mobile =
        "Mobile should only contain numbers and have a minimum length of 5";
    }

    // Gender validation
    if (data.gender !== "male" && data.gender !== "female") {
      errors.gender = "Please select a valid gender";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Password validation
    if (data.password.length < 5) {
      errors.password = "Password should have a minimum length of 5";
    }

    // Retype password validation
    if (data.password !== data.retypePassword) {
      errors.retypePassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="App">
      <div className="from-ui">
        <h2 className="heading">Create Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name">
            <input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className="mobile">
            <input
              placeholder="Mobile No"
              type="text"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span>{errors.mobile}</span>}
          </div>
          <div className="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="gender">
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" className="gender-input">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <span>{errors.gender}</span>}
          </div>

          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="confirmpassword">
            <input
              type="password"
              id="confirmPassword"
              name="retypePassword"
              placeholder="Retype Password"
              value={formData.retypePassword}
              onChange={handleChange}
            />
            {errors.retypePassword && <span>{errors.retypePassword}</span>}
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
        <h2>{msg}</h2>
      </div>
    </div>
  );
};

export default App;
