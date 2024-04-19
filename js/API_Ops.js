import { openMenu, birthDateInput, signUpbtn, userNameInput } from "./validator.js";

// Clear the form
function clearForm() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  acceptPoliciesInput.checked = false;

  nameInput.classList.remove("valid");
  nameInput.classList.remove("invalid");
  document.getElementById("v-name").classList.remove("show");
  document.getElementById("inv-name").classList.remove("show");

  mailInput.classList.remove("valid");
  mailInput.classList.remove("invalid");
  document.getElementById("v-mail").classList.remove("show");
  document.getElementById("inv-mail").classList.remove("show");

  passwordInput.classList.remove("valid");
  passwordInput.classList.remove("invalid");
  document.getElementById("v-img").classList.remove("show");
  document.getElementById("inv-img").classList.remove("show");
  showPasswordBtn.style.display = "none";
  hidePasswordBtn.style.display = "none";
  passwordInput.type = "password";
  signUpbtn.classList.remove("valid-btn");
}

const getActors = () => {
  const date = new Date(birthDateInput.value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  document.getElementById("thisDay").innerHTML = month + " / " + day;

  document.getElementById("actors-area").innerHTML = `
  <div class="d-flex h-100 justify-content-center align-items-center">
  <lottie-player src="Imgs/Animation1713352512964.json" background="transparent" speed="1"
      style="width: 300px; height: 300px;" loop autoplay></lottie-player>
</div>
  `;

  openMenu();

  const idsRequest = new XMLHttpRequest();
  idsRequest.open(
    "GET",
    `https://imdb8.p.rapidapi.com/actors/list-born-today?month=${month}&day=${day}`
  );
  idsRequest.setRequestHeader(
    "X-RapidAPI-Key",
    "348686b5e5mshe1b1939f9c8fdb1p1eee17jsn195fc3481d81"
  );
  idsRequest.setRequestHeader("X-RapidAPI-Host", "imdb8.p.rapidapi.com");
  idsRequest.send();

  idsRequest.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const response = JSON.parse(this.response);
      const actorIds = response.map((item) => item.split("/")[2]);

      if (actorIds.length === 0) {
        document.getElementById("actors-area").innerHTML =
          "No actors found for this day.";
        return;
      }

      const actorDetails = [];
      const maxRequestsPerSecond = 5;
      let requestsCounter = 0;

      const fetchActorDetails = (index) => {
        if (index >= 10) {
          document.getElementById("actors-area").innerHTML =
            actorDetails.join("");
          return;
        }

        const actorId = actorIds[index];
        const detailsRequest = new XMLHttpRequest();
        detailsRequest.open(
          "GET",
          `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actorId}`
        );
        detailsRequest.setRequestHeader(
          "X-RapidAPI-Key",
          "348686b5e5mshe1b1939f9c8fdb1p1eee17jsn195fc3481d81"
        );
        detailsRequest.setRequestHeader(
          "X-RapidAPI-Host",
          "imdb8.p.rapidapi.com"
        );
        detailsRequest.send();

        detailsRequest.addEventListener("load", function () {
          const actorData = JSON.parse(this.response);
          const actorHTML = `
            <div class="actor col-9  d-flex g-1 align-items-center justify-content-start">
              <div class="col-4">
                <img src="${actorData.image.url}" class="w-50" alt="">
              </div>
              <div class="col-8">
                <h6>${actorData.name}</h6>
                <h6>${actorData.birthPlace}</h6>
              </div>
            </div>
          `;
          actorDetails.push(actorHTML);
          requestsCounter++;
          if (requestsCounter >= maxRequestsPerSecond) {
            setTimeout(() => {
              fetchActorDetails(index + 1);
              requestsCounter = 0;
            }, 1000);
          } else {
            fetchActorDetails(index + 1);
          }
        });
      };

      fetchActorDetails(0);
    }
  });
};

const createUser = () => {
  const username = document.getElementById('username').value;
  const fullname = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const password = document.getElementById('pass').value;
  const confirmpassword = document.getElementById('re-pass').value;
  const phone = document.getElementById('phone').value;
  const birthdate = document.getElementById('bd').value;
  const photoInput = document.getElementById("photo");
  const file = photoInput.files[0];
  const myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=1p76u7oc2jvhqemn3ad9tavkc6");

  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("fullname", fullname);
  formdata.append("address", address);
  formdata.append("birthdate", birthDateInput);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("confirmpassword", confirmpassword);
  formdata.append("phone", phone);
  formdata.append("birthdate", birthdate);
  formdata.append("photo", file); 

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "http://localhost/Projects/assignment/pages/createUserController.php",
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Error uploading file");
      }
    })
    .then((result) => {
      const finalResult = JSON.parse(result)
      if(finalResult.status == 403){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The user name is alredy taken. Try another one!",
      })
      }
      else{
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Your account has been created.",
        }).then(() => {
          clearForm();
        })

      }
    })
    
};
signUpbtn.addEventListener("click", () => {
  createUser();
});

document.getElementById("search").addEventListener("click", () => {
  getActors();
});
