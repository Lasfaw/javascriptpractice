var database = [
{
	username: "lulit",
	password: "supersecret"
}
];

var newseed = [
{
	username: "Booby",
	timeline: "Just wathced a TV show for 5 hours"
},

{
    username: "Sally",
	timeline: "currently learning javascript"
}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass){
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed); 
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);
