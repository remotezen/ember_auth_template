import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },
  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(() => this.transitionTo('secret'));
    },
    willTransition() {
      let model = this.controller.get('model');
      if(model.get('isNew')) {
        model.destroyRecord();
      }
      this.controller.set('responseMessage', false);
    }
  }
});
