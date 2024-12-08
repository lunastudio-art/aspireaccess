function placeHolderAlert(realPlace) {
  alert(
    "This is a conceptual link. It doesn't lead anywhere. If this were a real organization, this link would take you to " +
      realPlace
  );
}

function returnHeader() {
  fetch("../src/header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data))
    .catch((err) => console.error("Header loading failed:", err));
}

function returnFooter() {
  fetch("../src/footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data))
    .catch((err) => console.error("Footer loading failed:", err));
}
