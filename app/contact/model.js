import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isLongEnough: Ember.computed.gte('message.length', 5),
  isDisabled: Ember.computed.and('isValid', 'isLongEnough')
});
