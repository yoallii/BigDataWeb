const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { describe, test, expect } = require('@jest/globals');

// Simulación del navegador
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <form action="#" class="bg-light p-4 p-md-5 contact-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Your Name" id="nameForm">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Your Email" id="mailForm">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Subject" id="subjectForm">
        </div>
        <div class="form-group">
          <textarea name="" id="" cols="30" rows="7" class="form-control" id="messageForm" placeholder="Message"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" id="buttonForm">
        </div>
      </form>
    </body>
  </html>
`);

// Extrayendo los elementos del DOM
const document = dom.window.document;
const submitButton = document.getElementById('buttonForm');
const nameForm = document.getElementById('nameForm');
const mailForm = document.getElementById('mailForm');
const subjectForm = document.getElementById('subjectForm');
const messageForm = document.getElementById('messageForm');

// Prueba unitaria
describe('Contact Form', () => {
  test('Submit button is submit by default', () => {
    expect(submitButton.type).toBe("submit");
  });
    test('Name input is not required', () => {
    expect(nameForm.required).toBe(false);
    });
    test('Mail input is not required', () => {
    expect(mailForm.required).toBe(false);
    });

});