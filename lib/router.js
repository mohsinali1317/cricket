/**
 * Created by mohsin on 10/15/2015.
 */

Router.configure({
    layoutTemplate: 'layout',
    waitOn: function () {
        [Meteor.subscribe('players'), Meteor.subscribe('playerProfilePictures')];
    }
});

Router.configure({
    layoutTemplate: "adminLayout"
});

Router.map(function () {
    this.route('home',
        {
            path: '/', layoutTemplate: 'layout',
            waitOn: function () {
                return [
                    Meteor.subscribe('teams')
                ];
            }
            //,
            //data: function () {
            //    return Teams.find();
            //}
        });

    this.route('players', {path: '/players', layoutTemplate: 'layout'});

    this.route('dashboard', {path: '/admin', layoutTemplate: 'adminLayout'});
    this.route('addPlayer', {path: '/admin/addPlayer', layoutTemplate: 'adminLayout'});
    this.route('addTeam', {path: '/admin/addTeam', layoutTemplate: 'adminLayout'});

    this.route('teamList', {
        path: '/admin/teams', layoutTemplate: 'adminLayout', waitOn: function () {
            return [
                Meteor.subscribe('teams')
            ];
        }
    });

    this.route('editTeam', {
        path: '/admin/teams/:_id/edit', layoutTemplate: 'adminLayout', waitOn: function () {
            return [
                Meteor.subscribe('singleTeam', this.params._id)
            ];
        },
        data: function () {
            return Teams.findOne(this.params._id);
        }
    });


});