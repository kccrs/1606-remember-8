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
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  visit('/');

  click('.spec-reminder-title-link:first');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(Ember.$('.spec-reminder-title-link:first').text().trim(), Ember.$('.spec-reminder-title-individual').text().trim());
  });
});

test('adding a new reminder', function(assert) {
  visit('/');

  click('.add-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/new');
  });
  

  fillIn('.spec-input-title', 'Buy beer');
  fillIn('.spec-input-date', '10/13/16');
  fillIn('.spec-input-notes', 'Nothing too hoppy.');
  click('.submit-button');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item').length, 6);
  });
});
