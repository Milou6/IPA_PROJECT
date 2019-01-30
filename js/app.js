//		mɱnɳɲŋɴpbtdʈɖcɟkgqɢʡʔɸβfvθðszʃʒʂʐɕʑçʝxɣχʁħʕʜʢhɦʋɹɻjɰⱱɾɽʙrʀɬɮlɭʎʟɺ
//		iyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒ
//		"i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"

		var allSymbols = ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"];
		var activeFeatures = 0;
		var displayedSymbols = allSymbols;
		
		var featuresObject = {

		plussyllabic: [],
		minussyllabic: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusconsonantal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ",,"ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","ʋ","ɹ","ɻ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		minusconsonantal: ["h","ɦ","ʔ","j","ɰ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		plusapproximant: ["ʋ","ɹ","ɻ","j","ɰ","l","ɭ","ʎ","ʟ"],
		minusapproximant: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","ɺ"],
		plussonorant: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","l","ɭ","ʎ","ʟ","ɺ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minussonorant: ["p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ"],
		plusvoiced: ["b","m","ɱ","n","ɳ","ɲ","ŋ","ɴ","d","ɖ","ɟ","g","ɢ","ʡ","β","v","ð","z","ʒ","ʐ","ʑ","ʝ","ɣ","ʁ","ʢ","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɮ","l","ɭ","ʎ","ʟ","ɺ","ʕ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusvoiced: ["p","t","ʈ","s","ɬ","θ","ʃ","ʂ","ɕ","c","ç","f","ɸ","k","x","q","ħ","h","ʔ","χ","ʜ"],
		plusspreadGlottis: ["ɬ","h","ɦ"],
		minusspreadGlottis: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusconstrictedGlottis: [,"ʔ"],
		minusconstrictedGlottis: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		pluscontinuant: [,"ɣ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minuscontinuant: ["ʡ","m","ɱ","n","ɳ","ɲ","ŋ","ɴ","t","d","ʈ","ɖ","c","ɟ","p","b","k","g","q","ɢ","ʔ"],
		plusnasal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ"],
		minusnasal: ["p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusstrident: ["s","z","f","v","χ","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ"],
		minusstrident: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","θ","ð","ç","ʝ","x","ɣ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		pluslateral: ["ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		minuslateral: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ"],
		pluslabial: ["m","ɱ","p","b","ɸ","β","f","v","ʋ","ⱱ","ʙ","j","ɰ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minuslabial: ["n","ɳ","ɲ","ŋ","ɴ","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ɹ","ɻ","ɾ","ɽ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusround: [,"u","ʊ","o","ɔ","y","ʏ","ø","ə","ʉ","ɵ","ɞ","ɶ","œ","ɒ"],
		minusround: ["p","b","f","v","ɸ","β","m","j","ɰ","i","ɨ","ɪ","e","ɘ","ɤ","ɛ","ɜ","ʌ","æ","ɐ","a","ɑ","ɯ"],
		pluscoronal: ["t","d","s","z","ɬ","ɮ","θ","ð","ʃ","ʒ","n","ɳ","l","r","ɹ","ɾ","ɺ","ʈ","ɖ","ʂ","ʐ","ɻ","ɽ","ɭ"],
		minuscoronal: ["c","ɟ","ç","ʝ","m","ɱ","ɲ","ŋ","ɴ","p","b","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","ɕ","ʑ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","j","ɰ","ⱱ","ʙ","ʀ","ʎ","ʟ"],
//		plusanterior: ["m","ɱ","n","p","b","t","d","ɸ","β","f","v","θ","ð","s","z","ʋ","ɹ","ⱱ","ɾ","ʙ","r","ɬ","ɮ","l","ɺ"],
//		minusanterior: ["ɳ","ɲ","ŋ","ɴ","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ɻ","j","ɰ","ɽ","ʀ","ɭ","ʎ","ʟ"],
		plusanterior: ["p", "b", "t", "d", "ɸ", "β", "f", "v", "θ", "ð", "s", "z", "m", "n", "l", "ɬ", "r", "ɾ"],
		minusanterior: ["c", "ɟ", "k", "g", "ʃ", "ʒ", "x", "ɣ", "ɲ", "ŋ", "j", "w", "ʡ", "h"],
		plusdistributed: ["ʃ","ʒ","ç","ʝ","c","ɟ","ɕ","ʑ"],
		minusdistributed: ["t","d","s","z","ɬ","ɮ","θ","ð","n","ɳ","l","r","ɹ"],
		plusdorsal: ["ɲ","ŋ","ɴ","c","ɟ","k","g","q","ɢ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","j","ɰ","ʀ","ʎ","ʟ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusdorsal: ["m","ɱ","n","ɳ","p","b","t","d","ʈ","ɖ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","ⱱ","ɾ","ɽ","ʙ","r","ɬ","ɮ","l","ɭ","ɺ"],
		plushigh: ["c","ɟ","k","g","ʃ","ʒ","x","ɣ","ɲ","j","w","ŋ","ɰ","i","y","ɨ","ʉ","ɯ","u"],
		minushigh: ["q","ɢ","χ","ʁ","ħ","ɴ","ɳ","ʀ","ʎ","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		pluslow: ["a","ɶ","ɑ","ɒ"],
		minuslow: ["c","ɟ","ç","ʝ","k","g","q","ɢ","x","ɣ","χ","ʁ","ɳ","ɲ","ŋ","ɴ","ʎ","ʀ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ"],
		plusback: ["k","g","q","ɢ","x","ɣ","χ","ʁ","ŋ","ɴ","ʀ","ɯ","u","ʊ","ɤ","o","ʌ","ɔ","ɑ","ɒ"],
		minusback: ["c","ɟ","ç","ʝ","ɳ","ɲ","ʎ","i","y","ɨ","ʉ","ɪ","ʏ","e","ø","ɘ","ɵ","ə","ɛ","œ","ɜ","ɞ","æ","ɐ","a","ɶ"],
		plustense: ["i","u","e","o","æ","y","ø","ɯ","ʌ"],
		minustense: ["c","ɟ","ç","ʝ","k","g","q","ɢ","x","ɣ","χ","ʁ","ɳ","ɲ","ŋ","ɴ","ʎ","ʀ","ɨ","ʉ","ɪ","ʏ","ʊ","ɘ","ɵ","ɤ","ə","ɛ","œ","ɜ","ɞ","ɔ","ɐ","a","ɶ","ɑ","ɒ"],
		pluspharyngeal: ["ħ","ʕ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minuspharyngeal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusaTR: ["i","u","e","o","y","ø","ɯ","ʌ"],
		minusaTR: ["ħ","ʕ","ɨ","ʉ","ɪ","ʏ","ʊ","ɘ","ɵ","ɤ","ə","ɛ","œ","ɜ","ɞ","ɔ","ɐ","a","ɶ","ɑ","ɒ","æ"],
		plusglottal: ["h","ɦ","ʔ"],
		minusglottal: [],
		
		
		
		}
		
		var toAdd = [];
		var toFilter = [];
		
		
		
		function addFeature(featureId) {													//TO REMOVE...............................................
			

				if (document.getElementById("sign" + featureId).firstChild.data === "+") {
					 toAdd.push(featuresObject["plus" +featureId]);
				}
				else {
					toAdd.push(featuresObject["minus" +featureId]);
				}
			
			
//			console.log(toAdd);	
			activeFeatures++;
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
		
		function updateTable () {
			var elements = document.getElementById("selectedFeatures").elements;
			toFilter = [];
			var newDisplayedSymbols = [];
			
			
			for (var i = 0, element; element = elements[i++];) {
				if (window.getComputedStyle(element).display === "none") {
					continue;
				}
				if (element.firstChild.data === "+") {
					lastSign = "plus";
					continue;
				}
				if (element.firstChild.data === "-") {
					lastSign = "minus";
					continue;
				}
				toFilter.push(lastSign + element.value);
				
			}
			
			console.log(toFilter);
			
			var displayedSymbols = allSymbols;

			for (i = 0; i < toFilter.length; i++) {
			
				newDisplayedSymbols = [];
				
				
				for (x = 0; x < featuresObject[toFilter[i]].length; x++) {
					console.log(String(featuresObject[toFilter[i]][x]));
					console.log(displayedSymbols.includes(String(featuresObject[toFilter[i]][x])));
					if (displayedSymbols.includes(String(featuresObject[toFilter[i]][x]))) {
						newDisplayedSymbols.push(String(featuresObject[toFilter[i]][x]));
						console.log(newDisplayedSymbols);
					}
				}
				
				displayedSymbols = newDisplayedSymbols;
			

				}

  let tables = document.getElementsByClassName('ipaTable');

  for (let table of tables) {
    if (toFilter.length > 0) {
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
