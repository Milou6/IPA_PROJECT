//		mɱnɳɲŋɴpbtdʈɖcɟkgqɢʡʔɸβfvθðszʃʒʂʐɕʑçʝxɣχʁħʕʜʢhɦʋɹɻjɰⱱɾɽʙrʀɬɮlɭʎʟɺ
//		iyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒ
//		"i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"

		var allSymbols = ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"];
		var activeFeatures = 0;
		var displayedSymbols = allSymbols;
		
		var featuresObject = {

		plusSyllabic: [],
		minusSyllabic: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusConsonantal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ",,"ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","ʋ","ɹ","ɻ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		minusConsonantal: ["h","ɦ","ʔ","j","ɰ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		plusApproximant: ["ʋ","ɹ","ɻ","j","ɰ","l","ɭ","ʎ","ʟ"],
		minusApproximant: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","ɺ"],
		plusSonorant: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","l","ɭ","ʎ","ʟ","ɺ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusSonorant: ["p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ"],
		plusVoiced: ["b","m","ɱ","n","ɳ","ɲ","ŋ","ɴ","d","ɖ","ɟ","g","ɢ","ʡ","β","v","ð","z","ʒ","ʐ","ʑ","ʝ","ɣ","ʁ","ʢ","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɮ","l","ɭ","ʎ","ʟ","ɺ","ʕ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusVoiced: ["p","t","ʈ","s","ɬ","θ","ʃ","ʂ","ɕ","c","ç","f","ɸ","k","x","q","ħ","h","ʔ","χ","ʜ"],
		plusSpreadGlottis: ["ɬ","h","ɦ"],
		minusSpreadGlottis: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusConstrictedGlottis: [,"ʔ"],
		minusConstrictedGlottis: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusContinuant: [,"ɣ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusContinuant: ["ʡ","m","ɱ","n","ɳ","ɲ","ŋ","ɴ","t","d","ʈ","ɖ","c","ɟ","p","b","k","g","q","ɢ","ʔ"],
		plusNasal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ"],
		minusNasal: ["p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusStrident: ["s","z","f","v","χ","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ"],
		minusStrident: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","θ","ð","ç","ʝ","x","ɣ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusLateral: ["ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		minusLateral: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ"],
		plusLabial: ["m","ɱ","p","b","ɸ","β","f","v","ʋ","ⱱ","ʙ","j","ɰ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusLabial: ["n","ɳ","ɲ","ŋ","ɴ","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ɹ","ɻ","ɾ","ɽ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusRound: [,"u","ʊ","o","ɔ","y","ʏ","ø","ə","ʉ","ɵ","ɞ","ɶ","œ","ɒ"],
		minusRound: ["p","b","f","v","ɸ","β","m","j","ɰ","i","ɨ","ɪ","e","ɘ","ɤ","ɛ","ɜ","ʌ","æ","ɐ","a","ɑ","ɯ"],
		plusCoronal: ["t","d","s","z","ɬ","ɮ","θ","ð","ʃ","ʒ","n","ɳ","l","r","ɹ","ɾ","ɺ","ʈ","ɖ","ʂ","ʐ","ɻ","ɽ","ɭ"],
		minusCoronal: ["c","ɟ","ç","ʝ","m","ɱ","ɲ","ŋ","ɴ","p","b","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","ɕ","ʑ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","j","ɰ","ⱱ","ʙ","ʀ","ʎ","ʟ"],
//		plusAnterior: ["m","ɱ","n","p","b","t","d","ɸ","β","f","v","θ","ð","s","z","ʋ","ɹ","ⱱ","ɾ","ʙ","r","ɬ","ɮ","l","ɺ"],
//		minusAnterior: ["ɳ","ɲ","ŋ","ɴ","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ħ","ʕ","ʜ","ʢ","h","ɦ","ɻ","j","ɰ","ɽ","ʀ","ɭ","ʎ","ʟ"],
		plusAnterior: ["p", "b", "t", "d", "ɸ", "β", "f", "v", "θ", "ð", "s", "z", "m", "n", "l", "ɬ", "r", "ɾ"],
		minusAnterior: ["c", "ɟ", "k", "g", "ʃ", "ʒ", "x", "ɣ", "ɲ", "ŋ", "j", "w", "ʡ", "h"],
		plusDistributed: ["ʃ","ʒ","ç","ʝ","c","ɟ","ɕ","ʑ"],
		minusDistributed: ["t","d","s","z","ɬ","ɮ","θ","ð","n","ɳ","l","r","ɹ"],
		plusDorsal: ["ɲ","ŋ","ɴ","c","ɟ","k","g","q","ɢ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","j","ɰ","ʀ","ʎ","ʟ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusDorsal: ["m","ɱ","n","ɳ","p","b","t","d","ʈ","ɖ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ħ","ʕ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","ⱱ","ɾ","ɽ","ʙ","r","ɬ","ɮ","l","ɭ","ɺ"],
		plusHigh: ["c","ɟ","k","g","ʃ","ʒ","x","ɣ","ɲ","j","w","ŋ","ɰ","i","y","ɨ","ʉ","ɯ","u"],
		minusHigh: ["q","ɢ","χ","ʁ","ħ","ɴ","ɳ","ʀ","ʎ","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		plusLow: ["a","ɶ","ɑ","ɒ"],
		minusLow: ["c","ɟ","ç","ʝ","k","g","q","ɢ","x","ɣ","χ","ʁ","ɳ","ɲ","ŋ","ɴ","ʎ","ʀ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ"],
		plusBack: ["k","g","q","ɢ","x","ɣ","χ","ʁ","ŋ","ɴ","ʀ","ɯ","u","ʊ","ɤ","o","ʌ","ɔ","ɑ","ɒ"],
		minusBack: ["c","ɟ","ç","ʝ","ɳ","ɲ","ʎ","i","y","ɨ","ʉ","ɪ","ʏ","e","ø","ɘ","ɵ","ə","ɛ","œ","ɜ","ɞ","æ","ɐ","a","ɶ"],
		plusTense: ["i","u","e","o","æ","y","ø","ɯ","ʌ"],
		minusTense: ["c","ɟ","ç","ʝ","k","g","q","ɢ","x","ɣ","χ","ʁ","ɳ","ɲ","ŋ","ɴ","ʎ","ʀ","ɨ","ʉ","ɪ","ʏ","ʊ","ɘ","ɵ","ɤ","ə","ɛ","œ","ɜ","ɞ","ɔ","ɐ","a","ɶ","ɑ","ɒ"],
		plusPharyngeal: ["ħ","ʕ","i","y","ɨ","ʉ","ɯ","u","ɪ","ʏ","ʊ","e","ø","ɘ","ɵ","ɤ","o","ə","ɛ","œ","ɜ","ɞ","ʌ","ɔ","æ","ɐ","a","ɶ","ɑ","ɒ"],
		minusPharyngeal: ["m","ɱ","n","ɳ","ɲ","ŋ","ɴ","p","b","t","d","ʈ","ɖ","c","ɟ","k","g","q","ɢ","ʡ","ʔ","ɸ","β","f","v","θ","ð","s","z","ʃ","ʒ","ʂ","ʐ","ɕ","ʑ","ç","ʝ","x","ɣ","χ","ʁ","ʜ","ʢ","h","ɦ","ʋ","ɹ","ɻ","j","ɰ","ⱱ","ɾ","ɽ","ʙ","r","ʀ","ɬ","ɮ","l","ɭ","ʎ","ʟ","ɺ"],
		plusATR: ["i","u","e","o","y","ø","ɯ","ʌ"],
		minusATR: ["ħ","ʕ","ɨ","ʉ","ɪ","ʏ","ʊ","ɘ","ɵ","ɤ","ə","ɛ","œ","ɜ","ɞ","ɔ","ɐ","a","ɶ","ɑ","ɒ","æ"],
		plusGlottal: ["h","ɦ","ʔ"],
		minusGlottal: [],
		
		
		
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
 var table = document.getElementById('tableDisplay');										// Coloring the selected Table Cells
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
			if (table.rows[r].cells[c].innerHTML.length > 1) {
				continue;
			}
            if (displayedSymbols.includes(table.rows[r].cells[c].innerHTML)) {
				table.rows[r].cells[c].style.color = "blue";
				table.rows[r].cells[c].style.fontWeight = "bold";
			}
			else {
				table.rows[r].cells[c].style.color = "grey";
				table.rows[r].cells[c].style.fontWeight = "lighter";
			}
			if (toFilter.length === 0) {
				table.rows[r].cells[c].style.color = "black";
				table.rows[r].cells[c].style.fontWeight = "normal";
			}
			console.log(table.rows[r].cells[c].innerHTML);
        }
    }
	
 var table = document.getElementById('vowelsTable');										// Coloring the selected Table Cells
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
			if (table.rows[r].cells[c].innerHTML.length > 1) {
				continue;
			}
            if (displayedSymbols.includes(table.rows[r].cells[c].innerHTML)) {
				table.rows[r].cells[c].style.color = "blue";
				table.rows[r].cells[c].style.fontWeight = "bold";
			}
			else {
				table.rows[r].cells[c].style.color = "grey";
				table.rows[r].cells[c].style.fontWeight = "lighter";
			}
			if (toFilter.length === 0) {
				table.rows[r].cells[c].style.color = "black";
				table.rows[r].cells[c].style.fontWeight = "normal";
			}
			console.log(table.rows[r].cells[c].innerHTML);
        }
    }
		
		
		}
		
		function changeLanguage() {
			
			
			if (document.getElementById('language').firstChild.data === "Français") {
//			location.reload();

				var elem = document.getElementById('unselectedFeatures').elements;
				
				for(var i = 0; i < elem.length; i++) {
					
					switch (elem[i].firstChild.data) {
						case "+":
						continue;
						break;
						case "-":
						continue;
						break;	
						case "Syllabique":
						elem[i].firstChild.data = "Syllabic";
						break;
						case "Haut":
						elem[i].firstChild.data = "High";
						break;
						case "Consonantique":
						elem[i].firstChild.data = "Consonantal";
						break;
						case "Approximante":
						elem[i].firstChild.data = "Approximant";
						break;
						case "Sonnante":
						elem[i].firstChild.data = "Sonorant";
						break;
						case "Voisé":
						elem[i].firstChild.data = "Voiced";
						break;
						case "Glotte écartée":
						elem[i].firstChild.data = "Spread Glottis";
						break;
						case "Glotte comprimée":
						elem[i].firstChild.data = "Constricted Glottis";
						break;
						case "Continue":
						elem[i].firstChild.data = "Continuant";
						break;
						case "Nasal":
						elem[i].firstChild.data = "Nasal";
						break;
						case "Strident":
						elem[i].firstChild.data = "Strident";
						break;
						case "Latéral":
						elem[i].firstChild.data = "Lateral";
						break;
						case "Labial":
						elem[i].firstChild.data = "Labial";
						break;
						case "Arrondi":
						elem[i].firstChild.data = "Round";
						break;
						case "Coronal":
						elem[i].firstChild.data = "Coronal";
						break;
						case "Antérieur":
						elem[i].firstChild.data = "Anterior";
						break;
						case "Distribué":
						elem[i].firstChild.data = "Distributed";
						break;
						case "Dorsal":
						elem[i].firstChild.data = "Dorsal";
						break;
						case "Haut":
						elem[i].firstChild.data = "High";
						break;
						case "Bas":
						elem[i].firstChild.data = "Low";
						break;
						case "Postérieur":
						elem[i].firstChild.data = "Back";
						break;
						case "Tensé":
						elem[i].firstChild.data = "Tense";
						break;
						case "Pharyngale":
						elem[i].firstChild.data = "Pharyngeal";
						break;
						case "RLA":
						elem[i].firstChild.data = "ATR";
						break;
					
						default:
						break;
					}	
				}
				
				
				elem = document.getElementById('selectedFeatures').elements;
				
				for(var i = 0; i < elem.length; i++) {
					
					switch (elem[i].firstChild.data) {
						case "+":
						continue;
						break;
						case "-":
						continue;
						break;	
						case "Syllabique":
						elem[i].firstChild.data = "Syllabic";
						break;
						case "Haut":
						elem[i].firstChild.data = "High";
						break;
						case "Consonantique":
						elem[i].firstChild.data = "Consonantal";
						break;
						case "Approximante":
						elem[i].firstChild.data = "Approximant";
						break;
						case "Sonnante":
						elem[i].firstChild.data = "Sonorant";
						break;
						case "Voisé":
						elem[i].firstChild.data = "Voiced";
						break;
						case "Glotte écartée":
						elem[i].firstChild.data = "Spread Glottis";
						break;
						case "Glotte comprimée":
						elem[i].firstChild.data = "Constricted Glottis";
						break;
						case "Continue":
						elem[i].firstChild.data = "Continuant";
						break;
						case "Nasal":
						elem[i].firstChild.data = "Nasal";
						break;
						case "Strident":
						elem[i].firstChild.data = "Strident";
						break;
						case "Latéral":
						elem[i].firstChild.data = "Lateral";
						break;
						case "Labial":
						elem[i].firstChild.data = "Labial";
						break;
						case "Arrondi":
						elem[i].firstChild.data = "Round";
						break;
						case "Coronal":
						elem[i].firstChild.data = "Coronal";
						break;
						case "Antérieur":
						elem[i].firstChild.data = "Anterior";
						break;
						case "Distribué":
						elem[i].firstChild.data = "Distributed";
						break;
						case "Dorsal":
						elem[i].firstChild.data = "Dorsal";
						break;
						case "Haut":
						elem[i].firstChild.data = "High";
						break;
						case "Bas":
						elem[i].firstChild.data = "Low";
						break;
						case "Postérieur":
						elem[i].firstChild.data = "Back";
						break;
						case "Tensé":
						elem[i].firstChild.data = "Tense";
						break;
						case "Pharyngale":
						elem[i].firstChild.data = "Pharyngeal";
						break;
						case "RLA":
						elem[i].firstChild.data = "ATR";
						break;
						
					
						default:
						break;
					}	
				}
			
			
				var table = document.getElementById('tableDisplay');
					for (var r = 0, n = table.rows.length; r < n; r++) {
					for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
						if (table.rows[r].cells[c].innerHTML.length < 2) {
							continue;
						}
						switch (table.rows[r].cells[c].innerHTML) {
							case "Bilabiale":
							table.rows[r].cells[c].innerHTML = "Bilabial";
							break;
							case "Labio-dentale":
							table.rows[r].cells[c].innerHTML = "Labio-dental";
							break;
							case "Dentale":
							table.rows[r].cells[c].innerHTML = "Dental";
							break;
							case "Alvéolaire":
							table.rows[r].cells[c].innerHTML = "Alveolar";
							break;
							case "Post-alvéolaire":
							table.rows[r].cells[c].innerHTML = "Palato-Alveolar";
							break;
							case "Rétroflexe":
							table.rows[r].cells[c].innerHTML = "Retroflex";
							break;
							case "Alvéolo-palatale":
							table.rows[r].cells[c].innerHTML = "Alveolo-palatal";
							break;
							case "Palatale":
							table.rows[r].cells[c].innerHTML = "Palatal";
							break;
							case "Vélaire":
							table.rows[r].cells[c].innerHTML = "Velar";
							break;
							case "Uvulaire":
							table.rows[r].cells[c].innerHTML = "Uvular";
							break;
							case "Pharyngale":
							table.rows[r].cells[c].innerHTML = "Pharyngeal";
							break;
							case "Epi-glottale":
							table.rows[r].cells[c].innerHTML = "Epi-glottal";
							break;
							case "Glottale":
							table.rows[r].cells[c].innerHTML = "Glottal";
							break;
							case "Nasale":
							table.rows[r].cells[c].innerHTML = "Nasal";
							break;
							case "Occlusive":
							table.rows[r].cells[c].innerHTML = "Plosive";
							break;
							case "Fricative":
							table.rows[r].cells[c].innerHTML = "Fricative";
							break;
							case "Approximante":
							table.rows[r].cells[c].innerHTML = "Approximant";
							break;
							case "Battue":
							table.rows[r].cells[c].innerHTML = "Tap, Flap";
							break;
							case "Roulée":
							table.rows[r].cells[c].innerHTML = "Trill";
							break;
							case "Fricative latérale":
							table.rows[r].cells[c].innerHTML = "Lateral fricative";
							break;
							case "Approximante latérale":
							table.rows[r].cells[c].innerHTML = "Lateral approximant";
							break;
							case "Battue latérale":
							table.rows[r].cells[c].innerHTML = "Lateral flap";
							break;
							
							default:
							break;
						}
						
					}
				}	
		

			}
			
			if (document.getElementById('language').firstChild.data === "English") {			/////////////////////////////////////////////////
				
				var elem = document.getElementById('unselectedFeatures').elements;
				
				for(var i = 0; i < elem.length; i++) {
					
					switch (elem[i].firstChild.data) {
						case "+":
						continue;
						break;
						case "-":
						continue;
						break;	
						case "Syllabic":
						elem[i].firstChild.data = "Syllabique";
						break;
						case "Anterior":
						elem[i].firstChild.data = "Antérieur";
						break;
						case "High":
						elem[i].firstChild.data = "Haut";
						break;
						case "Consonantal":
						elem[i].firstChild.data = "Consonantique";
						break;
						case "Approximant":
						elem[i].firstChild.data = "Approximante";
						break;
						case "Sonorant":
						elem[i].firstChild.data = "Sonnante";
						break;
						case "Voiced":
						elem[i].firstChild.data = "Voisé";
						break;
						case "Spread Glottis":
						elem[i].firstChild.data = "Glotte écartée";
						break;
						case "Constricted Glottis":
						elem[i].firstChild.data = "Glotte comprimée";
						break;
						case "Continuant":
						elem[i].firstChild.data = "Continue";
						break;
						case "Nasal":
						elem[i].firstChild.data = "Nasal";
						break;
						case "Strident":
						elem[i].firstChild.data = "Strident";
						break;
						case "Lateral":
						elem[i].firstChild.data = "Latéral";
						break;
						case "Labial":
						elem[i].firstChild.data = "Labial";
						break;
						case "Round":
						elem[i].firstChild.data = "Arrondi";
						break;
						case "Coronal":
						elem[i].firstChild.data = "Coronal";
						break;
						case "Anterior":
						elem[i].firstChild.data = "Antérieur";
						break;
						case "Distributed":
						elem[i].firstChild.data = "Distribué";
						break;
						case "Dorsal":
						elem[i].firstChild.data = "Dorsal";
						break;
						case "High":
						elem[i].firstChild.data = "Haut";
						break;
						case "Low":
						elem[i].firstChild.data = "Bas";
						break;
						case "Back":
						elem[i].firstChild.data = "Postérieur";
						break;
						case "Tense":
						elem[i].firstChild.data = "Tensé";
						break;
						case "Pharyngeal":
						elem[i].firstChild.data = "Pharyngale";
						break;
						case "ATR":
						elem[i].firstChild.data = "RLA";
						break;
					
						default:
						break;
					}	
				}
				
				
				elem = document.getElementById('selectedFeatures').elements;
				
				for(var i = 0; i < elem.length; i++) {
					
					switch (elem[i].firstChild.data) {
						case "+":
						continue;
						break;
						case "-":
						continue;
						break;
						case "Syllabic":
						elem[i].firstChild.data = "Syllabique";
						break;
						case "Anterior":
						elem[i].firstChild.data = "Antérieur";
						break;
						case "High":
						elem[i].firstChild.data = "Haut";
						break;
						case "Consonantal":
						elem[i].firstChild.data = "Consonantique";
						break;
						case "Approximant":
						elem[i].firstChild.data = "Approximante";
						break;
						case "Sonorant":
						elem[i].firstChild.data = "Sonnante";
						break;
						case "Voiced":
						elem[i].firstChild.data = "Voisé";
						break;
						case "Spread Glottis":
						elem[i].firstChild.data = "Glotte écartée";
						break;
						case "Constricted Glottis":
						elem[i].firstChild.data = "Glotte comprimée";
						break;
						case "Continuant":
						elem[i].firstChild.data = "Continue";
						break;
						case "Nasal":
						elem[i].firstChild.data = "Nasal";
						break;
						case "Strident":
						elem[i].firstChild.data = "Strident";
						break;
						case "Lateral":
						elem[i].firstChild.data = "Latéral";
						break;
						case "Labial":
						elem[i].firstChild.data = "Labial";
						break;
						case "Round":
						elem[i].firstChild.data = "Arrondi";
						break;
						case "Coronal":
						elem[i].firstChild.data = "Coronal";
						break;
						case "Anterior":
						elem[i].firstChild.data = "Antérieur";
						break;
						case "Distributed":
						elem[i].firstChild.data = "Distribué";
						break;
						case "Dorsal":
						elem[i].firstChild.data = "Dorsal";
						break;
						case "High":
						elem[i].firstChild.data = "Haut";
						break;
						case "Low":
						elem[i].firstChild.data = "Bas";
						break;
						case "Back":
						elem[i].firstChild.data = "Postérieur";
						break;
						case "Tense":
						elem[i].firstChild.data = "Tensé";
						break;
						case "Pharyngeal":
						elem[i].firstChild.data = "Pharyngale";
						break;
						case "ATR":
						elem[i].firstChild.data = "RLA";
						break;
					
						default:
						break;
					}	
				}
			
			
				var table = document.getElementById('tableDisplay');
					for (var r = 0, n = table.rows.length; r < n; r++) {
					for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
						if (table.rows[r].cells[c].innerHTML.length < 2) {
							continue;
						}
						switch (table.rows[r].cells[c].innerHTML) {
							case "Bilabial":
							table.rows[r].cells[c].innerHTML = "Bilabiale";
							break;
							case "Labio-dental":
							table.rows[r].cells[c].innerHTML = "Labio-dentale";
							break;
							case "Dental":
							table.rows[r].cells[c].innerHTML = "Dentale";
							break;
							case "Alveolar":
							table.rows[r].cells[c].innerHTML = "Alvéolaire";
							break;
							case "Palato-Alveolar":
							table.rows[r].cells[c].innerHTML = "Post-alvéolaire";
							break;
							case "Retroflex":
							table.rows[r].cells[c].innerHTML = "Rétroflexe";
							break;
							case "Alveolo-palatal":
							table.rows[r].cells[c].innerHTML = "Alvéolo-palatale";
							break;
							case "Palatal":
							table.rows[r].cells[c].innerHTML = "Palatale";
							break;
							case "Velar":
							table.rows[r].cells[c].innerHTML = "Vélaire";
							break;
							case "Uvular":
							table.rows[r].cells[c].innerHTML = "Uvulaire";
							break;
							case "Pharyngeal":
							table.rows[r].cells[c].innerHTML = "Pharyngale";
							break;
							case "Epi-glottal":
							table.rows[r].cells[c].innerHTML = "Epi-glottale";
							break;
							case "Glottal":
							table.rows[r].cells[c].innerHTML = "Glottale";
							break;
							case "Nasal":
							table.rows[r].cells[c].innerHTML = "Nasale";
							break;
							case "Plosive":
							table.rows[r].cells[c].innerHTML = "Occlusive";
							break;
							case "Fricative":
							table.rows[r].cells[c].innerHTML = "Fricative";
							break;
							case "Approximant":
							table.rows[r].cells[c].innerHTML = "Approximante";
							break;
							case "Tap, Flap":
							table.rows[r].cells[c].innerHTML = "Battue";
							break;
							case "Trill":
							table.rows[r].cells[c].innerHTML = "Roulée";
							break;
							case "Lateral fricative":
							table.rows[r].cells[c].innerHTML = "Fricative latérale";
							break;
							case "Lateral approximant":
							table.rows[r].cells[c].innerHTML = "Approximante latérale";
							break;
							case "Lateral flap":
							table.rows[r].cells[c].innerHTML = "Battue latérale";
							break;
							
							default:
							break;
						}
						
					}
				}	
		
			}
			
			if (document.getElementById('language').firstChild.data === "Français") {
				document.getElementById('language').firstChild.data = "English";
			}
			else {
				document.getElementById('language').firstChild.data = "Français";
			}
		}
