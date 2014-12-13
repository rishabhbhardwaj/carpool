import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource('users', function() {
        this.route('new');
        this.resource('user', {path:':id'}, function() {
            this.resource('route', function() {
                this.route('new');
            });
        });
    });
    this.resource('results', function() {
        this.route('car',{path:":id"});
    });
});

export
default Router;