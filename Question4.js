//Just to cancel Firefox's image drag thumbnail
$(document).on("dragstart", function () {
    return false;
});

$(document).ready(function () {
    var dragging = false;
    var initDogX = 0;
    var initDogY = 0;
    var initCursorX = 0;
    var initCursorY = 0;

    $("#funnyDog").mousedown(function (event) {
        dragging = true;
        initDogX = Number.parseInt($("#funnyDog").css("left"));
        initDogY = Number.parseInt($("#funnyDog").css("top"));
        initCursorX = event.clientX;
        initCursorY = event.clientY;
    });

    $("#funnyDog").mousemove(function (event) {
        if (dragging == true) {
            let deltaX = (initDogX + (event.clientX - initCursorX)) + "px";
            let deltaY = (initDogY + (event.clientY - initCursorY)) + "px";
            $("#funnyDog").css("left", deltaX);
            $("#funnyDog").css("top", deltaY);
        }
    });

    $("#funnyDog").mouseup(function () {
        dragging = false;
    });
});