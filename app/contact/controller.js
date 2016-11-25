import Ember from 'ember';

export default Ember.Controller.extend({
  isValidEmail: Ember.computed.match('emailContact', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
  isNotValid: Ember.computed.not('isValid'),
  
  actions: {
    messageSent() {
      alert(`Saving of the following email address ins in progress:
        ${this.get('message')} and ${this.get('emailContact')}`);
      this.set('responseMessage', 
        `Thankyou we've just save your email addres:${this.get('emailContact')}`);
    }
  }
});
