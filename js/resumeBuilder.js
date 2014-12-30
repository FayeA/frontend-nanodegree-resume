var bio = {
	"name" : "John DOE",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "john.doe@mail.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "Toronto, Canada"},
	"welcomeMessage" : "Hello world!",
	"skills" : ["awesomeness", "HTML", "CSS", "lorem ipsum", "dolor sit amet", "alienum", "insolens vis an"],
	"biopic" : "images/fry.jpg"
};

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);
	//var formattedBlog= HTMLblog.replace("%data%", bio.contactInfo.blog);
	//$("#topContacts").append(formattedBlog);
	var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPicture);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		};
	};
};

bio.display();

var work = {
	"jobs" : [
		{ "employer" : "Santa Claus and Associates",
		  "title" : "Web Developer",
		  "location" : "Vancouver, BC",
		  "dates" : "2013-2014",
		  "description" : "Maintained website. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum."},
		{ "employer" : "Alice and Associates",
		  "title" : "Tour Guide",
		  "location" : "Montreal, QC",
		  "dates" : "2012-2013",
		  "description" : "Guided tourists. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum."}
	]
};

work.display = function(){
	for(n in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[n].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[n].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[n].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[n].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[n].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

work.display();

var projects = {
	"project" : [
		{ "title" : "Watermelon",
		  "dates" : "Dec 2014",
		  "description" : "Jekyll Watermelon Template. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum.",
		  "images" : [
		  	"images/197x148.gif",
		  	"images/197x148.gif",
		  	"images/197x148.gif"]},
		{ "title" : "Mango",
		  "dates" : "Nov 2014",
		  "description" : "Jekyll Mango Template. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum. Lorem ipsum ipsum ipsum. Ipsum lorem lorem lorem. Ipsum lorem ipsum ipsum.",
		  "images" : [
		  	"images/mango1.jpg",
		  	"images/197x148.gif",
		  	"images/197x148.gif"]}
	]
};

projects.display =  function(){
	for(var n in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[n].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[n].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[n].description);
		$(".project-entry:last").append(formattedDescription);
		for(var i = 0; i < projects.project[n].images.length; i++){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[n].images[i]);
			$(".project-entry:last").append(formattedImage);
		}
	};
};

projects.display();

var education = {
	"schools" : [
		{ "name" : "Webdev University",
		  "location" : "Vancouver, BC",
		  "degree" : "Master",
		  "majors" : ["Computer Science"],
		  "dates" : 2014,
		  "url" : "#www.webdev.com"},
		{ "name" : "Webdev School",
		  "location" : "Montreal, QC",
		  "degree" : "BS",
		  "majors" : ["Computer Science", "Tourism"],
		  "dates" : 2007,
		  "url" : "#www.webdev.com"}
	],
	"onlineCourses" : [
		{ "title" : "How to Use Git and Github",
		  "school" : "Udacity",
		  "date" : 2014,
		  "url" : "udacity.com"},
		{ "title" : "Reproducible Research",
		  "school" : "Coursera",
		  "date" : 2014,
		  "url" : "coursera.org"}
	]

};

education.display = function(){
	for(n in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[n].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[n].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[n].dates);
		$(".education-entry:last").append(formattedDates);
		for(var i = 0; i < education.schools[n].majors.length; i++){
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[n].majors[i]);
			$(".education-entry:last").append(formattedMajor);
		};
	};
	if(education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
		for(n in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[n].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[n].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);	
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[n].date);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[n].url);
			$(".education-entry:last").append(formattedURL);
		};
	};
};

education.display();












// Add google map
$("#mapDiv").append(googleMap);
