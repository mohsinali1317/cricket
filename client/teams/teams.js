/**
 * Created by mohsin on 11/2/2015.
 */

Template.teams.helpers({
    teams: function() {
        return  Teams.find({},{sort: {
            points: -1,
            netRunRate : -1
        }});
    }
});