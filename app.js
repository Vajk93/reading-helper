var textarea = document.getElementById('textarea');
var convertBtn = document.getElementById('convertBtn');
var main = document.getElementById('main');
var frame = document.getElementById("frame");
var mainTop = 0;
var frameBottom = "auto";
var backBtnSection = document.getElementById("backBtnSection");



function convert() {
  textarea.style.display = "none";
  convertBtn.style.display = "none";
  main.style.display = "block";

  main.innerHTML = `<div id="frame"></div>
                    <p>${textarea.value}</p>`;
                  
  
  var frame = document.getElementById("frame");
  var mainHeight = main.offsetHeight;

  var myTimer = setInterval(function() {
      mainTop +=22;
      console.log(mainTop);
      console.log(mainHeight); // return main height on console

      if(mainTop > (main.offsetHeight - 22)) {
        //the things what should happen, when the frame is finished the text
        frame.remove();
        clearInterval(myTimer);
        //alert("Finished");
        backBtnSection.style.opacity = "1";
      }
      frame.style.top=mainTop+"px";
  }, 2500);




}

