/*~~~~~~~~~~~~ ChefBot by Clayton Lett~~~~~~~~~~~~~ */

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ DATE AND TIME LOGIC ~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/
var now = new Date(Date.now());

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~z Question/Response Logic~~~~~~~~~~~~~~~ */
/*////////////////////////////////////////////////////*/

function talk(){

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
 "What time is it?" : now
}

/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ FALLBACK RESPONSES ~~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/
var fallBackResponse = ["i do not understand ask another question"];
if (question == undefined){
  document.getElementById("chat-area").innerHTML += fallBackResponse +  " " + "<br>";

}



/*////////////////////////////////////////////////////*/
/*~~~~~~~~~~~~~~~~ DATE AND TIME LOGIC ~~~~~~~~~~~~~~~*/
/*////////////////////////////////////////////////////*/
