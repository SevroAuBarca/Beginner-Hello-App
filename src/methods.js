import { vars } from "./variables.js";

const { user, password, main, submit } = vars;
let { flag } = vars;

const isValid = () => {
  if (user.value.trim() === "" || password.value.trim() === "") {
    let dato = `Please fill your user and password`.toUpperCase();
    main.innerHTML = "";

    main.innerHTML = `<h1 class="animate__animated animate__fadeIn text" data-text="${dato}">
    ${dato}
  </h1>`;
  } else {
    return true;
  }
};

const showData = (data) => {
  if (flag) {
    let dato =
      `${data} ${user.value} you have successfully logged in!`.toUpperCase();
    main.innerHTML = "";

    main.innerHTML = `<h1 class="animate__animated animate__fadeIn text" data-text="${dato}">
    ${dato}
  </h1>`;
    flag = false;
    submit.value = "Log Out";
  } else {
    let dato = `Have a great day ${user.value}!`.toUpperCase();
    main.innerHTML = "";

    main.innerHTML = `<h1 class="animate__animated animate__fadeIn text" data-text="${dato}">
    ${dato}
  </h1>`;
    flag = true;
    user.value = "";
    password.value = "";
    submit.value = "Log in";
  }
};

const getData = async () => {
  const access_key = "c736948ab70415d6e35c802fec44bf0e";
  try {
    const {
      data: { ip },
    } = await axios.get("https://api.ipify.org?format=json");
    // console.log(ip);
    // const datos = await axios.get(
    //   `http://api.ipstack.com/${ip}?access_key=${access_key}`
    // );
    // console.log(datos);
    const {
      data: { hello },
    } = await axios.get(`https://fourtonfish.com/hellosalut/?ip=${ip}`);
    return hello;
  } catch (error) {
    console.log(error);
  }
};

export const methods = {
  isValid,
  getData,
  showData,
};
