import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;



  // $get.JSON("https://api.opendota.com/api/heroStats", function (data) {
  //     console.log(data);
  // };

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.opendota.com/api/heroStats", false);
// xhr.send();

// console.log(xhr.status);
