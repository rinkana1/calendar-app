
var unixStartDate = new Date("January 1, 1970 00:00:00");
var today = new Date();
console.log(today);

var currentMonth;
var currentYear = today.getFullYear();

function currentMonthAndYear() {
    switch (today.getMonth()) {
        case 0:
            currentMonth = 'January';
            break;
        case 1:
            currentMonth = 'February';
            break;
        case 2:
            currentMonth = 'March';
            break;
        case 3:
            currentMonth = 'April';
            break;
        case 4:
            currentMonth = 'May';
            break;
        case 5:
            currentMonth = 'June';
            break;
        case 6:
            currentMonth = 'July';
            break;
        case 7:
            currentMonth ='August';
            break;
        case 8:
            currentMonth = 'September';
            break;
        case 9:
            currentMonth = 'October';
            break;
        case 10:
            currentMonth = 'November';
            break;
        case 11:
            currentMonth = 'December';
            break;
    }
    $('#js-calendarTitle').text(`${currentMonth} ${currentYear}`)
    console.log(currentMonth, currentYear);
}

currentMonthAndYear();

function yearOptionList() {
    var yyyy = unixStartDate.getFullYear();
    var yearSelect = $('#js-yearSelect');
    var html = '<option>Select Year</option>';
    var limit = currentYear + 10;

    for (var i = 0; yyyy <= limit; i++, yyyy++) {
        html = html + `<option value="${yyyy}">` + yyyy + '</option>'
    };

    yearSelect.html(html);
    console.log(limit)
}

yearOptionList();