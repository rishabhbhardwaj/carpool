import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('user');
	},
	actions: {
		save: function(){
			this.get('controller').get('model').save();
			if (this.get('controller').get('car')) {
				this.get('controller').get('car').save();
			}
		},
		createCar: function(){
			return this.store.createRecord('car');
		}
	}

});
