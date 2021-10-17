import { methods } from "./methods.js";
import { form } from "./variables.js";

const { isValid, getData, showData } = methods;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isValid()) {
    const data = await getData();
    showData(data);
  }
});
