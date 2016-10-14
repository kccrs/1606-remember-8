import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      var mm = reminder.date.getMonth() + 1;
      var dd = reminder.date.getDate();
      var yyyy = reminder.date.getFullYear();
      reminder.date = mm + '/' + dd + '/' + yyyy;
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});
