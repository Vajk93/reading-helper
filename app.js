let textarea = document.getElementById("textarea");
let convertBtn = document.getElementById("convertBtn");
let main = document.getElementById("main");
let frame = document.getElementById("frame");
let mainTop = 0;
let frameBottom = "auto";
let backBtnSection = document.getElementById("backBtnSection");
let exampleSection = document.getElementById("example-section");
let introText = document.querySelector(".intro-text");

function convert() {
  textarea.style.display = "none";
  convertBtn.style.display = "none";
  exampleSection.style.display = "none";
  introText.style.display = "none";
  main.style.display = "block";

  main.innerHTML = `<div id="frame"></div>
  <p>${textarea.value}</p>`;

  backBtnSection.style.opacity = "1";
  let frame = document.getElementById("frame");
  let mainHeight = main.offsetHeight;

  let myTimer = setInterval(function () {
    mainTop += 21;
    console.log(mainTop);
    console.log(mainHeight); // return main height on console

    if (mainTop > main.offsetHeight - 21) {
      //the things what should happen, when the frame is finished the text
      frame.remove();
      clearInterval(myTimer);
      //alert("Finished");
    }
    frame.style.top = mainTop + "px";
  }, 3000);
}

// copy to clipboard
let text = document.getElementById("copy-example-text").innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
