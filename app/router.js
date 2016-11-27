import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
//  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('secret');
  this.route('about');
  this.route('contact');
  this.route('libraries', function() {
    this.route('new');
  });

  this.route('admin', function() {
    this.route('invitations');
  });
  
});

export default Router;
