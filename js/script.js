const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuMd = document.getElementById("menu-md");
const signUpMd = document.getElementById("signUp-md");

btn.onclick = () => {
  if (menu.classList.contains("flex")) {
    btn.classList.replace("md:visible", "md:hidden");
    menuMd.classList.replace("md:hidden", "md:flex");
    signUpMd.classList.replace("md:hidden", "md:flex");
  }
  navToggle();
};

window.onresize = () => {
  if (menu.classList.contains("flex")) {
    btn.classList.replace("md:hidden", "md:visible");
    menuMd.classList.replace("md:flex", "md:hidden");
    signUpMd.classList.replace("md:flex", "md:hidden");
  } else {
    if (btn.classList.contains("md:visible")) {
      btn.classList.replace("md:visible", "md:hidden");
    }
    menuMd.classList.replace("md:hidden", "md:flex");
    signUpMd.classList.replace("md:hidden", "md:flex");
  }
};

const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

linkForm.addEventListener("submit", formSubmit);

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
  } else {
    errMsg.innerHTML = "";
    alert("success!");
  }
}
