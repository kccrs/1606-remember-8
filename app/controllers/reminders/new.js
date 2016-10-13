import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});
