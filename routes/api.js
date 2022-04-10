'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      const localeValues = ['american-to-british', 'british-to-american'];
      if (text === undefined || locale === undefined) {
        return res.json({ error: 'Required field(s) missing' })
      } else if (text.trim() === '') {
        return res.json({ error: 'No text to translate' })
      } else if (localeValues.indexOf(locale) === -1) {
        return res.json({ error: 'Invalid value for locale field' })

      }

      const translated = translator.translateSentence(text, locale);
      console.log(translated)
      if (translated === text) { return res.json({ text, translation: 'Everything looks good to me!' }) }
      res.json({ text, translation: translated });

    });
};
