var websiteTitleInput = document.querySelector('.website-title-field');
var websiteUrlInput = document.querySelector('.website-url-field');
var enterButton = document.querySelector('.enter-button');
var generatedField = document.querySelector('.website-box-mockup');


websiteTitleInput.addEventListener('keyup', submitEnable);
websiteUrlInput.addEventListener('keyup', submitEnable);
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
    var enterButton = document.querySelector('.bottom-text');
     enterButton.addEventListener('click', toggle);
    var deleteButton = document.querySelector('.bottom-text2');
    deleteButton.addEventListener('click', reset);
    clearInputFields();
  };
  
function clearInputFields() {
    websiteTitleInput.value = '';
    websiteUrlInput.value = '';
    enterButton.disabled = true;
  };
  
function enterEnable() {
    var inputLength = (websiteTitleInput.value.length * websiteUrlInput.value.length);
    if (inputLength === 0) {
      enterButton.disabled = true;
    } else {
      enterButton.disabled = false;
    };
  };
  
function reset() {
    generatedField.innerHTML = '';
    clearInputFields();
  };
  