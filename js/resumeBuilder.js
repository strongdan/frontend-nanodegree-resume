var formattedName = HTMLheaderName.replace("%data%", 'Daniel Strong');

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);

$("#header").append(formattedRole);
