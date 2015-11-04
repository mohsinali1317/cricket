/**
 * Created by mohsin on 11/4/2015.
 */

Template.editPlayer.helpers({
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    imageUrl : function(){
        return PlayerProfilePictures.findOne(this.imageId);
    },
    playerProfilePath: function() {
        return Router.routes.playerProfile.path({_id: this._id});
    }
})