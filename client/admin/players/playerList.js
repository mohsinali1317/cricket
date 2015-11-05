/**
 * Created by mohsin on 11/2/2015.
 */

Template.playerList.helpers({
    players: function () {
        return Players.find({},{sort:{firstName:1}});
    },
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
});

Template.playerList.events({
    'click .deletePlayer': function (e) {
        e.preventDefault();
        if (confirm("Delete this player?")) {
            Players.remove(this._id);
        }
    }
});