/**
 * Created by mohsin on 11/4/2015.
 */

Template.layout.onRendered(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});