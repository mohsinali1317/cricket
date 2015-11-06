/**
 * Created by mohsin on 11/5/2015.
 */

Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
       var userId = Accounts.createUser({
            username: 'mohsinali1017',
            email: 'mohsinali1017@gmail.com',
            password: 'mohsinali1317',
            profile: {
                first_name: 'Chaudhry Mohsin',
                last_name: 'Ali'
            }
        });
        Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)
    }
});