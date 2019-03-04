// function getData = () => {() => {return("getting data")};};
// fetch("https://api.spacexdata.com/v3/launches")
//   .then(responce => responce.json())
//   .then(responceData => {
//     return responceData;
//   })
//   .catch(error => {
//     console.log("Error fetching and parsing data...", error);
//   });

// module.exports.getData = getData;

// WORKS
// export const getData = { name: "nuno" };

// WORKS
// export const getData = () => {
//   return { name: "nuno" };
// };

export const getData = () => {
  fetch("https://api.spacexdata.com/v3/launches")
    .then(responce => responce.json())
    .then(responceData => {
      return responceData;
    })
    .catch(error => {
      console.log("Error fetching and parsing data...", error);
    });
};
