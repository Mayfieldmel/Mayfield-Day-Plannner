// current date in header
var today = document.querySelector("#currentDay");
    today.textContent = moment().format("dddd, MMMM Do");


// retrieve stored data
$(function(){
    $(".hour").each(function(index) { 
        var hour = $(this)
            .text();
            console.log(hour)
        $(this)
            .next()
            .children()
            .text(localStorage.getItem(hour));
            console.log(localStorage.getItem(hour))
        })
    });
      

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


// add tasks to time blocks
$(".time-block").on("click", "button", function() {     
    console.log("click", this)
    textArea = $(this)
        .prev()
        .children()
        .val();
        console.log(textArea);
    var timeValue = $(this)
        .prev()
        .prev()
        .text()
        console.log(timeValue);
    // save to local storage
        localStorage.setItem( timeValue, textArea)
});


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
    // 30 mins in milliseconds
    }, (1000 * 60) * 30);