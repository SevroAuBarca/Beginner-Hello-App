form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isValid()) {
    const data = await getData();
    showData(data);
  }
});
