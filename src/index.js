import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "../tools/store";
import showResults from "../tools/showResults";
import SimpleForm from "../components/SimpleForm";
import SyncValidationForm from "../components/SyncValidationForm";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import SubmitValidationForm from "../components/SubmitValidationForm";

//import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
      <Values form="simple" />

      <h2>Synchronous Validation</h2>
      <SyncValidationForm onSubmit={showResults} />
      <Values form="syncValidation" />

      <h2>Field-Level Validation</h2>
      <FieldLevelValidationForm onSubmit={showResults} />
      <Values form="fieldLevelValidation" />

      <h2>Submit Validation</h2>
      <SubmitValidationForm onSubmit={showResults} />
      <Values form="submitValidation" />
    </div>
  </Provider>,
  rootElement
);
