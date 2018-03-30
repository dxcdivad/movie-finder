/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () => 

    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));


  it('should have form', () =>

    nightmare
      .goto(url)
    .evaluate(() => document.querySelector('form').innerText)
    .then((form) => {
      expect(form).to.exist;
    })
    )

    it('should have search button', () =>

    nightmare
    .goto(url)
    .evaluate(() => document.querySelector('form.div.button'))

  )

    it('should have input field', () =>

    nightmare
      .goto(url)
    .evaluate(() => document.querySelector('input').innerText)
    .then((input) => {
      expect(input).to.exist;
    })
    )



    it('should present card after search', () =>

    nightmare
    .goto(url)
    .click('#movieSearchButton')
    .wait('.card')
    .evaluate(() => 
    document.querySelector('.card'))
    .end()
    .then((card) => {
      expect(card).to.exist;
    })
  )

  it('should search the correct movie', () => 

    nightmare
      .goto(url)
      .type('#movieSearchInput', 'star wars')
      .click('#movieSearchButton')
      .wait('.card')
      .evaluate(() => document.querySelector('.card h4').innerHTML)
      .end()
      .then((error) => {
        expect(error).to.equal('Star Wars: Episode IV - A New Hope');
      }
      )
    )

    it('should have error message', () => 

    nightmare
      .goto(url)
      .click('#movieSearchButton')
      .wait('.card')
      .evaluate(() => document.querySelector('.card h4').innerHTML)
      .end()
      .then((error) => {
        expect(error).to.equal('Something went wrong.');
      }
      )
    )

});

