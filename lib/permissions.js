/**
 * Created by mohsin on 11/5/2015.
 */

isAdmin = function() {
    return Meteor.userId() && Roles.userIsInRole(Meteor.userId(), ['admin']);
}