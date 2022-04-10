const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const locales = ['american-to-british', 'british-to-american'];

suite('Functional Tests', () => {

  // Translation with text and locale fields: POST request to /api/translate
  test('Translation with text and locale fields: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: 'Mangoes are my favorite fruit', locale: locales[0] })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        done()
      })
  })

  // Translation with text and invalid locale field: POST request to /api/translate
  test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: 'Mangoes are my favorite fruit', locale: 'canadian-to-japanese' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done()
      })
  })

  // Translation with missing text field: POST request to /api/translate
  test('Translation with missing text field: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ locale: locales[0] })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done()
      })
  })

  // Translation with missing locale field: POST request to /api/translate
  test('Translation with missing locale field: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: 'Mangoes are my favorite fruit'})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done()
      })
  })

  // Translation with empty text: POST request to /api/translate
  test('Translation with empty text: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: '', locale: locales[0] })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'No text to translate');
        done()
      })
  })

  // Translation with text that needs no translation: POST request to /api/translate
  test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
    chai.request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: 'Mangoes are the best fruit', locale: locales[1] })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done()
      })
  })

});
