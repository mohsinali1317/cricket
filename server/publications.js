/**
 * Created by mohsin on 10/15/2015.
 */

Meteor.publish('players', function () {
    return Players.find();
});


// check if the points are same then send order by nrr

Meteor.publish('teams', function () {
    return Teams.find({}, {
        sort: {
            points: -1,
            netRunRate: -1
        }
    });
});

Meteor.publish('singleTeam', function (id) {
    return id && Teams.find(id);
});

Meteor.publish('teamsInThisCompetition', function (id) {
    var competition = Competitions.findOne(id);
    return Teams.find({_id:{$in:competition.teams}});
});

Meteor.publish('competitions', function () {
    return Competitions.find();
});

Meteor.publish('singleCompetition', function (id) {
    return id && Competitions.find(id);
});

Meteor.publish('playerProfilePictures', function () {
    return PlayerProfilePictures.find();
});

PlayerProfilePictures.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    },
    download: function () {
        return true;
    }
});

/*

 check if the user is logged in and he is admin in the below functions

 */

Players.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    }
});

Teams.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    },
    remove: function () {
        return true;
    }
});

Competitions.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    },
    remove: function () {
        return true;
    }
});