var now = moment().format('MMMM Do YYYY, h:mm a');

$("#currentDateTime").text(now);

var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (i = 0; i < hoursArray.length; i++) {
    $('#calendar').append(
        $('<div class="col-2" id="hour">').text(hoursArray[i]),
        $('<textarea class="col-8" id="task">').text(localStorage.getItem("savedTask" + (i + 1))),
        $('<button class="col-2" id="save">').text("Save"),
    );
    $('#task').attr("id", "task" + (i + 1));
    $('#save').attr("id", "task" + (i + 1));
}

timeColor();

$("button").click(function () {
    event.preventDefault();
    var selectedID = $(this).attr("id");
    var storedText = document.getElementById(selectedID).value;
    selectedID = selectedID[4];
    localStorage.setItem(("savedTask" + selectedID), storedText);
});

function timeColor() {
    for (var i = 0; i < hoursArray.length; i++) {
        var time = moment().hour(i + 9);
        if (moment().isAfter(time)) {
            console.log("after");
            $("#task" + (i + 1)).css("background-color", "lightgreen");
        } else if (moment().isBefore(time)) {
            console.log("before");
            $("#task" + (i + 1)).css("background-color", "lightgrey");
        } else {
            console.log("now");
            $("#task" + (i + 1)).css("background-color", "salmon");;
        }
    };
};

$("#clear").click(function () {
    event.preventDefault();
    localStorage.clear;
});