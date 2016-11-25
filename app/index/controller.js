import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    Invitation() {
      alert(`Saving of the following email address ins in progress:
        ${this.get('emailAddress')}`);
      this.set('responseMessage', 
        `Thankyou we've just save your email addres:${this.get('emailAddress')}`);
    }
  }
});
