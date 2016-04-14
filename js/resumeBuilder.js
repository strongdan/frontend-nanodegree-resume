// var formattedName = HTMLheaderName.replace("%data%", 'Daniel Strong');
// var role = "Web Developer"
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// bio contains a name, role, welcomeMessage, contacts object and skills array
// The contacts object should contain (but doesn't have to) a mobile number, email address, github username,
// twitter handle and location.
var bio = {
	"name" : "Daniel Strong",
	"role" : "Web Developer",
	"contacts" : {
    "mobile" : "907-209-0409",
    "email" : "danielstrong@mac.com",
    "github" : "strongdan",
    "twitter" : "@danstrong",
    "location" : "Juneau, AK"
  },
	"welcome message" : "Hi there!",
	"skills" : ["HTML", "CSS", "JS", "Python", "Ruby"],
  "bioPic" : "images/fry.jpg"
};

// education contains an array of schools. Each school object in schools contains a name,
// location, degree, majors array, dates attended and a url for the school's website. education
// also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain
// a title, school, dates attended and a url for the course.
var education = {
  	"schools" : [
  	{
    "name": "University of Alaska Southeast",
  	"city": "Juneau, AK",
  	"degree": "BS",
  	"major": "Marine Biology"
},
  { 	"name": "University of Alaska Fairbanks",
  	"city": "Fairbanks, AK",
  	"degree": "masters",
  	"major": "Interdisciplinary Studies"
    }
  ]
}

//work contains an array of jobs
// Each job object in jobs should contain an employer, title, location, dates worked and description.
var work = {
  "jobs": [
    {
    	"employer: "State of Alaska",
      "title": "Research Analyst",
      "location": "Juneau",
      "dates worked": "2013-2016,
    	"description": "Update database and do research for publication"
    },
    {
    	"employer: "State of Alaska",
      "title": "Research Analyst",
      "location": "Juneau",
      "dates worked": "2012-2013,
    	"description": "Migrate to new database, conduct surveys"
    },
    {
    	"employer: "Sealaska Heritage Institute",
      "title": "Research Associate",
      "location": "Juneau",
      "dates worked": "2009-2012,
    	"description": "Conduct research and create publications"
    }
  ]
}

// projects contains an array of projects. Each project object in projects should contain a title,
// dates worked, description, and an images array with URL strings for project images. //

var projects = {
  "projects" [
    {
    	"title" : "Front-end Nanodegree Resume",
    	"dates worked" : "April 2016",
    	"description" : "A dynamic resume/portfolio site using JS",
    	"images" : ["img1", "img2", "img3"]
    }
  ]
}



// $("#main").append(bio.name); */

// $("#main").append(work["position"]);

//$("#main").append(education.name);

//$("#header").prepend(formattedName);

//$("#header").append(formattedRole);
