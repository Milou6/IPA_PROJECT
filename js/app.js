var toAdd = [];

function addFeature(featureId) {													//TO REMOVE...............................................


  if (document.getElementById("sign" + featureId).firstChild.data === "+") {
    toAdd.push(featuresObject["plus" +featureId]);
  }
  else {
    toAdd.push(featuresObject["minus" +featureId]);
  }


  //			console.log(toAdd);	
}

function switchSign(buttonId) {
  var currentText = document.getElementById(buttonId);
  //			console.log(currentText);
  //			console.log("selectedS" + buttonId.slice(1));


  if (buttonId.indexOf("selected") === -1) {
    if (currentText.firstChild.data === "+") {
      currentText.firstChild.data = "-";
      document.getElementById("selectedS" + buttonId.slice(1)).firstChild.data = "-";
    }
    else {
      currentText.firstChild.data = "+";
      document.getElementById("selectedS" + buttonId.slice(1)).firstChild.data = "+";
    }
  }
  else {
    if (currentText.firstChild.data === "+") {
      currentText.firstChild.data = "-";
      document.getElementById("s" + buttonId.slice(9)).firstChild.data = "-";
    }
    else {
      currentText.firstChild.data = "+";
      document.getElementById("s" + buttonId.slice(9)).firstChild.data = "+";
    }
  }
}

function moveButton(buttonId) {
  //			document.getElementById(buttonId).style.display = 'none';
  //			document.getElementById("sign" + buttonId).style.display = 'none';
  //			document.getElementById("selected" + buttonId).style.display = '';
  //			document.getElementById("selectedSign" + buttonId).style.display = 'none'; 


  if (buttonId.indexOf("selected") === -1) {
    document.getElementById(buttonId).style.display = 'none';
    document.getElementById("sign" + buttonId).style.display = 'none';
    document.getElementById("selected" + buttonId).style.display = '';
    document.getElementById("selectedSign" + buttonId).style.display = '';
  }

  else {
    //				document.getElementById(buttonId).style.display = '';
    //				document.getElementById("sign" + buttonId).style.display = '';
    //				document.getElementById("selected" + buttonId).style.display = 'none';
    //				document.getElementById("selectedSign" + buttonId).style.display = 'none';

    document.getElementById(buttonId).style.display = 'none';
    document.getElementById(buttonId.replace("selected", "selectedSign")).style.display = 'none';
    document.getElementById(buttonId.slice(8)).style.display = '';
    document.getElementById("sign" + buttonId.slice(8)).style.display = '';
  }
}

/**
 * Determines which features are currently active
 *
 * @return  An array of names of active features
 */
function parseActiveFeatures() {
  var elements = document.getElementById("selectedFeatures").elements;
  let activeFeatures = [];

  for (let i = 0; i < elements.length; i += 2) {
    let sign = elements[i];
    let feature = elements[i+1];
    let signText = "";

    if (window.getComputedStyle(feature).display === "none") {
      continue;
    }

    if (sign.firstChild.data === "+") {
      signText = "plus";
    } else if (sign.firstChild.data === "-") {
      signText = "minus";
    }

    activeFeatures.push(signText + feature.value);
  }

  return activeFeatures;
}

/**
 * Updates the table based on the selected features
 */
function updateTable() {
  let displayedSymbols = allSymbols;
  let activeFeatures = parseActiveFeatures();
  let featureSets = activeFeatures.map(feature => featuresObject[feature]);
  let tables = document.getElementsByClassName('ipaTable');

  for (let featureSet of featureSets) {
    if (featureSet) {
      displayedSymbols = displayedSymbols.filter(symbol => featureSet.includes(symbol));
    }
  }

  for (let table of tables) {
    if (activeFeatures.length > 0) {
      table.classList.add('highlight');
      let cells = table.getElementsByTagName('td');

      for (let cell of cells) {
        if (displayedSymbols.includes(cell.innerHTML)) {
          cell.classList.add("highlight");
        } else {
          cell.classList.remove('highlight');
        }
      }
    } else {
      table.classList.remove('highlight');
    }
  }
}

/**
 * Sets the language of the app to *lang*
 *
 * *lang* must reference a key of the dictionary in translation.js.
 *
 * @see js/translation.js
 * @param lang  The ID of the language to set the application to
 */
function setLanguage(lang) {
  // The cells of the feature tables
  let cells = document.querySelectorAll('#tableDisplay th');
  // The feature buttons
  let buttons = document.querySelectorAll('#unselectedFeatures button, #selectedFeatures button');

  for (let button of buttons) {
    if (dictionary[lang].hasOwnProperty(button.value)) {
      button.firstChild.data = dictionary[lang][button.value];
    }
  }

  for (let cell of cells) {
    if (dictionary[lang].hasOwnProperty(cell.dataset.value)) {
      cell.innerHTML = dictionary[lang][cell.dataset.value];
    }
  }
}

/**
 * Toggles the language
 */
function changeLanguage() {
  let lang;

  let languageSelector = document.getElementById('language');
  if (languageSelector.firstChild.data === 'Français') {
    lang = 'en';
    languageSelector.firstChild.data = 'English';
  } else if (languageSelector.firstChild.data === 'English') {
    lang = 'fr';
    languageSelector.firstChild.data = 'Français';
  }

  setLanguage(lang);
}

function armUnselectedFeatures() {
  let pairs = document.getElementsByClassName('featurePair');

  for (let pair of pairs) {
    let [signEl, featureEl] = pair.children;

    signEl.addEventListener('click', () => switchSign(signEl.id));

    featureEl.addEventListener('click', () => {
      moveButton(featureEl.id);
      addFeature(featureEl.id);
      updateTable();
    });
  }
}

function armSelectedFeatures() {
  let signEls = document.querySelectorAll('#selectedFeatures .sign');
  let featureEls = document.querySelectorAll('#selectedFeatures .selected');

  for (let signEl of signEls) {
    signEl.addEventListener('click', () => {
      switchSign(signEl.id);
      updateTable();
    });
  }

  for (let featureEl of featureEls) {
    featureEl.addEventListener('click', () => {
      moveButton(featureEl.id);
      updateTable();
    });
  }
}

armSelectedFeatures();
armUnselectedFeatures();
document.getElementById('language')
        .addEventListener('click', () => changeLanguage());
