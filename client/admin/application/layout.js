/**
 * Created by mohsin on 11/4/2015.
 */

Template.adminLayout.onRendered(function () {
    $(".navbar-nav li:not(.dropdown) a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});