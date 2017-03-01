function myFunction() {
    $("#event-list").empty();

    if($('#movies').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/kibrv4dalfnvj5u08vfacu98k8@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append(item.summary + "<br/>");
            }
        });
    }

    if($('#concerts').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/apjsaqt68sa0fs0e6nmpo81ms0@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append(item.summary + "<br/>");
            }
        });
    }

    if($('#multicultural').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/5e5no23jcqdbqmin32f8svdm8g@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                $("#event-list").append(item.summary + "<br/>");
               
            }
        });
    }


}
