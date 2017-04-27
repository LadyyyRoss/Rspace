/**
 * Created by dominiqueross on 4/27/17.
 */

var myIndex = 0;
// Function called in the onsubmit for the checkin form. Makes sure there are no valid tags in submitted
// text. If there are, it removes them. Handles all cases as for the tags as well.
function sanitiseCheckIn(){
    var fnameField = document.getElementById("fname");
    var firstName = sanitise(fnameField.value);
    fnameField.innerHTML = firstName;
    var lnameField = document.getElementById("lname");
    var lastName = sanitise(lnameField.value);
    lnameField.innerHTML = lastName;
    var emlField = document.getElementById("emailaddr");
    var eml = sanitise(emlField.value);
    fnameField.innerHTML = eml;
    return true;
}
function sanitiseContact(){
    var fnameField = document.getElementById("form_name");
    var firstName = sanitise(fnameField.value);
    fnameField.innerHTML = firstName;
    var lnameField = document.getElementById("form_lastname");
    var lastName = sanitise(lnameField.value);
    lnameField.innerHTML = lastName;
    var emlField = document.getElementById("form_email");
    var eml = sanitise(emlField.value);
    emlField.innerHTML = eml;
    var msgField = document.getElementById("form_message");
    var msg = sanitise(msgField.value);
    msgField.innerHTML = msg;
    return true;
}
function sanitise(str){
    str = str.toLowerCase();
    var toRemove = ["<script>", "<div>", "<alert>", "<input>", "<onmouseover>", "<onhover>", "<onfocus>", ";", "\""];
    for (var i = 0; i < toRemove.length; i++) {
        while (str.includes(toRemove[i])) {
            str = str.replace(toRemove[i], "");
        }
    }
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

var slideIndex = 0;

function carousel () {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();

$(document).ready( function(){
    $.getJSON("https://www.googleapis.com/drive/v3/files?q='0B23SaQ_m5-yxbk9YWHE4eHVOWEE'+in+parents&key=AIzaSyBiSrUzyg9qreSucbXE1hMR0S4i9J0NMzo", function(data, status) {
        for (i in data['files']) {
            item = data['files'][i];
            $("#append").append("<img class='mySlides' src='https://docs.google.com/uc?id=" + item.id + "' style='width:100%'>");
        }
    })
});


