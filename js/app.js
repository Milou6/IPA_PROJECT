/**
 * Switches the sign of a feature pair
 *
 * @param pair      The DOM reference to the feature pair element
 * @param selected  True if the feature is currently selected, and false otherwise
 */
function switchSign(pair, selected) {
  let button = pair.children[0];
  let otherSymbol = button.firstChild.data === "+" ? "-" : "+";
  let group = selected ? 'unselectedFeatures' : 'selectedFeatures';
  let otherPair = document.querySelector(`#${group} [data-value='${pair.dataset.value}']`);

  button.firstChild.data = otherSymbol;
  otherPair.children[0].firstChild.data = otherSymbol;
}

/**
 * "Moves" a button from the unselected region to the selected region
 *
 * @param pair      The DOM reference to the feature pair element
 * @param selected  True if the feature is currently selected, and false otherwise
 */
function moveButton(pair, selected) {
  let group = selected ? 'unselectedFeatures' : 'selectedFeatures';
  let otherPair = document.querySelector(`#${group} [data-value='${pair.dataset.value}']`);
  pair.style.display = 'none';
  otherPair.style.display = 'initial';
}

/**
 * Determines which features are currently active
 *
 * @return  An array of names of active features
 */
function parseActiveFeatures() {
  let pairs = document.querySelectorAll("#selectedFeatures .featurePair");
  let activeFeatures = [];

  for (let pair of pairs) {
    let sign = pair.children[0];
    let feature = pair.children[1];
    let signText = "";

    if (window.getComputedStyle(pair).display === "none") {
      continue;
    }

    if (sign.innerHTML === "+") {
      signText = "plus";
    } else if (sign.innerHTML === "-") {
      signText = "minus";
    }

    activeFeatures.push(signText + pair.dataset.value);
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
  // The feature pairs
  let pairs = document.querySelectorAll('#unselectedFeatures .featurePair, #selectedFeatures .featurePair');

  for (let pair of pairs) {
    if (dictionary[lang].hasOwnProperty(pair.dataset.value)) {
      let button = pair.children[1];
      button.firstChild.data = dictionary[lang][pair.dataset.value];
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

/**
 * Attaches event listeners to all of the unselected features
 */
function armUnselectedFeatures() {
  let pairs = document.querySelectorAll('#unselectedFeatures .featurePair');

  for (let pair of pairs) {
    let [signEl, featureEl] = pair.children;

    signEl.addEventListener('click', () => switchSign(pair, false));

    featureEl.addEventListener('click', () => {
      moveButton(pair, false);
      updateTable();
    });
  }
}

/**
 * Attaches event listeners to all of the selected features
 */
function armSelectedFeatures() {
  let pairs = document.querySelectorAll('#selectedFeatures .featurePair');

  for (let pair of pairs) {
    let [signEl, featureEl] = pair.children;

    signEl.addEventListener('click', () => {
      switchSign(pair, true);
      updateTable();
    });

    featureEl.addEventListener('click', () => {
      moveButton(pair, true);
      updateTable();
    });
  }
}

// Attach all of the event listeners when the page loads
armSelectedFeatures();
armUnselectedFeatures();
document.getElementById('language').addEventListener('click', changeLanguage);
