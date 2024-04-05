// const getActors = (day, month, getDetails) => {
//   return new Promise((resolve, reject) => {
//     const idsRequest = new XMLHttpRequest();
//     idsRequest.open(
//       "GET",
//       `https://imdb8.p.rapidapi.com/actors/list-born-today?month=${month}&day=${day}`
//     );
//     idsRequest.setRequestHeader(
//       "X-RapidAPI-Key",
//       "b3f899123dmsh5e4b64ddd6358e0p1bcabfjsnc178b54db756"
//     );
//     idsRequest.setRequestHeader("X-RapidAPI-Host", "imdb8.p.rapidapi.com");
//     idsRequest.send();
//     idsRequest.addEventListener("readystatechange", function () {
//       let index = 0;
//        function processNextId(ids) {
//         if (index < ids.length) {
//           const id = ids[index];
//          getDetails(id);
//            index++;
//          setTimeout(() => {
//          processNextId(ids);
//           }, 200);
//      } else {
//        resolve(); // Resolve the Promise when all IDs are processed
//      }
//       }
//       if (this.readyState === 4) {
//         const response = JSON.parse(this.response);
//         console.log(response);
//         const ids = response.map((item) => item.split("/")[2]);
//         document.getElementById("actors-area").innerHTML = ids
//         processNextId(ids);
//       }
//     });
//   });
// };
// const getDetails = (id) => {
//   const detailsRequest = new XMLHttpRequest();
//   detailsRequest.open(
//     "get",
//     `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${id}`
//   );
//   detailsRequest.setRequestHeader(
//     "X-RapidAPI-Key",
//     "b3f899123dmsh5e4b64ddd6358e0p1bcabfjsnc178b54db756"
//   );
//   detailsRequest.setRequestHeader("X-RapidAPI-Host", "imdb8.p.rapidapi.com");
//   detailsRequest.send();
//   detailsRequest.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       const response = JSON.parse(this.response);
//       finalData.push(response);
//     }
//   });
// };

// document.getElementById("search").addEventListener("click", async function () {
//   try {
//     await getActors(16, 12, getDetails);
//     console.log("All requests processed.");
//     console.log(finalData);

//     let htmlContent = "";
//     for (let i = 0; i < finalData.length; i++) {
//       htmlContent += `
//         <div class="actor col-6  d-flex g-1 align-items-center justify-content-start">
//           <div class="col-4">
//             <img src=${finalData[i].image.url} class="w-100" alt="">
//           </div>
//           <div class="col-8">
//             <h6>${finalData[i].name}</h6>
//             <h6>${finalData[i].birthPlace}</h6>
//           </div>
//         </div>`;
//     }

//     document.getElementById("actors-area").innerHTML = htmlContent;
//   } catch (error) {
//     console.error("Error:", error);
//   }
//   getActors(16,12)
// });
