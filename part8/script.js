// alert("connected")
//paragraph or event // event fiirst most of the time

// document.querySelector('.')

const originalText = document.getElementById("myParagraph").textContent;
let paragraph = document.getElementById("myParagraph");
let isChanged = false;
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(paragraph);
    if (isChanged) {
      paragraph.textContent = originalText;
    } else {
      paragraph.textContent = "the paragraph is changed";
    }
    isChanged = !isChanged;
  });

// document
//   .getElementById("changeTextButton")
//   .addEventListener("dblclick", function () {
//     console.log("Doube-click detected");
//     paragraph.textContent = originalText;
//   });

//example 2
let ishighlight = false;
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let hold = document.getElementById("citiesList");
    // console.log(hold);
    let fisrtCity = hold.firstElementChild;
    if (ishighlight) {
      fisrtCity.classList.remove("highlight");
    } else {
      fisrtCity.classList.add("highlight");
    }

    ishighlight = !ishighlight;
  });

//exampler-3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeOrder");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.fontStyle = "Bold";
});

//example - 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskitem = document.getElementById("taskList");
    taskitem.lastElementChild.remove();
  });

//example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event.target)
  if (event.target && event.target.matches(".teasItem")) {
    alert("you selected: " + event.target.textContent);
  }
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    // alert("submitted")
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
    document.getElementById("feedbackDisplay").style.backgroundColor = "red";

    let label = document.querySelector('label[for="feedbackInput"]');
    console.log(label);
  });

//example9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom Fully loaded";
});

//example 10 
document.getElementById("toggleHighlight").addEventListener("click",function(){
  let description = document.getElementById("descriptionText");
  description.classList.toggle("highlight")
});
