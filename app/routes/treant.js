import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return Ember.$.getJSON('https://api.opendota.com/api/heroStats');
 }
});
