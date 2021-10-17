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
  try {
    const {
      data: { ip },
    } = await axios.get("https://api.ipify.org?format=json");
    const {
      data: { query },
    } = await axios.get(`http://api.ipstack.com/${ip}
    ? access_key = ${"c736948ab70415d6e35c802fec44bf0e"}`);

    const {
      data: { hello },
    } = await axios.get(`https://fourtonfish.com/hellosalut/?ip=${query}`);
    return hello;
  } catch (error) {
    console.log(error);
  }
};
