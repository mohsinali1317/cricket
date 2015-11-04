/**
 * Created by mohsin on 11/4/2015.
 */

Template.adminLayout.onRendered(function () {
    $(".navbar-nav li a").click(function(event) {
        console.log(2);
        $(".navbar-collapse").collapse('hide');
    });
});