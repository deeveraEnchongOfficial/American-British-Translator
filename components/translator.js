const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  translateWords(textArr, locale) {

    switch (locale) {
      case 'american-to-british':
        textArr.forEach((word, i) => {
          if(Object.keys(americanToBritishSpelling).includes(word)) {
            let replacementWord = Object.values(americanToBritishSpelling).find(value => americanToBritishSpelling[word] === value);
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;
          }
          if(Object.keys(americanOnly).includes(word)) {
            let replacementWord = Object.values(americanOnly).find(value => americanOnly[word] === value);
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;
          }
        

        })

        break;

      case 'british-to-american':
        textArr.forEach((word, i) => {
          if(Object.values(americanToBritishSpelling).includes(word)) {
            let replacementWord = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word);
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;
          }
          if(Object.keys(britishOnly).includes(word)) {
            let replacementWord = Object.values(britishOnly).find(value => britishOnly[word] === value);
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;
          }
        })
        break;
    }
    return textArr;

  }

  checkTime(textArr, locale) {

    switch (locale) {
      case 'american-to-british':
        textArr.forEach((word, i) => {
          if((/\d\d:\d\d/).test(word)) {
            let replacement = word.split(':').join('.');
            textArr[i] = `<span class="highlight">${replacement}</span>`
          }
        })

        break;

      case 'british-to-american':
        textArr.forEach((word, i) => {
          if((/\d\d\.\d\d/).test(word)) {
            let replacement = word.split('.').join(':');
            textArr[i] = `<span class="highlight">${replacement}</span>`
          }
        })


        break;
    }
    return textArr;
  
  }

  checkForTitles(textArr, locale) {
    switch (locale) {
      case 'american-to-british':
        textArr.forEach((word, i) => {
          if(Object.keys(americanToBritishTitles).includes(word.toLowerCase())) {
            let replacementWord = word[0] + word[1];
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;

          }
        })
        break;
        

      case 'british-to-american':

        textArr.forEach((word, i) => {
          if(Object.values(americanToBritishTitles).includes(word.toLowerCase())) {
            let replacementWord = word + '.';
            textArr[i] = `<span class="highlight">${replacementWord}</span>`;
          }
        })
        break;
    }

    return textArr;

  }

  translateSentence(text, locale) {  
    let newArr;
    let textArr = text.split(' ');
    
    newArr = this.checkForTitles(textArr, locale);
    newArr = this.checkTime(newArr, locale);
    newArr = this.translateWords(newArr, locale);

    return newArr.join(' ');

  }

}

module.exports = Translator;