

//Start
$('#js-calendar').html(createCalendar);
$('#js-yearSelect').html(yearSelect);
$('#js-confirmMonthYear').click(function () {
    $('#js-calendar').html(changeCalendar)
});


function createCalendar() {
    //Variables
    var day_of_week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
        month_of_year = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ),
        Calendar = new Date(),
        year = Calendar.getYear(),
        month = Calendar.getMonth(),
        today = Calendar.getDate(),
        weekday = Calendar.getDay(),
        html = '';
    
    //Start on the first of this month
    Calendar.setDate(1);
    Calendar.setMonth(month);

    //Template Calendar
    html = '<table>';
    //Head
    html += '<thead>';
    html += '<tr class="head_cal"><th colspan="7">' + month_of_year[month] + '</th></tr>';
    html += '<tr class="subhead_cal"><th colspan="7">' + Calendar.getFullYear() + '</th></tr>';
    html += '<tr class="week_cal">';
    for (var i = 0; i < 7; i++) {
        if (weekday = i) {
            html += '<th class="week_event">' + day_of_week[i] + '</th>'
        } else {
            html += '<th>' + day_of_week[i] + '</th>';
        }
    }
    html += '</tr>';
    html += '</thead>'

    //Body
    html += '<tbody class="days_cal">';
    html += '</tr>';

    //White Zone
    for (var i = 0; i < Calendar.getDay(); i++) {
        html += '<td class="white_cal"> </td>';
    }

    for (var i = 0; i < 31; i++) {
        if (Calendar.getDate() > i) {
            week_day = Calendar.getDay();

            if (week_day === 0) {
                html += '</tr>';
            }
            if (week_day !== 7) {
                // This Day
                var day = Calendar.getDate();
                var info = Calendar.getMonth() + 1 + '/' + day + '/' + Calendar.getFullYear();

                if (today === Calendar.getDate()) {
                    html += '<td><a class="today_cal" href="#" data-id="' + info + '">' + day + '</a></td>';
                } else {
                    html += '<td><a href="#" data-id="' + info + '" >' + day + '</a></td>';
                }
            }
            if (week_day == 7) {
                html += '</tr>';
            }
        }

        Calendar.setDate(Calendar.getDate() + 1);
    } //end for loop
    return html;
}

function yearSelect() {
    //Variables
    var unixStartDate = new Date("January 1, 1970 00:00:00"),
        today = new Date(),
        currentYear = today.getFullYear(),
        limit = currentYear + 10,
        yyyy = unixStartDate.getFullYear(),
        html = '<option>Select Year</option>';

    for (var i = yyyy; i <= limit; i++, yyyy++) {
        html = html + `<option value="${yyyy}">${yyyy}</option>`
    }; //end for loop
    return html;
}

function changeCalendar() {
    //Variables
    var day_of_week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
        month_of_year = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ),
        yearValue = $('#js-yearSelect').val(),
        monthValue = $('#js-monthSelect').val(),
        Calendar = new Date(`${monthValue}/01/${yearValue}`),
        year = Calendar.getYear(),
        month = Calendar.getMonth(),
        today = Calendar.getDate(),
        weekday = Calendar.getDay(),
        html = '';

    //Check for value error
    try {
        if (!yearValue) throw 'DATE ERROR';
        if (!monthValue) throw 'DATE ERROR';
    }
    catch(err) {
        console.error(err);
        alert(`Error: ${err}\nPlease enter a valid date!`);
        return;
    }
    
    //Start on the first of this month
    Calendar.setDate(1);
    Calendar.setMonth(month);

    //Template Calendar
    html = '<table>';
    //Head
    html += '<thead>';
    html += '<tr class="head_cal"><th colspan="7">' + month_of_year[month] + '</th></tr>';
    html += '<tr class="subhead_cal"><th colspan="7">' + Calendar.getFullYear() + '</th></tr>';
    html += '<tr class="week_cal">';
    for (var i = 0; i < 7; i++) {
        if (weekday = i) {
            html += '<th class="week_event">' + day_of_week[i] + '</th>'
        } else {
            html += '<th>' + day_of_week[i] + '</th>';
        }
    }
    html += '</tr>';
    html += '</thead>'

    //Body
    html += '<tbody class="days_cal">';
    html += '</tr>';

    //White Zone
    for (var i = 0; i < Calendar.getDay(); i++) {
        html += '<td class="white_cal"> </td>';
    }

    for (var i = 0; i < 31; i++) {
        if (Calendar.getDate() > i) {
            week_day = Calendar.getDay();

            if (week_day === 0) {
                html += '</tr>';
            }
            if (week_day !== 7) {
                // This Day
                var day = Calendar.getDate();
                var info = Calendar.getMonth() + 1 + '/' + day + '/' + Calendar.getFullYear();

                if (today === Calendar.getDate()) {
                    html += '<td><a class="today_cal" href="#" data-id="' + info + '">' + day + '</a></td>';
                } else {
                    html += '<td><a href="#" data-id="' + info + '" >' + day + '</a></td>';
                }
            }
            if (week_day == 7) {
                html += '</tr>';
            }
        }

        Calendar.setDate(Calendar.getDate() + 1);
    } //end for loop
    return html;
}