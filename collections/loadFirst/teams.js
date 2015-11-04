/**
 * Created by mohsin on 10/31/2015.
 */


Teams = new Mongo.Collection("teams");

TeamSchema = new SimpleSchema({
    name: {
        type: String
    },
    matches: {
        type: Number,
        defaultValue: 0
    },
    matchesWon: {
        type: Number,
        defaultValue: 0
    },
    matchesLost: {
        type: Number,
        defaultValue: 0
    },
    matchesTied: {
        type: Number,
        defaultValue: 0
    },
    points: {
        type: Number,
        decimal: true,
        defaultValue: 0
    },
    netRunRate: {
        type: Number,
        decimal: true,
        defaultValue: 0,
        min: -90,
        max: 90
    },
    pointsDeducted: {
        type: Number,
        optional: true
    },
    isOurTeam: {
        type: Boolean,
        defaultValue: false
    }

});

Teams.attachSchema(TeamSchema);

