import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isNotValid: Ember.computed.not('isValid'),
  email: DS.attr('string')
});
