

//Start

//Variables (can be moved to a database using a node/js server or other server)


//Function Calls
$('#js-calendar').html(createCalendar);
$('#js-yearSelect').html(yearSelect);
$('#js-confirmMonthYear').click(function () {
    $('#js-calendar').html(changeCalendar)
});
window.onscroll = function() {headerScroll()};
$('.js-calendarDay').click(function() {
    date = $(this).attr('data-id');
    $('#js-calendar').html(dayCalendar(date))
});
$('#js-addEvent').click(addEventShow);
$('.overlayEffect').click(addEventHide);
$('$js-eventExit').click(addEventHide);


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
                var data_day = (Calendar.getDate() < 10) ? "0" + Calendar.getDate():Calendar.getDate()
                var day = Calendar.getDate();
                var data_month = (Calendar.getMonth() < 10) ? "0" + (Calendar.getMonth() + 1):Calendar.getMonth()
                var info = data_month + '/' + data_day + '/' + Calendar.getFullYear();

                if (today === Calendar.getDate()) {
                    html += '<td><div class="today_cal js-calendarDay" data-id="' + info + '">' + day + '</div></td>';
                } else {
                    html += '<td><div class="js-calendarDay" data-id="' + info + '" >' + day + '</div></td>';
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
                var data_day = (Calendar.getDate() < 10) ? "0" + Calendar.getDate():Calendar.getDate()
                var day = Calendar.getDate();
                var data_month = (Calendar.getMonth() < 10) ? "0" + (Calendar.getMonth() + 1):Calendar.getMonth()
                var info = data_month + '/' + data_day + '/' + Calendar.getFullYear();

                if (today === Calendar.getDate()) {
                    html += '<td><div class="today_cal js-calendarDay" data-id="' + info + '">' + day + '</div></td>';
                } else {
                    html += '<td><div class="js-calendarDay" data-id="' + info + '" >' + day + '</div></td>';
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

function dayCalendar(date) {
    //Variables
    var day_of_week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
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
        timeLibrary = new Array(
            '12:00am',
            '12:30am',
            '1:00am',
            '1:30am',
            '2:00am',
            '2:30am',
            '3:00am',
            '3:30am',
            '4:00am',
            '4:30am',
            '5:00am',
            '5:30am',
            '6:00am',
            '6:30am',
            '7:00am',
            '7:30am',
            '8:00am',
            '8:30am',
            '9:00am',
            '9:30am',
            '10:00am',
            '10:30am',
            '11:00am',
            '11:30am',
            '12:00pm',
            '12:30pm',
            '1:00pm',
            '1:30pm',
            '2:00pm',
            '2:30pm',
            '3:00pm',
            '3:30pm',
            '4:00pm',
            '4:30pm',
            '5:00pm',
            '5:30pm',
            '6:00pm',
            '6:30pm',
            '7:00pm',
            '7:30pm',
            '8:00pm',
            '8:30pm',
            '9:00pm',
            '9:30pm',
            '10:00pm',
            '10:30pm',
            '11:00pm',
            '11:30pm',
        ),
        Calendar = new Date(date),
        year = Calendar.getYear(),
        month = Calendar.getMonth(),
        today = Calendar.getDate(),
        weekday = day_of_week[Calendar.getDay()],
        html = '';

        //Template Calendar
        html = '<table>';
    //Head
    html += '<thead class="time_cal">';
    html += '<tr class="head_cal"><th colspan="3">' + weekday + ', ' + month_of_year[month] + ' ' + today + '</th></tr>';
    html += '<tr class="subhead_cal"><th colspan="2">' + Calendar.getFullYear() + '</th><th class="subhead_cal" colspan="5"></th></tr>';
    html += '</thead>'

    //Body
    html += '<tbody class="time_cal">'

    for(var i = 0; i < 48; i++) {
        html += `<tr id="time-${timeLibrary[i]}">`
        html += `<td class="time"><div>${timeLibrary[i]}</div></td>`
        html += '<td class="spacer"></td>'
        html += '<td class="event"></td>'
        html += '<td class="spacer"></td>'
        html += '<td class="end"></td>'
        html += '</tr>'
    }
    html += '</tbody>'
    

    return html;
}

function addEventShow() {
    $('.div-addEvent').show();
    $('.overlayEffect').show();
}

function addEventHide() {
    $('.div-addEvent').hide();
    $('.overlayEffect').hide();
}

function addEvent() {
    console.log('Test Successful')
}

function headerScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('header').css({
            'height': '4.5vw',
            'transition': '0.5s'
        })
        $('.title').css({
            'font-size': '2vw',
            'top': '1.25vw',
            'line-height': '2vw',
            'left': '1.5vw',
            'transition': '0.5s'
        })
        $('.npt-dateSearch').css({
            'top': '1.25vw',
            'left': '16vw',
            'height': '2vw',
            'width': '20vw',
            'font-size': '0.75vw',
            'padding': '0 0.5vw 0 0.5vw',
            'transition': '0.5s'
        })
        $('.btn-addEvent').css({
            'top': '1.25vw',
            'right': '1.5vw',
            'height': '2vw',
            'width': '5vw',
            'font-size': '0.75vw',
            'transition': '0.5s'
        })
    } else {
        $('header').css({
            'height': '12vw',
            'transition': '0.5s'
        });
        $('.title').css({
            'font-size': '3.5vw',
            'line-height': '3.5vw',
            'top': '4.25vw',
            'left': '3vw'
        });
        $('.npt-dateSearch').css({
            'top': '4.25vw',
            'left': '28vw',
            'height': '3.5vw',
            'width': '30vw',
            'font-size': '1.25vw',
            'padding': '0 0.75vw 0 0.75vw',
            'transition': '0.5s'
        })
        $('.btn-addEvent').css({
            'top': '4.25vw',
            'right': '3vw',
            'height': '3.5vw',
            'width': '8vw',
            'font-size': '1.25vw',
            'transition': '0.5s'
        })
    }
}