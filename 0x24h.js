// Models
Users = new Meteor.Collection("users");
Groups = new Meteor.Collection("groups");

if (Meteor.is_client) {

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    Meteor.publish("groups", function() {
      return Groups.find();
    });
  });
}