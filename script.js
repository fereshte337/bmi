function signup(event) {
  event.preventDefault();
  const Age = document.querySelector("#age-bmi").value;
  if (Age == "") {
    document.querySelector(".error-age").innerText = "The field is required";
  } else {
    document.querySelector(".error-age").innerText = "";
  }
  const Gender = document.querySelector("input[name=gender]:checked");
  if (!Gender) {
    document.querySelector(".error-gender").innerText = "The field is required";
  } else {
    document.querySelector(".error-gender").innerText = "";
  }
  const Height = document.querySelector("#height-cm").value;
  if (Height == "") {
    document.querySelector(".error-height").innerText = "The field is required";
  } else {
    document.querySelector(".error-height").innerText = "";
  }
  const Width = document.querySelector("#width-cm").value;
  if ( Width == "") {
    document.querySelector(".error-width").innerText = "The field is required";
  } else {
    document.querySelector(".error-width").innerText = "";
  }
  
}
