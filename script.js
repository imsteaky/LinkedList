var websiteTitleInput = document.querySelector(".website-title-field");
var websiteUrlInput = document.querySelector(".website-url-field");
var enterButton = document.querySelector(".enter-button");
var cardContainer = document.querySelector(".card-container");
var counter = 0;
<<<<<<< HEAD
var inputForm = document.querySelector(".form-fields");
=======
var inputForm = document.getElementById("form-fields");
var card = $(".card");
>>>>>>> de483c78d3f47c0d0b0743c2a300465cc0186861

websiteTitleInput.addEventListener("keyup", enterButton);
websiteUrlInput.addEventListener("keyup", enterButton);
enterButton.addEventListener("click", createField);
generatedField.addEventListener("click", deleteLinkButton);



// ---------------- enter button functionality------------- //

function createField() {
  event.preventDefault();
<<<<<<< HEAD
  // console.log(this.parentNode)
  var siteName = websiteTitleInput.value;
  var siteUrl = websiteUrlInput.value;
  var card = document.createElement("div");
  
  
  card.innerHTML = `
=======
  siteName = websiteTitleInput.value;
  siteUrl = websiteUrlInput.value;
  $('.card-container').append(`
>>>>>>> de483c78d3f47c0d0b0743c2a300465cc0186861
      <article class="card">
          <h2>${siteName}</h2>
          <hr>
          <a href="${siteUrl}">
            <p>${siteUrl}</p>
          </a>
          <hr>
          <button class="read-button">Read</button>
          <button class="delete-button">Delete</button>
<<<<<<< HEAD
        </article>`;
        
  cardContainer.append(card);
=======
        </article>`);
>>>>>>> de483c78d3f47c0d0b0743c2a300465cc0186861
  inputForm.reset();
  handleEnterButton();

<<<<<<< HEAD
function newDeleteFunction() {
  var deleteButtons = document.querySelectorAll(".delete-button"); 
  var buttonIndex = deleteButtons.length-1;
  deleteButtons[buttonIndex].addEventListener("click", deleteLinkButton);
}
//figure out how to select each card using parent nodes 

function deleteLinkButton() {
  // cardContainer.innerHTML = "";
  // clearInputFields();
  // counter--;
  // console.log(this);
  cardContainer.removeChild(this.parentNode.parentNode);
  // I want to remove this child, but since I cant find that child I want to find it through clicking this, and this is a button, and the parent of that (the card) and the parent of that (the div cardContainer)
  // console.log(this.parentNode.parentNode)
=======
}
>>>>>>> de483c78d3f47c0d0b0743c2a300465cc0186861

function deleteLinkButton(event) {
  if (event.target.classList.contains("delete-button")) {
      event.target.parentNode.remove();
      counter--;
      $(".number-of-links").text(counter);
  }  
}

function handleEnterButton() {
  counter++;
  $(".number-of-links").text(counter);
}


//------------------- READ BUTTON --------------------------//

// var readButton = document.querySelector(".read-button");
// var readCounter = 0;

// readButton.addEventListener("click", function() {
//   toggleReadLink();
// });

// function addOneToReadCounter() {
//   document.querySelector(".number-of-read").innerText = readCounter;
//   readCounter++;

//   function toggleReadLink() {
//     var element = document.querySelector(".card-mockup");
//     element.classList.toggle("card-marked-as-read");
//     addOneToReadCounter();
//   }
// }
// ----------------------CLEAR ALL READ LINKS----------------------//

var clearButton = document.querySelector(".clear-all-links");
clearButton.addEventListener("click", clearAllLinks);

function clearAllLinks() {
  (document.querySelector(".number-of-links").innerText = 0), (counter = 0);
  (document.querySelector(".number-of-read").innerText = 0), (readCounter = 0);
}

// function noTextEntered(){
//   event.preventDefault();
//   if(websiteTitleInput.value !== ""){
//     return enterButton.disabled = false;
//   }
// }


/* indicate a time stamp*/
/* Date.now , set this somewhere on our template literal with vanilla or jquery*/
