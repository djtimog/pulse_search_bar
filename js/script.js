window.onload = () => {
  let searchInput = document.querySelector(".search");
  let paragraph = document.querySelector(".para");
  let cleartext = document.querySelector(".cancel");

  // changeParagraph();
  function search(s) {
    s += searchInput.value;
    if (s == "") {
      paragraph.innerHTML = paragraph.textContent;
      searchInput.value = "";
      cleartext.innerHTML = ``;
    } else {
      changeParagraph(s);
    }
  }

  const changeParagraph = (s) => {
    paragraph.innerHTML = paragraph.textContent.replace(
      s,
      `<span class = "searchedText" id = "searchedText">${s}</span>`
    );
    cleartext.innerHTML = `x`;
  };
  search("");
};

setInterval(window.onload, 1000);

// let a_z = "abcdefghijklmnopqrustuvwxyz!?*,";
// function enter(event) {
//   if (event.key == "Backspace") {
//     search();
//   } else if (event.key == "Enter") {
//     search(s);
//   } else {
//     for (let ln of a_z) {
//       if (event.key == ln) {
//         changeParagraph(s);
//       }
//     }
//   }
// }

// function clearInput(s){
//   s = "";
//   searchInput.value = "";
//   cleartext.innerHTML = ``;
//   paragraph.innerHTML = paragraph.textContent.replace(`<span class = "searchedText" id = "searchedText">${s}</span>`, s);
// }
