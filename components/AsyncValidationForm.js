import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../tools/validate";
import asyncValidate from "../tools/asyncValidate";
import renderField from "../tools/renderField";

/*
Asynchronous validation will be called before the onSubmit is fired, 
but if all you care about is validation onSubmit, you should use Submit Validation.
*/

const AsyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Sign Up
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "asyncValidation", // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ["username"]
})(AsyncValidationForm);
