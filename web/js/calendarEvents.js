function ISODateString(d){
    function pad(n){return n<10 ? '0'+n : n}
    return d.getUTCFullYear()+'-'
        + pad(d.getUTCMonth()+1)+'-'
        + pad(d.getUTCDate())+'T'
        + pad(d.getUTCHours())+':'
        + pad(d.getUTCMinutes())+':'
        + pad(d.getUTCSeconds())+'Z'}

function myFunction() {
    $("#event-list").empty();

    if($('#movies').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/kibrv4dalfnvj5u08vfacu98k8@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {

            var time = new Date();
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {

                    //time = item.start.dateTime;
                    // time= time.getDay();
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'>" + "<div class='r-p'><h3> Category: '"  + data.summary + "'</h3><img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'></div><div class='r-p'><h2>" + item.summary + "</h2>"+
                        "<h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

    if($('#concerts').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/apjsaqt68sa0fs0e6nmpo81ms0@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'>" + "<img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

    if($('#multicultural').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/5e5no23jcqdbqmin32f8svdm8g@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'>" + "<img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

    if($('#novelties').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/n09br9cegtalvd0m8b0k32ofs8@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'>" + "<img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

    if($('#performances').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/6ntp3er9c2t9cu8cckr0vibk4s@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'>" + "<img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

    if($('#latenight').is(':checked')){
        $.getJSON('https://www.googleapis.com/calendar/v3/calendars/dirpjbv7sfq5p2v13r9g9gso04@group.calendar.google.com/events?key=AIzaSyD0g9mSQftiEARNlU8X7TbIYPCCoLKjagg', function(data) {
            for(i in data['items']) {
                item = data['items'][i];
                if(item.hasOwnProperty("attachments")) {
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'>" + "<img src='https://drive.google.com/uc?export=view&id=" + item.attachments[0].fileId + "' style='width:304px;height:228px;'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");
                }
                else{
                    $("#event-list").append("<div class='panel panel-danger' style='background-color: rgba(255, 0, 0, 0.74)'><div class='panel-body center'><div class='r-p'><h2>" + item.summary + "</h2><h3> Category: '" + data.summary + "'</h3><h4>"+ item.description +"</h4><p>Time : " + item.start.dateTime + "</p><p>Location: " + item.location + "</p></div></div></div><br/>");

                }
            }
        });
    }

}

function links() {
    var win = window.open("https://calendar.google.com/calendar/ical/apjsaqt68sa0fs0e6nmpo81ms0%40group.calendar.google.com/public/basic.ics");
    win.close();
    win = window.open("https://calendar.google.com/calendar/ical/5e5no23jcqdbqmin32f8svdm8g%40group.calendar.google.com/public/basic.ics");
    win.close();
    win = window.open("https://calendar.google.com/calendar/ical/dirpjbv7sfq5p2v13r9g9gso04%40group.calendar.google.com/public/basic.ics");
    win.close();
    win = window.open("https://calendar.google.com/calendar/ical/kibrv4dalfnvj5u08vfacu98k8%40group.calendar.google.com/public/basic.ics");
    win.close();
    win = window.open("https://calendar.google.com/calendar/ical/n09br9cegtalvd0m8b0k32ofs8%40group.calendar.google.com/public/basic.ics");
    win.close();
    win = window.open("https://calendar.google.com/calendar/ical/6ntp3er9c2t9cu8cckr0vibk4s%40group.calendar.google.com/public/basic.ics");
    win.close();
}
