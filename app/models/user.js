import DS from 'ember-data';

export default DS.Model.extend({
	"name":DS.attr('string'),
  "email":DS.attr('string'),
  "src":DS.attr('string'),
  "dest":DS.attr('string'),
  "car":DS.belongsTo('car',{async:true, inverse:"owner"})
});
