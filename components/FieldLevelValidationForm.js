import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../tools/renderField";

const required = value => (value ? undefined : "Required");

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

const minValue18 = minValue(18);

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[required, number, minValue18]}
        warn={tooOld}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldLevelValidation" // a unique identifier for this form
})(FieldLevelValidationForm);
