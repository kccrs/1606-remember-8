import Ember from 'ember';

export default Ember.Controller.extend({

  // actions: {
  //   addReminder() {
  //
  //     const reminder = this.getProperties('title', 'date', 'notes');
  //     reminder.date = new Date(reminder.date);
  // 
  //     this.get('store').createRecord('reminder', reminder).save().then(() => {
  //       this.setProperties({ title: '', date: '', notes: '' });
  //     });
  //   }
  // }
  //   editReminder() {
  //     this.get('store').findRecord('reminder', reminder.id).then(function(tyrion) {
  //     // ...after the record has loaded
  //     tyrion.setProper('firstName', "Yollo");
  //   });
  //   }
  // }
});
