/**
 * Created by mohsin on 10/15/2015.
 */

var year = "2015";

Router.configure({
    layoutTemplate: 'layout'
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
                    Meteor.subscribe('teamsInThisYearsCompetition', year) ,  Meteor.subscribe('competitionByYear',year)
                ];
            },
            data: function() {
                competitions = { competitions : Competitions.findOne({year:year}) };
                return competitions;
            }

        });

    this.route('players', {path: '/players', layoutTemplate: 'layout', waitOn: function () {
        [Meteor.subscribe('players'), Meteor.subscribe('playerProfilePictures')];
    }});

    this.route('aboutUs', {path: '/about', layoutTemplate: 'layout'});
    this.route('joinUs', {path: '/join', layoutTemplate: 'layout'});
    this.route('supportUs', {path: '/support', layoutTemplate: 'layout'});

    /*
     Admin Routes
     */

    this.route('dashboard', {path: '/admin', layoutTemplate: 'adminLayout'});

    /*
     Player
     */

    this.route('playerList', {
        path: '/admin/players', layoutTemplate: 'adminLayout', waitOn: function () {
            return [
                Meteor.subscribe('players')
            ];
        }
    });

    this.route('editPlayer', {
        path: '/admin/players/:_id/edit', layoutTemplate: 'adminLayout',

        waitOn: function () {
            return [
                Meteor.subscribe('singlePlayer', this.params._id),
                Meteor.subscribe('playerProfilePictures')
            ];
        },
        data: function () {
            return Players.findOne(this.params._id);
        }
    });

    this.route('addPlayer', {path: '/admin/addPlayer', layoutTemplate: 'adminLayout'});

    /*
     Team
     */

    this.route('addTeam', {path: '/admin/addTeam', layoutTemplate: 'adminLayout'});

    this.route('editTeam', {
        path: '/admin/teams/:_id/edit', layoutTemplate: 'adminLayout',

        waitOn: function () {
            return [
                Meteor.subscribe('singleTeam', this.params._id)
            ];
        },
        data: function () {
            return Teams.findOne(this.params._id);
        }
    });

    this.route('teamList', {
        path: '/admin/teams', layoutTemplate: 'adminLayout', waitOn: function () {
            return [
                Meteor.subscribe('teams')
            ];
        }
    });

    /*
     Competitions
     */

    this.route('addCompetition', {path: '/admin/addCompetition', layoutTemplate: 'adminLayout', waitOn: function () {
        return [
            Meteor.subscribe('teams')
        ];
    }
    });

    this.route('competitionList', {
        path: '/admin/competitions', layoutTemplate: 'adminLayout', waitOn: function () {
            return [
                Meteor.subscribe('competitions')
            ];
        }
    });

    this.route('competitionDetails', {
        path: '/admin/competitions/:_id/details', layoutTemplate: 'adminLayout',

        waitOn: function () {
            return [
                Meteor.subscribe('teams', this.params._id) , Meteor.subscribe('singleCompetition',this.params._id)
            ];
        },

        data: function() {
            competitions = { competitions : Competitions.findOne(this.params._id) };
            return competitions;
        }

    });

});