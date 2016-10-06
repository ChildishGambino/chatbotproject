/*~~~~~~~~~~~~ ChefBot by Clayton Lett~~~~~~~~~~~~~ */

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~z Question/Response Logic~~~~~~~~~~~~~~~ */
/*////////////////////////////////////////////////////*/

function askQuestion(){

 var question = document.getElementById("input").value;
 var giveresponse = responses[question]

document.getElementById("chat-area").innerHTML += giveresponse +  " " + "<br>";
}

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ QUESTIONS/RESPONSES ~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/

var responses = {
 "What's your name?" : "my name a chef",
 "Are you a boy?" : "Yes I am",
 "What is your favorite color?" : "Green",
 "How are you?" : "Im pretty good",
 "Are you old?" : "No",
 "Are you young?" : "Yes",
 "How old are you?" : "I am 23",
 "What color is your hair?" : "black",
 "What color are your eyes?" : "brown",
 "Are you tall?" : "Yes",
}

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ FALLBACK RESPONSES ~~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/




/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ DATE AND TIME LOGIC ~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/
