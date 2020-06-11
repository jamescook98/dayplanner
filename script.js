//initialize moment.js, display date/time on screen
var now = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDateTime").text(now);

var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (i = 0; i < hoursArray.length; i++) {
    //dynamically generate rows/columns for each hour in array
    $('#calendar').append(
        $('<div class="col-2" id="hour">').text(hoursArray[i]),
        $('<textarea class="col-8" id="task">').text(localStorage.getItem("savedTask" + (i + 1))),
        $('<button class="col-2" id="save">').html("<img src='assets/saveicon.png' width='20px' height='20px'>"),
    );
    //assign generated divs unique IDs
    $('#task').attr("id", "task" + (i + 1));
    $('#save').attr("id", "task" + (i + 1));
}

//color code divs based on current time
timeColor();

function timeColor() {
    for (var i = 0; i < hoursArray.length; i++) {
        //if you change "9" in the line below you can test the function at other times of the day (+1 moves the present panel BACK one hour)
        var time = moment().hour(i + 9);
        if (moment().isAfter(time)) {
            $("#task" + (i + 1)).css("background-color", "lightgrey");
        } else if (moment().isBefore(time)) {
            $("#task" + (i + 1)).css("background-color", "#99e699");
        } else {
            $("#task" + (i + 1)).css("background-color", "turquoise");;
        }
    };
};

//save edited tasks to local storage
$("button").click(function () {
    event.preventDefault();
    var selectedID = $(this).attr("id");
    var storedText = document.getElementById(selectedID).value;
    selectedID = selectedID[4];
    localStorage.setItem(("savedTask" + selectedID), storedText);
});

//clear textareas and local storage
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});