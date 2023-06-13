const validate = () => {
  let phone = document.getElementById("phone");
  phone.value = phone.value.replace(/[^\d]/g, "");
};
