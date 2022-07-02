// current date in header
var today = document.querySelector("#currentDay");
    today.textContent = moment().format("dddd, MMMM Do");

// var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// console.log(time);

// var currentTime = document.querySelector(".col-1 hour")
//     for (var i = 0; i < time.length; i++) {
//         currentTime.textContent = "10AM";
//     }
$(".hour").each(function(index) {
//    console.log(index + ":" + $(this).text());
   var time = $(this).text()
        .replace("AM", "")
        .replace("PM", "")
        .trim();

    time = parseInt(time);

    if(time < 6) {
     time += 12;
    }
    console.log(index + ":" + time)

    // moment().format("H");
    
    if(moment().format("H") > time) {
        console.log("past")
        var past = $(this).next("p");
        $(past).addClass("past");
    } else if (moment().format("H") < time) {
        console.log("future")
        var future = $(this).next("p");
        $(future).addClass("future");
    } else {
        console.log("present")
        var present = $(this).next("p");
        $(present).addClass("present");
    }
});

// var currentTime = parseInt(time.textContent);
// console.log(currentTime);
// if (moment().isAfter(time))