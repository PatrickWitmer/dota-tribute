import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('treant');
  this.route('necrophos');
  this.route('juggernaut');
  this.route('lich');
  this.route('hero', { path: '/hero/:id' });
});

export default Router;
