import React, { useState, useEffect } from "react";
import validation from "./validation";

const Form = ({ submitForm }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

//   function handleChange(e) {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   }
  const handleChange = (e)=> {
    const {name, value, type, checked} = e.target
    setValues(prevState => {
        return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
        }
    })
    }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors, dataIsCorrect, submitForm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Help Request</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            value={values.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <div>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
          Stay up-to-date with company announcements and updates to our API
          </label>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
