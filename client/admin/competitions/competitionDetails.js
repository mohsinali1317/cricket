/**
 * Created by mohsin on 11/3/2015.
 */


Template.teamsInThisDivision.helpers({
    teams: function () {
        return Teams.find(
            {
                _id: {$in: competitions.competitions.teams}
            },
            {
                sort: {name: -1}
            }
        )
    }
});

Template.addMoreTeams.helpers({
    teamsList: function () {

      //  console.log(competitions.competitions.teams);

        return Teams.find().map(function (c) {
            return {label: c.name, value: c._id};
        });

        //var teams = Teams.find(
        //    //{
        //    //    _id: {$nin: competitions.competitions.teams}
        //    //},
        //    {
        //        sort: {name: -1}
        //    }
        //)
        //
        //return teams.map(function (c) {
        //    return {label: c.name, value: c._id};
        //});
    }
});