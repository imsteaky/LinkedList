//function to clear the link counter
var clearButton = document.querySelector(".clear-all-links");
clearButton.addEventListener("click", clearAllLinks);

function clearAllLinks(){
  document.querySelector(".number-of-links").innerText = 0, counter=0;
  document.querySelector(".number-of-read").innerText = 0, readCounter=0;
  console.log("clear button firing");
}

// function to add a card to the counter and generated a new card when the enter button is clicked
var counter= 0;
var enterButton = document.querySelector(".enter-button");
enterButton.addEventListener("click", function(event){
  event.preventDefault();
  createField();
  console.log('Enter button firing');
  // generateNewCard() function call goes here;
  document.querySelector(".number-of-links").innerText = counter;
  counter++;
})


// function to toggle the "read" class on all the cards. still needs to change the "read" text to red and any other styles that need to be applied
var readLinkToggleButton = document.querySelector(".bottom-text-read");
var readCounter = 0;

function addOneToReadCounter(){
  document.querySelector(".number-of-read").innerText = readCounter;
  console.log('read counter firing');
  readCounter++;
}


readLinkToggleButton.addEventListener("click", function(){
  event.preventDefault();
  console.log('toggle button firing');
  toggleReadLink();
})

function toggleReadLink(){
  console.log("toggle class function firing");
  var element = document.querySelector(".card-mockup");
  element.classList.toggle("card-marked-as-read");
  addOneToReadCounter();
}

/* functionality */
var websiteTitleInput = document.querySelector('.website-title-field');
var websiteUrlInput = document.querySelector('.website-url-field');
var enterButton = document.querySelector('.enter-button');
var generatedField = document.querySelector('.website-box-mockup');


websiteTitleInput.addEventListener('keyup', enterButton);
websiteUrlInput.addEventListener('keyup', enterButton);
enterButton.addEventListener('click', createField);


function createField() {
    siteName = (websiteTitleInput.value);
    siteUrl = (websiteUrlInput.value);
    generatedField.innerHTML = (`
    <div class='website-box-mockup'>
    <h2>${siteName}</h2>
    <hr> 
    <a href="${siteUrl}">
      <p>${siteUrl}/p>
    </a>
    <hr>
    <p class="bottom-text">Read</p>
    <p class="bottom-text bottom-text2">Delete</p>
    </div>`);
    
  };

    // var deleteButton = document.querySelector('.bottom-text-delete');
    // deleteButton.addEventListener('click', generatedField)
    // console.log('delete-button-firing')
    // event.preventDefault();
    // ;
