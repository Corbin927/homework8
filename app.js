//check to make sure script is linked to html
console.log("Hello World!");


//variable for downloadcount
let downloadCount = 0;
//add event listener to the button
document.getElementById("resume").addEventListener("click", function() {
    //increment the download count
    downloadCount++;
    //check if the resume has already been downloaded
    if(hasDownloadedResume == false) {
    //alert the user that the resume has been downloaded
        alert("Your resume is downloaded successfully!\n" +"Resume downloaded " + downloadCount + " time.")
        hasDownloadedResume = true;
    }
    else{
        alert("Resume downloaded " + downloadCount + " times.");
    }


});

//variables for name and resume download
let hasDownloadedResume = false;
const myName = "Corbin Comber";

//greeting function
function showGreeting(name){
    return "Hello, my name is " + name + "! Welcome to my Portfolio!";
}
//call greeting function
let greetingMessage = showGreeting(myName);

//place the greeting message in the intro section
document.getElementById("intro").innerHTML = greetingMessage;
//calculate days until deadline function

function daysUntilDeadline(submissionDate){
    //get todays date
    const today = new Date();
    //get the deadline date
    let deadline = new Date(submissionDate);
    //calculate the difference in time
    let timeDiff = deadline - today;
    //calculate the difference in days
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //return the amount of days left
    return daysDiff;
}


list = [];
//make a list and inistialize it with the items in the unordered list
for (let i = 0; i < document.getElementsByClassName("list-item").length; i++) {
    let item = document.getElementsByClassName("list-item")[i].innerHTML;
    list.push(item);
}
document.getElementById("submit").addEventListener("click", function() {
    //get the input from the user
    if(document.getElementById("addItem").value != "") {
        input = document.getElementById("addItem").value;
        //add the input to the list
        list.push(input);
        //put the list item in the unordered list
        let ul = document.getElementsByClassName("list-unstyled")[0];
        let li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = input;
        ul.appendChild(li);
    }
});

//make lists for each project, title, description, and date
_projects = ["project1", "project2", "project3", "project4", "project5"];
_Title = ["Air-Dry Clay", "Multimedia", "Procreate", "Blender", "Animation"];
_Description = ["This is a sculpture of a strawberry made out of air-dry clay","This is a sculpture of a moped that i made from cardboard and wire","This is a drawing of a woman that i made on procreate","This is a sculpture of Pheobe bridgers i made on blender","This is an animation that i am currently working on"];
_Date = ["2026-5-01", "2026-9-01", "2026-10-15", "2026-10-16", "2026-11-19"];

//for each project, set the title, description, and date in the appropriate card
for (let i = 0; i < _projects.length; i++) {
    //project details
    document.getElementById(_projects[i]).querySelector('.card-title').innerHTML = _Title[i];
    let cardtext = _Description[i] + "<br/><br/>Deadline: " + _Date[i];
    document.getElementById(_projects[i]).querySelector('.card-text').innerHTML = cardtext;

    //conditional statement to check if the project is ongoing or completed and display the appropriate message
    if(daysUntilDeadline(_Date[i]) >= 0) {
        document.getElementById(_projects[i]).querySelector('.card-text').innerHTML += "<br/> Ongoing Project: " + daysUntilDeadline(_Date[i]) + " days left";
    }
    else{
        document.getElementById(_projects[i]).querySelector('.card-text').innerHTML += "<br/> Project Completed!";
    }
}

//creating tables in js
tables = document.firstElementChild.lastElementChild.querySelector(".containers .maincontent .e_e ").firstElementChild.lastElementChild;

//create the Education table
tables.innerHTML = "<table border = '1' class = 'table table-bordered table-striped-columns table-hover'>\
<thead><tr><th colspan = '3'>Education</th></tr><tr><th>University</th><th>Degrees</th><th>Start/End Date</th></tr></thead>\
<tbody><tr><td>Northern Arizona University</td><td><ul><li>Immersive Media And Games</li><li>Japanese</li></ul></td><td>August 2024 - May 2029</td></tr></tbody></table>";

//create the Experience table
tables.innerHTML += "<table border ='1' class ='table table-bordered table-striped-columns table-hover'>\
<thead><tr><th colspan = 3>Experience</th></tr><tr><th>Employer</th><th>Job Title</th><th>Duties</th></tr></thead>\
<tbody><tr><td>NAU</td><td>GELL Center Assistant</td><td><ul><li>Managing Student Attendance</li><li>Preparing the GELL Center for opening</li><li>\
Responding to emails</li><li>Supervising room usage</li><li>Setting up and Managing outside events</li></ul></td></tr><tr><td>\
Texas Roadhouse</td><td>Server Assistant</td><td><ul><li>Cleaning and Reseting tables after use</li><li>stocking up the bar and Restrooms</li>\
<li>Mopping up spills and Restrooms</li><li>Taking out trashes at dish and expo stations</li></ul></td></tr></tbody></table>";