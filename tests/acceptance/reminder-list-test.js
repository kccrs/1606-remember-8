/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list', {
  beforeEach() {
    server.createList('reminder', 5);
  },
  afterEach() {
    server.shutdown();
  }
});

test('viewing the homepage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  visit('/');

  click('.reminder-title-link:first');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(Ember.$('.reminder-title-link:first').text().trim(), Ember.$('.reminder-title-individual').text().trim());
  });
});

test('adding a new reminder', function(assert) {
  visit('/');

  click('.add-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/new');
  });

  fillIn('.input-title', 'Buy beer');
  fillIn('.input-date', '2016-10-13');
  fillIn('.input-notes', 'Nothing too hoppy.');
  
  click('.submit-button');

  andThen(function() {
    assert.equal(Ember.$('.reminder-title-link:last').text().trim(), 'Buy beer');
  });
});

test('editing a reminder', function(assert) {
  visit('/');

  click('.reminder-title-link:first');
  click('.edit-button');

  andThen(function() {
    assert.equal(currentURL(), '/1/edit');
  });

  fillIn('.edit-title', 'Buy cheese');
  fillIn('.edit-date', '2016-10-15');
  fillIn('.edit-notes', 'Maybe a nice Havarti.');

  click('.save-button');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(Ember.$('.reminder-title-link:first').text().trim(), 'Buy cheese');
  });
});

test('reverting an edited reminder to its original state', function(assert) {
  visit('/');
  click('.reminder-title-link:first');
  click('.edit-button');

  andThen(function() {
    assert.equal(currentURL(), '/1/edit');
  });

  fillIn('.edit-title', 'Take a nap');
  fillIn('.edit-date', '2016-10-19');
  fillIn('.edit-notes', 'Just a short nap before more coding.');

  click('.revert-button');

  andThen(function() {
    assert.equal(Ember.$('.reminder-title-link:first').text().trim(), Ember.$('.reminder-title-individual').text().trim());
  });
});
