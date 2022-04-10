const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  const translator = new Translator();
  const locales = ['american-to-british', 'british-to-american'];
  
  // Translate Mangoes are my favorite fruit. to British English
  test('Translate to British English', (done) => {
    let text = 'Mangoes are my favorite fruit.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.', 'result should have changed the correct word');
    done();
  })

  // Translate I ate yogurt for breakfast. to British English
  test('Translate to British English 2', (done) => {
    let text = 'I ate yogurt for breakfast.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.', 'result should have changed the correct word');
    done();
  })

  // Translate We had a party at my friend's condo. to British English
  test('Translate to British English 3', (done) => {
    let text = 'We had a party at my friend\'s condo';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    assert.equal(result, 'We had a party at my friend\'s <span class="highlight">flat</span>', 'result should have changed the correct word');
    done();
  })

  // Translate Can you toss this in the trashcan for me? to British English
  test('Translate to British English 4', (done) => {
    let text = 'Can you toss this in the trashcan for me?';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    assert.equal(result, 'Can you toss this in the <span class="highlight">bin</span> for me?', 'result should have changed the correct word');
    done();
  })

  // Translate The parking lot was full. to British English
  test('Translate to British English 5', (done) => {
    let text = 'The parking lot was full.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate Like a high tech Rube Goldberg machine. to British English
  test('Translate to British English 6', (done) => {
    let text = 'Like a high tech Rube Goldberg machine.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate To play hooky means to skip class or work. to British English
  test('Translate to British English 7', (done) => {
    let text = 'To play hooky means to skip class or work.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate No Mr. Bond, I expect you to die. to British English
  test('Translate to British English 8', (done) => {
    let text = 'No Mr. Bond, I expect you to die.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate Dr. Grosh will see you now. to British English
  test('Translate to British English 9', (done) => {
    let text = 'Dr. Grosh will see you now.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate Lunch is at 12:15 today. to British English
  test('Translate to British English 10', (done) => {
    let text = 'Lunch is at 12:15 today.';
    let result = translator.translateSentence(text, locales[0]);

    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate We watched the footie match for a while. to American English
  test('Translate to American English', (done) => {
    let text = 'We watched the footie match for a while.';
    let result = translator.translateSentence(text, locales[1]);
    assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.', 'result should have changed the correct word');
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate Paracetamol takes up to an hour to work. to American English
  test('Translate to American English 2', (done) => {
    let text = 'paracetamol takes up to an hour to work.';
    let result = translator.translateSentence(text, locales[1]);
    assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.', 'result should have changed the correct word');
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate First, caramelise the onions. to American English
  test('Translate to American English 3', (done) => {
    let text = 'First, caramelise the onions.';
    let result = translator.translateSentence(text, locales[1]);
    assert.equal(result, 'First, <span class="highlight">caramelize</span> the onions.', 'result should have changed the correct word');
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate I spent the bank holiday at the funfair. to American English
  test('Translate to American English 4', (done) => {
    let text = 'I spent the bank holiday at the funfair';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate I had a bicky then went to the chippy. to American English
  test('Translate to American English 5', (done) => {
    let text = 'I had a bicky then went to the chippy';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate I've just got bits and bobs in my bum bag. to American English
  test('Translate to American English 6', (done) => {
    let text = 'I\'ve just got bits and bobs in my bum bag';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string');
    done();
  })

  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test('Translate to American English 7', (done) => {
    let text = 'The car boot sale at Boxted Airfield was called off';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string');  
    done();
  })

  // Translate Have you met Mrs Kalyani? to American English
  test('Translate to American English 8', (done) => {
    let text = 'Have you met Mrs Kalyani?';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string');  
    done();
  })

  // Translate Prof Joyner of King's College, London. to American English
  test('Translate to American English 9', (done) => {
    let text = 'Prof Joyner of King\'s College, London.';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string'); 
    done();
  })

  // Translate Tea time is usually around 4 or 4.30. to American English
  test('Translate to American English 10', (done) => {
    let text = 'Tea time is usually around 4 or 4.30';
    let result = translator.translateSentence(text, locales[1]);
    assert.isString(result, 'result should be a string'); 
    done();
  })

  // Highlight translation in Mangoes are my favorite fruit.
  test('', (done) => {
    let text = 'Mangoes are my favorite fruit';
    let result = translator.translateSentence(text, locales[0]);
    let highlight = result.split('"');
    assert.isString(result, 'result should be a string');
    assert.equal(highlight[1], 'highlight');
    done();
  })

  // Highlight translation in I ate yogurt for breakfast.
  test('Highlight translation', (done) => {
    let text = 'I ate yogurt for breakfast';
    let result = translator.translateSentence(text, locales[0]);
    let highlight = result.split('"');
    assert.isString(result, 'result should be a string');
    assert.equal(highlight[1], 'highlight');
    done();
  })

  // Highlight translation in We watched the footie match for a while.
  test('Highlight translation 2', (done) => {
    let text = 'We watched the footie match for a while';
    let result = translator.translateSentence(text, locales[1]);
    let highlight = result.split('"');
    assert.isString(result, 'result should be a string');
    assert.equal(highlight[1], 'highlight');
    done();
  })

  // Highlight translation in Paracetamol takes up to an hour to work.
  test('Highlight translation 3', (done) => {
    let text = 'paracetamol takes up to an hour to work';
    let result = translator.translateSentence(text, locales[1]);
    let highlight = result.split('"');
    assert.isString(result, 'result should be a string');
    assert.equal(highlight[1], 'highlight');
    done();
  })


});
