const cardFacial = document.querySelector(".cardFacial");
const cardLutGenerator = document.querySelector(".cardLutGenerator");
const cardApp = document.querySelector(".cardApp");

cardFacial.addEventListener("click", () => {
  window.open("facialExpression/facialExpressions.html", "_blank");
});


cardLutGenerator.addEventListener("click", () => {
  window.open("lutGenerator/lutGenerator.html", "_blank");
});

cardApp.addEventListener("click", () => {
  window.open("https://play.google.com/store/apps/details?id=spark.ar.assets", "_blank");
});
