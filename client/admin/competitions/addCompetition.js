/**
 * Created by mohsin on 11/3/2015.
 */

Template.addCompetition.helpers({
    teamsList: function () {
        return Teams.find().map(function (c) {
            return {label: c.name, value: c._id};
        });
    }
})