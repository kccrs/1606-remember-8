import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editReminder(reminder) {
      reminder.save();
    },

    revertReminder(id) {
    this.get('store').findRecord('reminder', id).then((reminder) => {
      reminder.rollbackAttributes();
    });
    }
  }
});
