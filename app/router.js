import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('songs', function() {
    this.route('all');
  });
  this.route('register');
  this.route('my-account');
  this.route('login');
});

export default Router;
