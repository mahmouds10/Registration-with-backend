import { openMenu, birthDateInput } from "./validator.js";

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
        if (index >= actorIds.length) {
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

document.getElementById("search").addEventListener("click", () => {
  getActors();
});
