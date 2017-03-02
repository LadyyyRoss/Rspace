function myFunction() {
    $("#event-list").empty();

    if($('#movies').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/kibrv4dalfnvj5u08vfacu98k8@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");

            }
        });
    }

    if($('#concerts').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/apjsaqt68sa0fs0e6nmpo81ms0@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");
            }
        });
    }

    if($('#multicultural').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/5e5no23jcqdbqmin32f8svdm8g@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");

            }
        });
    }

    if($('#novelties').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/n09br9cegtalvd0m8b0k32ofs8@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");

            }
        });
    }

    if($('#performances').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/6ntp3er9c2t9cu8cckr0vibk4s@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");

            }
        });
    }

    if($('#latenight').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/dirpjbv7sfq5p2v13r9g9gso04@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body'>" + "<h2>"+ item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><p>Starting : "+item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div><br/>");

            }
        });
    }


}
