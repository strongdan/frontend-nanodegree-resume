var formattedName = HTMLheaderName.replace("%data%", 'Daniel Strong');

var formattedRole = HTMLheaderRole.replace("%data%", 'Web Developer');

$("#header").prepend(formattedName);

$("#header").append(formattedRole);
