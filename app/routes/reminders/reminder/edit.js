import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editReminder(model) {
      model.save().then( () => {
        // this.transitionTo('reminders/reminder');
        console.log('The model was saved');
      });
    }
  }
});
