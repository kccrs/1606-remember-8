import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});
