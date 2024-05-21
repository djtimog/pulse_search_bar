let searchInput = document.querySelector(".search");
let paragraph = document.querySelector(".para");
let cleartext = document.querySelector(".cancel");

let s = "";

function search(s) {
  s += searchInput.value;
  if (s == "") {
    alert("There is no content to search...");
    paragraph.innerHTML = paragraph.textContent;
    searchInput.value = "";
    cleartext.innerHTML = ``;
  } else {
    changeParagraph(s);
  }
}

const changeParagraph = (s) => {
  s += searchInput.value;
  paragraph.innerHTML = paragraph.textContent.replace(
    s,
    `<span class = "searchedText" id = "searchedText">${s}</span>`
  );
  cleartext.innerHTML = `x`;
};

let a_z = "abcdefghijklmnopqrustuvwxyz!?*,";
function enter(event) {
  if (event.key == "Backspace") {
    search(s);
  } else if (event.key == "Enter") {
    search(s);
  } else {
    for (let ln of a_z) {
      if (event.key == ln) {
        changeParagraph(s);
      }
    }
  }
}
