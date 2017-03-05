import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.cast(Ember.$.getJSON('https://api.opendota.com/api/heroStats')).then((results) => {
    const myHero = results.filter((hero) => {
      return Number(hero.hero_id) === Number(8);
    });

    return myHero[0];
    });
  }
});
