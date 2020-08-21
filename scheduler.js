

//Moment.js for Day and Time 
$(document).ready(function() {

const m = moment.format('LLL');
console.log(m.toString());

$("#time").text(m);

});
 