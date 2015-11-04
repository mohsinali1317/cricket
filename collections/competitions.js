/**
 * Created by mohsin on 11/2/2015.
 */

/**
 * Created by mohsin on 10/15/2015.
 */

Competitions = new Mongo.Collection("competitions");

var CompetitionsSchema = new SimpleSchema({
    year: {
        type: String
    },
    division: {
        type : String,
        allowedValues: ['Elite', '1st','2nd','3rd','4th','Intro']
    },
    teams:{
        type : [String]
    }
});

Competitions.attachSchema(CompetitionsSchema);

