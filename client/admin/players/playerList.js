/**
 * Created by mohsin on 11/2/2015.
 */

Template.playerList.helpers({
    players: function () {
        return Players.find();
    },
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
});