
$.getJSON('calendar.json', (e)=>{
    console.log('JSON Loaded');
    calendar_div = $('#EventsContent')[0];
    calendar_div.append($('<h1>Events Calendar</h1>').get(0));
    for(var semester in e.semesters) {
        console.log(semester);
        calendar_div.append($('<h2>'+semester+'</h2>').get(0));
        let events = e.semesters[semester];
        for(var i = 0; i < events.length; i++) {
            let event = events[i];
            let div = $("<div class='CalendarEvent'><div class='CalendarDate'><span class='DateMonth'>"+event.month+"</span><span class='DateDay'>"+event.day+"</span></div><div class='CalendarTitle'><b>"+event.title+"</b></div><div class='CalendarDescription'>"+event.description+"</div><div class='CalendarTime'>"+event.time+"</div><div class='CalendarLocation'><b>"+event.location+"</b></div></div>").get(0);
            calendar_div.append(div);
        }
    }
});

