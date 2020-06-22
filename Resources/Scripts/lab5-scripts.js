//globals
const currentDateFormat = "yy-mm-dd";
const datesTomAvailable = [1, 3, 5]; //Monday, Wednesday, Friday
const datesJerryAvailable = [1, 2, 3, 4]; //Monday, Tuesday, Wednesday, Thursday


function disableDates(date) {
    var barber = document.getElementById("ddlBarber").value;
    return checkDateAvailability(barber, date);
}

function checkDateAvailability(barber, date) {
    switch (barber) {
        case "tom":
            if (datesTomAvailable.indexOf(date.getDay()) == -1) {
                return [false];
            }
            return [true];
        case "jerry":
            if (datesJerryAvailable.indexOf(date.getDay()) == -1) {
                return [false];
            }
            return [true];
        default:
            return [true];
    }
}
function checkPhoneNumber(phoneNum) {
    var filter = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (filter.test(phoneNum)) { return true; }
    return false;
}

function checkEmailAddress(email) {
    var filter = /^.+@.+\..+$/;
    if (filter.test(email)) { return true; }
    return false;
}

function checkCVC(cvc) {
    var filter = /^\d{3}$/;
    if (filter.test(cvc)) { return true; }
    return false;
}

//init() listener
$(document).ready(function () {

    //Initialize datepicker input w/ parameters
    $("#datePicker").datepicker({
        dateFormat: currentDateFormat,
        minDate: new Date('01/01/2020'),
        maxDate: '+6M',
        //disable invalid dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });

    //Autoformat phone input
    $("#telPhone").on("input", function () {
        var phoneNum = document.getElementById("telPhone").value;
        phoneNum = phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        document.getElementById("telPhone").value = phoneNum;
    });
    //validate phone input
    $("#telPhone").on("change", function () {
        if (!checkPhoneNumber(document.getElementById("telPhone").value)) {
            alert("Please enter a valid 10-digit phone number!");
            document.getElementById("telPhone").value = "";
        }
    });
    //validate email input
    $('#emlAddress').on("change", function () {
        if (!checkEmailAddress(document.getElementById("emlAddress").value)) {
            alert("Please enter a valid email address!");
            document.getElementById("emlAddress").value = "";
        }
    });
    //validate cvc
    $('#numCVC').on("change", function () {
        if (!checkCVC(document.getElementById("numCVC").value)) {
            alert("Please enter a valid 3-digit CVC Number!");
            document.getElementById("numCVC").value = "";
        }
    });


});