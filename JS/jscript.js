
//the JavaScript code for the search bar
//pass the search bar input into a variable
var searchTerm = document.getElementById("searchInput");
//add a dynamic event listener. the function runs after each keypress
searchTerm.onkeyup = function searchFunction() {
    //pass the search bar input into a variable
    var input = document.getElementById("searchInput");
    //change the input into all uppercase to negate case sensitivity
    input = input.value.toUpperCase();
    // pass the schedule xml page into a variable
    const url = "https://www.finnkino.fi/xml/Schedule/";
    // creating an XMLHttpRequest object. first pass the request function into a variable
    var xmlhttp = new XMLHttpRequest();
    // creating an XMLHttpRequest object cont'd.
    //request is set as a GET method, url is the variable with the XML data
    //and server request asynchronicity is set to "true"
    xmlhttp.open("GET", url, true);
    //request sent to the server
    xmlhttp.send();
    //a function is set execute when receiving an answer
    xmlhttp.onreadystatechange = function () {
        //checking whether the request is ready, ready state 4 means "ready" and status 200 means "ok"
        //if the request is ready the various screening informations are passed into variables
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //response passed into a variable
            var xmlDoc = xmlhttp.responseXML;
            //the name of the event
            var shows = xmlDoc.getElementsByTagName("Show");
            //the length of the movie
            var runtimes = xmlDoc.getElementsByTagName("LengthInMinutes")
            //the title of the movie
            var titles = xmlDoc.getElementsByTagName("Title");
            //the starting time
            var showStarts = xmlDoc.getElementsByTagName("dttmShowStart");
            //the auditorium number/name
            var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
            //the theater name
            var theaters = xmlDoc.getElementsByTagName("Theatre");
            //the age rating
            var ratings = xmlDoc.getElementsByTagName("Rating");
            //a small poster picture
            var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");

            //a table is passed into a variable. a class is added for CSS
            var table = "<table class='listingsTable'>";
            //for each iteration of the search, all of the shows are cycled through
            for (var i = 0; i < shows.length; i++) {
                //if the title of the movie contains the search input the following happens.
                //toUpperCase is to negate case sensitivity
                if (titles[i].innerHTML.toUpperCase().includes(input)) {
                    //add a new row
                    table += '<tr>';
                    //add a column with name
                    table += '<td>' + titles[i].innerHTML + '</td>';
                    //pass the showStarts text into a variable
                    var time = new Date(showStarts[i].innerHTML);
                    //change the date and time information to Finnish format of showing the time and pass into a variable
                    let startTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    //add a column with start time
                    table += '<td>' + "Starting time: " + startTime + '</td>';
                    //add a column with length
                    table += '<td>' + "Length: " + runtimes[i].innerHTML + " min" + '</td>';
                    //add a column with theater name
                    table += '<td>' + theaters[i].innerHTML + '</td>';
                    //add a column with auditorium number/name
                    table += '<td>' + auditoriums[i].innerHTML + '</td>';
                    //add a column with age rating
                    table += '<td>' + "Age rating: " + ratings[i].innerHTML + '</td>';
                    //add a column with poster image
                    table += '<td><img src="' + images[i].innerHTML + '"></td>';
                    //close the row
                    table += '</tr>';

                }
            }
            //after the show list is cycled through close the table
            table += "</table>";
            //and push it into the div
            divElement.innerHTML = table;
        }
    }
}

//the JavaScript for the pulldown menu
//pass the pulldown menu into a variable
var theaterChoice = document.getElementById("selectTheater");
//add a dynamic even listener. when a choice is made in the menu
//the following happens
theaterChoice.onchange = function theaterChoice() {
    //pass the choice into a variable
    var theater = document.getElementById("selectTheater").value;
    //depending on the choice...
    if (theater == "itis") {
        //...a URL is determined
        const url = "https://www.finnkino.fi/xml/Schedule/?area=1045";
        //these follow the same logic as in the previous function
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xmlDoc = xmlhttp.responseXML;
                //I left the theater name from these variables,
                //since the theater is known by the choice made
                var shows = xmlDoc.getElementsByTagName("Show");
                var runtimes = xmlDoc.getElementsByTagName("LengthInMinutes")
                var titles = xmlDoc.getElementsByTagName("Title");
                var showStarts = xmlDoc.getElementsByTagName("dttmShowStart");
                var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
                var ratings = xmlDoc.getElementsByTagName("Rating");
                var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");


                var table = "<table class='listingsTable'>";
                for (var i = 0; i < shows.length; i++) {
                    table += '<tr>';
                    table += '<td>' + titles[i].innerHTML + '</td>';                         
                    var time = new Date(showStarts[i].innerHTML);
                    let startTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    table += '<td>' + "Starting time: " + startTime + '</td>';
                    table += '<td>' + "Length: " + runtimes[i].innerHTML + " min" + '</td>';
                    table += '<td>' + auditoriums[i].innerHTML + '</td>';
                    table += '<td>' + "Age rating: " + ratings[i].innerHTML + '</td>';
                    table += '<td><img src="' + images[i].innerHTML + '"></td>';
                    table += '</tr>';

                }
                table += "</table>";
                divElement.innerHTML = table;

            }
        }
    } else if (theater == "kinopalatsi") {
        const url = "https://www.finnkino.fi/xml/Schedule/?area=1031";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xmlDoc = xmlhttp.responseXML;
                var shows = xmlDoc.getElementsByTagName("Show");
                var runtimes = xmlDoc.getElementsByTagName("LengthInMinutes")
                var titles = xmlDoc.getElementsByTagName("Title");
                var showStarts = xmlDoc.getElementsByTagName("dttmShowStart");
                var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
                var ratings = xmlDoc.getElementsByTagName("Rating");
                var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");


                var table = "<table class='listingsTable'>";
                for (var i = 0; i < shows.length; i++) {
                    table += '<tr>';
                    table += '<td>' + titles[i].innerHTML + '</td>';
                    var time = new Date(showStarts[i].innerHTML);
                    let startTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    table += '<td>' + "Starting time: " + startTime + '</td>';
                    table += '<td>' + "Length: " + runtimes[i].innerHTML + " min" + '</td>';
                    table += '<td>' + auditoriums[i].innerHTML + '</td>';
                    table += '<td>' + "Age rating: " + ratings[i].innerHTML + '</td>';
                    table += '<td><img src="' + images[i].innerHTML + '"></td>';
                    table += '</tr>';

                }
                table += "</table>";
                divElement.innerHTML = table;

            }
        }

    } else if (theater == "maxim") {
        const url = "https://www.finnkino.fi/xml/Schedule/?area=1032";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xmlDoc = xmlhttp.responseXML;
                var shows = xmlDoc.getElementsByTagName("Show");
                var runtimes = xmlDoc.getElementsByTagName("LengthInMinutes")
                var titles = xmlDoc.getElementsByTagName("Title");
                var showStarts = xmlDoc.getElementsByTagName("dttmShowStart");
                var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
                var ratings = xmlDoc.getElementsByTagName("Rating");
                var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");


                var table = "<table class='listingsTable'>";
                for (var i = 0; i < shows.length; i++) {
                    table += '<tr>';
                    table += '<td>' + titles[i].innerHTML + '</td>';
                    var time = new Date(showStarts[i].innerHTML);
                    let startTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    table += '<td>' + "Starting time: " + startTime + '</td>';
                    table += '<td>' + "Length: " + runtimes[i].innerHTML + " min" + '</td>';
                    table += '<td>' + auditoriums[i].innerHTML + '</td>';
                    table += '<td>' + "Age rating: " + ratings[i].innerHTML + '</td>';
                    table += '<td><img src="' + images[i].innerHTML + '"></td>';
                    table += '</tr>';

                }
                table += "</table>";
                divElement.innerHTML = table;

            }
        }

    } else if (theater == "tennispalatsi") {
        const url = "https://www.finnkino.fi/xml/Schedule/?area=1033";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xmlDoc = xmlhttp.responseXML;
                var shows = xmlDoc.getElementsByTagName("Show");
                var runtimes = xmlDoc.getElementsByTagName("LengthInMinutes")
                var titles = xmlDoc.getElementsByTagName("Title");
                var showStarts = xmlDoc.getElementsByTagName("dttmShowStart");
                var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
                var ratings = xmlDoc.getElementsByTagName("Rating");
                var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");


                var table = "<table class='listingsTable'>";
                for (var i = 0; i < shows.length; i++) {
                    table += '<tr>';
                    table += '<td>' + titles[i].innerHTML + '</td>';
                    var time = new Date(showStarts[i].innerHTML);
                    let startTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    table += '<td>' + "Starting time: " + startTime + '</td>';
                    table += '<td>' + "Length: " + runtimes[i].innerHTML + " min" + '</td>';
                    table += '<td>' + auditoriums[i].innerHTML + '</td>';
                    table += '<td>' + "Age rating: " + ratings[i].innerHTML + '</td>';
                    table += '<td><img src="' + images[i].innerHTML + '"></td>';
                    table += '</tr>';

                }
                table += "</table>";
                divElement.innerHTML = table;

            }
        }

    }

}

const divElement = document.getElementById("screeningData");

function loadParsedData() {
    const url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var shows = xmlDoc.getElementsByTagName("Show");
            var titles = xmlDoc.getElementsByTagName("Title");
            var theaters = xmlDoc.getElementsByTagName("Theatre");
            var auditoriums = xmlDoc.getElementsByTagName("TheatreAuditorium");
            var ratings = xmlDoc.getElementsByTagName("Rating");
            var genres = xmlDoc.getElementsByTagName("Genres");
            var images = xmlDoc.getElementsByTagName("EventSmallImagePortrait");


            var table = "<table class='listingsTable'>";
            for (var i = 0; i < shows.length; i++) {
                table += '<tr>';
                table += '<td>' + titles[i].innerHTML + '</td>';
                table += '<td>' + theaters[i].innerHTML + '</td>';
                table += '<td>' + auditoriums[i].innerHTML + '</td>';
                table += '<td>' + ratings[i].innerHTML + '</td>';
                table += '<td>' + genres[i].innerHTML + '</td>';
                table += '<td><img src="' + images[i].innerHTML + '"></td>';
                table += '</tr>';

            }
            table += "</table>";
            divElement.innerHTML = table;

        }
    }
}
