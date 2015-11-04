/**
 * Created by mohsin on 11/3/2015.
 */


Template.teamsInThisDivision.helpers({
    teams: function () {
        return Teams.find({}, {
            sort: {
                name: -1
            }
        });
    }
});