import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('reminder');
  },
  actions: {
    saveReminder(model) {
      model.save().then( () => {
        this.transitionTo('reminders');
        console.log('The model was saved');
      });
    }
  }
});
