import DS from 'ember-data';

export default DS.Model.extend({
  "email":DS.attr('string'),
  "src":DS.attr('string'),
  "dest":DS.attr('string'),
  "car":DS.belongsTo('car',{async:true, inverse:"owner"})
});
