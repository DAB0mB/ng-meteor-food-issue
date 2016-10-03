import {Meteor} from 'meteor/meteor';
import {Food} from '../imports/collections';

Meteor.startup(() => {
  let userId;

  Meteor.users.remove({});
  Food.remove({});

  userId = Meteor.users.insert({profile: {avatar: 'foo-avatar'}});
  Food.insert({name: 'foo-name', owner: userId});

  userId = Meteor.users.insert({profile: {avatar: 'bar-avatar'}});
  Food.insert({name: 'bar-name', owner: userId});

  userId = Meteor.users.insert({profile: {avatar: 'baz-avatar'}});
  Food.insert({name: 'baz-name', owner: userId});
});