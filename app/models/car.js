import DS from 'ember-data';

export default DS.Model.extend({
  	"owner":DS.belongsTo('user',{async:true}),
  	"capacity":DS.attr('number'),
  	"passengers":DS.hasMany('user',{async:true})
});
