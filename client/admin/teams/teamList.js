/**
 * Created by mohsin on 11/2/2015.
 */

Template.teamList.helpers({
    teams: function () {
        return Teams.find({}, {
            sort: {
                points: -1,
                netRunRate: -1
            }
        });
    }
});


Template.teamList.events({
    'click .deleteTeam': function (e) {
        e.preventDefault();
        if (confirm("Delete this team?")) {
            var currentTeamId = this._id;
            Teams.remove(currentTeamId);
        }
    }
});