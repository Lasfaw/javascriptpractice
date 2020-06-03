var database = [
{
	username: "lulit",
	password: "supersecret"
},
{
	username: "phil",
	password: "dunphy"
},
{
	username: "homer",
	password: "simpson"
},
];

var newsfeed = [
{
	username: "Booby",
	timeline: "Just wathced a TV show for 5 hours"
},

{
    username: "Sally",
	timeline: "currently learning javascript"
},
{
	username: "anonymous",
	timeline: "I am watching Criminal Minds right now"
}, 
{
	username: "Spencer",
	timeline: "I have only read 5 books this week"
}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
	    }

	}
	return false;
} 

function signIn(username, password){
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}

}
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your passowrd?");

signIn(userNamePrompt, passwordPrompt);

