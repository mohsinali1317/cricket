/**
 * Created by mohsin on 11/2/2015.
 */


Template.competitionList.helpers({
    competitions: function () {
        return Competitions.find();
    }
});