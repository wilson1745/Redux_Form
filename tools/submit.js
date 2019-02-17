import { SubmissionError } from "redux-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const userData = ["john", "paul", "george", "ringo"];

const userPass = "redux-form";

function submit(values) {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (!userData.includes(values.username)) {
        throw new SubmissionError({
          username: "User does not exist",
          _error: "Login failed!"
        });
      } else if (values.password !== userPass) {
        throw new SubmissionError({
          password: "Wrong password",
          _error: "Login failed!"
        });
      } else {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      }
    });
}

export default submit;
