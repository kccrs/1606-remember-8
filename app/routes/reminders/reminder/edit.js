import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editReminder(reminder) {
      reminder.save();
    },

    revertReminder(reminder) {
    this.get('store').findRecord('reminder', reminder).then((reminder) => {
      reminder.rollbackAttributes();
    });
    }
  }
});
