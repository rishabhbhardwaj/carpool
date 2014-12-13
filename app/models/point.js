import DS from 'ember-data';

export default DS.Model.extend({
     "name":DS.attr('string'),
     "lat":DS.attr('string'),
     "long":DS.attr('string')
});
