import Ember from 'ember';

export default Ember.Controller.extend({

  // format: "YYYYMMDD",
  //  date: null,
  //  formattedDate: function() {
  //    var date = this.get('date'),
  //        format = this.get('format');
  //    return moment(date).format(format);
  //  }.property('date', 'format')

  actions: {
    addReminder() {

      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});


// App.ApplicationController = Ember.Controller.extend({
//   format: "YYYYMMDD",
//   date: null,
//   formattedDate: function() {
//     var date = this.get('date'),
//         format = this.get('format');
//     return moment(date).format(format);
//   }.property('date', 'format')
// });
