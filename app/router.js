import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('songs', function() {
    this.route('library');
  });
  this.route('register');
  this.route('my-account');
  this.route('login');
  this.route('discover');
  this.route('friends');
});

export default Router;
