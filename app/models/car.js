import DS from 'ember-data';

export default DS.Model.extend({
  	"owner":DS.belongsTo('user',{async:true}),
  	"passengers":DS.hasMany('user',{async:true})
});
