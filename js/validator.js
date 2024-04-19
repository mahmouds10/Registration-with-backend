// ============== Handling signing up ==============//
// declaring variables:-
const nameInput = document.getElementById("name");
const userNameInput = document.getElementById("username");
const mailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const acceptPoliciesInput = document.getElementById("polices");
const signUpbtn = document.getElementById("signup");
const passwordInput = document.getElementById("pass");
const showPasswordBtn = document.getElementById("eye");
const hidePasswordBtn = document.getElementById("eye-slash");
const rePasswordInput = document.getElementById("re-pass");
const phoneInput = document.getElementById("phone");
const showRePasswordBtn = document.getElementById("eye-re");
const hideRePasswordBtn = document.getElementById("eye-slash-re");
const birthDateInput = document.getElementById("bd");
const photoInput = document.getElementById("photo");
const togleMenu = document.getElementById("check");

// Activate Popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);


// Toggle Password:-
passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value == "") {
    showPasswordBtn.style.display = "none";
    hidePasswordBtn.style.display = "none";
    passwordInput.type = "password";
  } else {
    showPasswordBtn.style.display = "block";
  }
});
showPasswordBtn.addEventListener("click", function () {
  showPasswordBtn.style.display = "none";
  hidePasswordBtn.style.display = "block";
  passwordInput.type = "text";
});

hidePasswordBtn.addEventListener("click", function () {
  showPasswordBtn.style.display = "block";
  hidePasswordBtn.style.display = "none";
  passwordInput.type = "password";
});

// Toggle RePssword
rePasswordInput.addEventListener("keyup", function () {
  if (rePasswordInput.value == "") {
    showRePasswordBtn.style.display = "none";
    hideRePasswordBtn.style.display = "none";
    rePasswordInput.type = "password";
  } else {
    showRePasswordBtn.style.display = "block";
  }
});
showRePasswordBtn.addEventListener("click", function () {
  showRePasswordBtn.style.display = "none";
  hideRePasswordBtn.style.display = "block";
  rePasswordInput.type = "text";
});

hideRePasswordBtn.addEventListener("click", function () {
  showRePasswordBtn.style.display = "block";
  hideRePasswordBtn.style.display = "none";
  rePasswordInput.type = "password";
});

// Toggle the side menu
const openMenu = () => {
  document.getElementById("layer").style.display = "block";
  document.getElementById("side-menu").style.right = "0";
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
  document.getElementById("side-menu").style.overflow = "auto";
};
const closeMenu = () => {
  document.getElementById("layer").style.display = "none";
  document.getElementById("side-menu").style.right = "-700px";
  document.body.style.height = "";
  document.body.style.overflow = "";
  document.getElementById("side-menu").style.overflow = "";
};
document.getElementById("close").addEventListener("click", () => {
  closeMenu();
});
togleMenu.addEventListener("click", function () {
  if (togleMenu.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Toggle search button
document.getElementById("search").addEventListener("mouseenter", function () {
  if (birthDateInput.value === "") {
    document.querySelector("lord-icon").style.top = "50%";
    document.querySelector("lord-icon").style.opacity = "0";
  } else {
    document.querySelector("lord-icon").style.top = "-60%";
    document.querySelector("lord-icon").style.opacity = "1";
  }
});
document.getElementById("search").addEventListener("mouseleave", function () {
  document.querySelector("lord-icon").style.top = "50%";
  document.querySelector("lord-icon").style.opacity = "0";
});

document.getElementById("search").addEventListener("click", function () {
  if (birthDateInput.value === "") {
    birthDateInput.style.border = "1px solid red";
  }
});
birthDateInput.addEventListener("change", function () {
  if (birthDateInput.value !== "") {
    birthDateInput.style.border = "";
    document.querySelector("#search").disabled = false;
    document.querySelector("#search").classList.add("valid-btn");
  } else {
    document.querySelector("#search").classList.remove("valid-btn");
    document.querySelector("#search").disabled = true;
  }
});

// Validate Name:-
function validateName(name) {
  const nameRegex = /^[a-zA-Z\s']+$/;
  return nameRegex.test(name);
}
function checkName() {
  if (nameInput.value == "") {
    nameInput.classList.remove("valid");
    nameInput.classList.remove("invalid");
    document.getElementById("v-name").classList.remove("show");
    document.getElementById("inv-name").classList.remove("show");
  } else {
    if (validateName(nameInput.value)) {
      nameInput.classList.add("valid");
      nameInput.classList.remove("invalid");
      document.getElementById("v-name").classList.add("show");
      document.getElementById("inv-name").classList.remove("show");
    } else {
      nameInput.classList.remove("valid");
      nameInput.classList.add("invalid");
      document.getElementById("v-name").classList.remove("show");
      document.getElementById("inv-name").classList.add("show");
    }
  }
}
nameInput.addEventListener("keyup", checkName);
nameInput.addEventListener("blur", checkName);

// Validate Email:-
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function checkMail() {
  if (mailInput.value == "") {
    mailInput.classList.remove("valid");
    mailInput.classList.remove("invalid");
    document.getElementById("v-mail").classList.remove("show");
    document.getElementById("inv-mail").classList.remove("show");
    document.getElementById("email-exist-hint").style.display = "none";
    document.getElementById("inv-mail").classList.remove("exist-hint");
  } else {
    if (validateEmail(mailInput.value)) {
      mailInput.classList.add("valid");
      mailInput.classList.remove("invalid");
      document.getElementById("v-mail").classList.add("show");
      document.getElementById("inv-mail").classList.remove("show");
    } else {
      mailInput.classList.remove("valid");
      mailInput.classList.add("invalid");
      document.getElementById("v-mail").classList.remove("show");
      document.getElementById("inv-mail").classList.add("show");
    }
  }
}
mailInput.addEventListener("keyup", checkMail);
mailInput.addEventListener("blur", checkMail);

// Validate Password
function validatePassword(pass) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[A-Za-z\d!@#$%^&*()_+}{"':;?/>.<,]{8,}$/;
  return passwordRegex.test(pass);
}
passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value == "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.remove("invalid");
    document.getElementById("v-img").classList.remove("show");
    document.getElementById("inv-img").classList.remove("show");
  } else {
    if (validatePassword(passwordInput.value)) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      document.getElementById("v-img").classList.add("show");
      document.getElementById("inv-img").classList.remove("show");
      checkRePassword();
    } else {
      checkRePassword();
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("invalid");
      document.getElementById("v-img").classList.remove("show");
      document.getElementById("inv-img").classList.add("show");
    }
  }
});
passwordInput.addEventListener("blur", function () {
  if (passwordInput.value == "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.remove("invalid");
    document.getElementById("v-img").classList.remove("show");
    document.getElementById("inv-img").classList.remove("show");
  } else {
    if (validatePassword(passwordInput.value)) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      document.getElementById("v-img").classList.add("show");
      document.getElementById("inv-img").classList.remove("show");
      checkRePassword();
    } else {
      checkRePassword();
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("invalid");
      document.getElementById("v-img").classList.remove("show");
      document.getElementById("inv-img").classList.add("show");
    }
  }
});

// Validate Rpassword
function validateRePassword() {
  if (rePasswordInput.value === passwordInput.value) {
    return true;
  }
}
function checkRePassword() {
  if (rePasswordInput.value == "") {
    rePasswordInput.classList.remove("valid");
    rePasswordInput.classList.remove("invalid");
    document.getElementById("rev-img").classList.remove("show");
    document.getElementById("reinv-img").classList.remove("show");
  } else {
    if (validateRePassword() && validatePassword(passwordInput.value)) {
      rePasswordInput.classList.add("valid");
      rePasswordInput.classList.remove("invalid");
      document.getElementById("rev-img").classList.add("show");
      document.getElementById("reinv-img").classList.remove("show");
    } else {
      rePasswordInput.classList.remove("valid");
      rePasswordInput.classList.add("invalid");
      document.getElementById("rev-img").classList.remove("show");
      document.getElementById("reinv-img").classList.add("show");
    }
  }
}
rePasswordInput.addEventListener("keyup", checkRePassword);
rePasswordInput.addEventListener("blur", checkRePassword);

// Validate Phone
function validatePhone() {
  const phone_Regex = /^(?:\+?20|0)?1[0125]\d{8}$/;
  return phone_Regex.test(phoneInput.value.trim());
}
function checkPhone() {
  if (phoneInput.value == "") {
    phoneInput.classList.remove("valid");
    phoneInput.classList.remove("invalid");
    document.getElementById("v-phone").classList.remove("show");
    document.getElementById("inv-phone").classList.remove("show");
  } else {
    if (validatePhone(phoneInput.value)) {
      phoneInput.classList.add("valid");
      phoneInput.classList.remove("invalid");
      document.getElementById("v-phone").classList.add("show");
      document.getElementById("inv-phone").classList.remove("show");
    } else {
      phoneInput.classList.remove("valid");
      phoneInput.classList.add("invalid");
      document.getElementById("v-phone").classList.remove("show");
      document.getElementById("inv-phone").classList.add("show");
    }
  }
}
phoneInput.addEventListener("keyup", checkPhone);
phoneInput.addEventListener("blur", checkPhone);

// Validate userName
function validateUserName() {
  if (userNameInput.value === "") {
    userNameInput.classList.remove("valid");
    userNameInput.classList.remove("invalid");
    document.getElementById("v-userName").classList.remove("show");
    document.getElementById("inv-userName").classList.remove("show");
  } else {
    userNameInput.classList.add("valid");
    userNameInput.classList.remove("invalid");
    document.getElementById("v-userName").classList.add("show");
    document.getElementById("inv-userName").classList.remove("show");
  }
}
userNameInput.addEventListener("keyup", validateUserName);
userNameInput.addEventListener("blur", validateUserName);

// Validate Address
function validateAddress() {
  if (addressInput.value === "") {
    addressInput.classList.remove("valid");
    addressInput.classList.remove("invalid");
    document.getElementById("v-address").classList.remove("show");
    document.getElementById("inv-address").classList.remove("show");
  } else {
    addressInput.classList.add("valid");
    addressInput.classList.remove("invalid");
    document.getElementById("v-address").classList.add("show");
    document.getElementById("inv-address").classList.remove("show");
  }
}
addressInput.addEventListener("keyup", validateAddress);
addressInput.addEventListener("blur", validateAddress);

// Check to make button available
function checkBtn() {
  if (
    acceptPoliciesInput.checked &&
    validateName(nameInput.value) &&
    userNameInput.value !== "" &&
    validateEmail(mailInput.value) &&
    validatePassword(passwordInput.value) &&
    validateRePassword() &&
    validatePhone() &&
    addressInput.value !== "" &&
    birthDateInput.value !== "" &&
    photoInput.value !== ""
  ) {
    signUpbtn.classList.add("valid-btn");
    signUpbtn.disabled = false;
  } else {
    signUpbtn.classList.remove("valid-btn");
    signUpbtn.disabled = true;
  }
}
nameInput.addEventListener("keyup", function () {
  checkBtn();
});
mailInput.addEventListener("keyup", function () {
  checkBtn();
});
passwordInput.addEventListener("keyup", function () {
  checkBtn();
});
rePasswordInput.addEventListener("keyup", function () {
  checkBtn();
});
phoneInput.addEventListener("keyup", function () {
  checkBtn();
});
addressInput.addEventListener("keyup", function () {
  checkBtn();
});
userNameInput.addEventListener("keyup", function () {
  checkBtn();
});
birthDateInput.addEventListener("change", function () {
  checkBtn();
});
photoInput.addEventListener("change", function () {
  checkBtn();
});
acceptPoliciesInput.addEventListener("change", function () {
  checkBtn();
});
// ============================================================== //

export {openMenu , birthDateInput , signUpbtn ,userNameInput}