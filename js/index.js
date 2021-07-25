console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $('#dropDown').hide();
    $('#dropDownAbout').hide();
    $('#dropDownWork').hide();
    $('#dropDownNews').hide();
    $('#dropDownSupport').hide();
    $('#dropDownJobs').hide();
  });

$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
});

$("#toggleAbout").on("click", function(){
    $("#dropDownAbout").slideToggle();
});

$("#toggleWork").on("click", function(){
    $("#dropDownWork").slideToggle();
});

$("#toggleNews").on("click", function(){
    $("#dropDownNews").slideToggle();
});

$("#toggleSupport").on("click", function(){
    $("#dropDownSupport").slideToggle();
});

$("#toggleJobs").on("click", function(){
    $("#dropDownJobs").slideToggle();
});