import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Thanks for your interest',
  responseMessage: '',
  email: '',
  message: '',

  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isLongEnough: Ember.computed.gte('message.length', 5),
  isDisabled: Ember.computed.and('isValid', 'isLongEnough'),

  actions: {

    saveMessage() {
      const email = this.get('email');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address and message with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    }
  }

});
