// current date in header
var today = document.querySelector("#currentDay");
    today.textContent = moment().format("dddd, MMMM Do");

// loop through each hour time block
$(".hour").each(function(index) {
    // isolate the number
    var time = $(this).text()
        .replace("AM", "")
        .replace("PM", "")
        .trim();
    // convert string to number
    time = parseInt(time);
    // convert to 24 hour time
    if(time < 6) {
     time += 12;
    }
    console.log(index + ":" + time)
    // compare current hour with hour time block & add class
    if(moment().format("H") > time) {
        console.log("past")
        var past = $(this).next(".col-10");
        $(past).addClass("past");
    } else if (moment().format("H") < time) {
        console.log("future")
        var future = $(this).next(".col-10");
        $(future).addClass("future");
    } else {
        console.log("present")
        var present = $(this).next(".col-10");
        $(present).addClass("present");
    }
});

var textInput;

// add tasks to time blocks
$(".row").on("click", ".textarea", function() {
    console.log("click");
    // var text = $(this)
    //     .text()
    //     .trim();
    // if()
    var textBox = $("<textarea>")
        .addClass("textarea");
    $(this).replaceWith(textBox)
    textBox.trigger("focus");

    var textInput = $(textBox)
    .val();
    console.log(textInput);
});


$(".row").on("blur", ".textarea", function() {
    console.log(textInput);
    console.log(this);
    var text = $(this)
        .text()
        .trim();
    var taskP = $("<p>")
        .addClass("textarea")
        .val(text);
    $(this).replaceWith(taskP);
    // var index = $(this)
    //     .index();
    console.log(text);
});


$(".time-block").on("click", "button", function() {     
    console.log("click", this)
    textArea = $(this)
        .prev()
        .children();
        console.log(textArea);

});


   // task = $(this)
    // .text()
    // .trim();

// audit status every 30 minutes
setInterval(function() {
    $(".hour").each(function(index) {
        // isolate the number
        var time = $(this).text()
            .replace("AM", "")
            .replace("PM", "")
            .trim();
        // convert string to number
        time = parseInt(time);
        // convert to 24 hour time
        if(time < 6) {
         time += 12;
        }
        // compare current hour with hour time block & add class
        if(moment().format("H") > time) {
            var past = $(this).next(".col-10");
            $(past).addClass("past");
        } else if (moment().format("H") < time) {
            var future = $(this).next(".col-10");
            $(future).addClass("future");
        } else {
            var present = $(this).next(".col-10");
            $(present).addClass("present");
        }
        console.log("refresh")
    });
    }, (1000 * 60) * 30);