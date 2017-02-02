    /*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "Jeryl Barnum",
    "role": "Front-End Web Developer EXTRAORDINARE!",
    "contacts": {
        "email": "jeryl.barnum@gmail.com",
        "mobile": "562-826-2655",
        "github": "JBarnum",
        "twitter": "@J_Barnum",
        "location": "Los Angeles"
    },
    "bioPic": "images/profile.jpg",
    "welcomeMessage": "What's up bro?",
    "skills": ["Humor", "awesomeness", "teaching", "JS"]
};

var work = {
    "jobs": [
        {
            "title": "NOC Analyst II/Systems Administrator",
            "employer": "VectorUSA",
            "workURL":"http://www.vectorusa.com",
            "workLogo": "images/vector.png",
            "dates": "March 2016-Present",
            "location": ["Los Angeles, CA", "Oakland, CA"],
            "description": "As a NOC Analyst I am responsible for monitoring multiple customer sites at any one time and providing general routine server routine maintenance tasks. With knowledge of TCP/IP and LAN/WAN’s I work to troubleshoot most problems effectively and with the utmost aptitude.<br>As a system administrator, I am responsible for making sure client networks and customers at client sites are up and running efficiently and effectively with as little down-time as possible. When down-time does occur, I use my abilities to effectively diagnose the problem and come up with a solution ASAP."},
        {
            "title": "Network Support Specialst",
            "employer": "Farmers & Merchants Bank",
            "workURL":"http://www.fmb.com",
            "workLogo": "images/fmb.png",
            "dates": "March 2009-Febuary 2015",
            "location": "Long Beach, CA",
            "description": "As a Network Services Support Associate, I am responsible for supporting the day-to-day operations of the Bank's Information Systems by resolving how-to questions, performing security resets and basic troubleshooting of system problems. Additionally, I set up, install and maintain printers, workstations, notebooks, and servers at the bank locations."
        }
    ]
};

var education = {
    "schools": [
    {
        "name": "CSULB",
        "city": "Long Beach, CA",
        "degree": "B.S. Finance & Management Information Systems",
        "minors": "N/A"
    }
    ],
    "onlineCourses": [
        {
            "name": "Udacity",
            "course": "Front-End Development"
        },
        {   "name": "CodeAcademy",
            "course": "JavaScript"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "XO Crew",
            "dates": "January 2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": "images/tic.png"
        },
        {
            "title": "Grub1Out",
            "dates": "Febuary 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": "images/Grub_One_Out.png"
        },
        {
            "title": "TrailMix",
            "dates": "April 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": "images/trailmix.png"
        }
    ]
};

function displayWork() {

    projects.display = function() {


        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            console.log(projects.projects[project].title);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            var formattedImage;
            if (projects.projects[project].images.length > 0){
                   for(image in projects.projects[project].images) {
                        formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                        }
                    $(".project-entry:last").append(formattedImage);
             }
         }

//start education display function here
    education.display = function () {

    };
};

projects.display();

var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(name);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    console.log(bio.skills[0]);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedWorkLogo = HTMLworkLogo.replace("%data%", work.jobs[job].workLogo);
        $(".work-entry:last").prepend(formattedWorkLogo);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

var formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedPic);
$("#topContacts").prepend(formattedContact,
    formattedPhone,
    formattedTwitter,
    formattedGit,
    formattedLocation
    );
// $("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
        }
    }

$("#mapDiv").append(googleMap);

//location function of places I have worked
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}


// console.log(locationizer(work));

}

displayWork();





$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});