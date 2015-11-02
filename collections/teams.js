/**
 * Created by mohsin on 10/31/2015.
 */


Teams = new Mongo.Collection("teams");

var PlayerSchema = new SimpleSchema({
    name: {
        type: String
    },
    matches: {
        type: String
    },
    matchesWon: {
        type: String
    },
    matchesLost: {
        type: String
    },
    matchesTied: {
        type: String
    },
    points: {
        type: String
    },

    imageId: {
        type: String
    },
    memberSince: {
        type: Date,
        optional: true
    },
    isCaptain: {
        type: Boolean,
        defaultValue: false
    },
    isViceCaptain: {
        type: Boolean,
        defaultValue: false
    },
    isLeader: {
        type: Boolean,
        defaultValue: false
    },
    isKeeper: {
        type: Boolean,
        defaultValue: false
    }

});