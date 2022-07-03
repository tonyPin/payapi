import React, {useState} from "react";

import Form from "../components/Form";
import FormSuccess from "../components/FormSuccess";


export default function Contact() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <section>
      <h1>This is the Contact Page.</h1>

      {!formIsSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </section>
  );
}
