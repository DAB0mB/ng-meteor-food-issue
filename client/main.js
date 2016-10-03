import angular from 'angular';
import 'angular-meteor';
import 'angular-ui-router';
import {Meteor} from 'meteor/meteor';
import {Food} from '../imports/collections';

angular.module('myApp', ['angular-meteor', 'ui.router'])
  .config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('food', {
      url: 'food',
      template: `
        <h2>List</h2>
        <div ng-repeat="plate in foodList.food">
          <div class="plate-name">name: {{plate.name}}</div>
          <div class="user-avatar">avatar: {{foodList.getAvatar(plate.owner)}}</div>
        </div>
      `,
      controller: StateController,
      controllerAs: 'foodList'
    });
  });

function StateController($reactive, $scope) {
  $reactive(this).attach($scope);

  this.helpers({
    food() {
      console.log('getting food list');
      return Food.find({});
    }
  });

  this.getAvatar = function (id) {
    console.log('getting avatar', id);
    const query = Meteor.users.findOne(id, {fields: {'profile.avatar': 1} });
    return query.profile.avatar;
  };
}
