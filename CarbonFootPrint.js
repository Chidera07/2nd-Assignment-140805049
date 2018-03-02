// function nextStuff() {
// 	document.getElementById("second").style.visibility = "visible";
// 	// document.writeln(typeof "string");
// }
// function validate(){
// 	var choice = document.getElementById("food1");
// 	if(choice.selectedIndex == 0){
// 		alert("Select one answer please :)");
// 	}
// 	else{
// 		var selectedText = choice.options[choice.selectedIndex].text;
// 		alert(selectedText);
// 	}
// }
function validate(){
	var choice = document.getElementById("food0");
	if(choice.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice.selectedIndex == 1){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "block";
		document.getElementById("ques3").style.display = "none";
		document.getElementById("p1").style.display = "block";
		document.getElementById("food1").style.display = "block";
		document.getElementById("p2").style.display = "none";
		document.getElementById("food2").style.display = "none";
		document.getElementById("p3").style.display = "none";
		document.getElementById("food3").style.display = "none";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";
	}
	else if(choice.selectedIndex == 2){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "block";
		document.getElementById("ques3").style.display = "none";
		document.getElementById("p1").style.display = "none";
		document.getElementById("food1").style.display = "none";
		document.getElementById("p2").style.display = "block";
		document.getElementById("food2").style.display = "block";
		document.getElementById("p3").style.display = "none";
		document.getElementById("food3").style.display = "none";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";
	}
	else if(choice.selectedIndex == 3){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "block";
		document.getElementById("ques3").style.display = "none";
		document.getElementById("p1").style.display = "none";
		document.getElementById("food1").style.display = "none";
		document.getElementById("p2").style.display = "none";
		document.getElementById("food2").style.display = "none";
		document.getElementById("p3").style.display = "block";
		document.getElementById("food3").style.display = "block";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";
	}
}

function validate2(){
	var choice2 = document.getElementById("food1");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "block";
		document.getElementById("food4").style.display = "block";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "block";
		document.getElementById("food5").style.display = "block";
		document.getElementById("button1").style.display = "none";
	}
}

function validate3(){
	var choice2 = document.getElementById("food2");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "block";
		document.getElementById("food4").style.display = "block";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "block";
		document.getElementById("food5").style.display = "block";

	}
}

function validate4(){
	var choice2 = document.getElementById("food3");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "block";
		document.getElementById("food4").style.display = "block";
		document.getElementById("p5").style.display = "none";
		document.getElementById("food5").style.display = "none";
		document.getElementById("button1").style.display = "none";
	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1").style.display = "none";
		document.getElementById("ques2").style.display = "none";
		document.getElementById("ques3").style.display = "block";
		document.getElementById("p4").style.display = "none";
		document.getElementById("food4").style.display = "none";
		document.getElementById("p5").style.display = "block";
		document.getElementById("food5").style.display = "block";
		document.getElementById("button1").style.display = "none";
	}
}

function validate5(){
	var choice3 = document.getElementById("food4");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1").style.display = "block";
	}
}

function validate6(){
	var choice3 = document.getElementById("food5");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1").style.display = "block";
	}
}

function change(){
	document.getElementById("head1").style.display = "none";
	document.getElementById("head2").style.display = "block";
	document.getElementById("div1").style.display = "none";
	document.getElementById("div2").style.display = "block";
}

function home_validate(){
	var choice = document.getElementById("home0");
	if(choice.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice.selectedIndex == 1){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "block";
		document.getElementById("ques3.1").style.display = "none";
		document.getElementById("p1.1").style.display = "block";
		document.getElementById("home1").style.display = "block";
		document.getElementById("p2.1").style.display = "none";
		document.getElementById("home2").style.display = "none";
		document.getElementById("p3.1").style.display = "none";
		document.getElementById("home3").style.display = "none";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";
	}
	else if(choice.selectedIndex == 2){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "block";
		document.getElementById("ques3.1").style.display = "none";
		document.getElementById("p1.1").style.display = "none";
		document.getElementById("home1").style.display = "none";
		document.getElementById("p2.1").style.display = "block";
		document.getElementById("home2").style.display = "block";
		document.getElementById("p3.1").style.display = "none";
		document.getElementById("home3").style.display = "none";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";
	}
	else if(choice.selectedIndex == 3){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "block";
		document.getElementById("ques3.1").style.display = "none";
		document.getElementById("p1.1").style.display = "none";
		document.getElementById("home1").style.display = "none";
		document.getElementById("p2.1").style.display = "none";
		document.getElementById("home2").style.display = "none";
		document.getElementById("p3.1").style.display = "block";
		document.getElementById("home3").style.display = "block";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";
	}
}

function home_validate2(){
	var choice2 = document.getElementById("home1");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "block";
		document.getElementById("home4").style.display = "block";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "block";
		document.getElementById("home5").style.display = "block";
		document.getElementById("button1.1").style.display = "none";
	}
}

function home_validate3(){
	var choice2 = document.getElementById("home2");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "block";
		document.getElementById("home4").style.display = "block";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "block";
		document.getElementById("home5").style.display = "block";
		document.getElementById("button1.1").style.display = "none";
	}
}

function home_validate4(){
	var choice2 = document.getElementById("home3");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "block";
		document.getElementById("home4").style.display = "block";
		document.getElementById("p5.1").style.display = "none";
		document.getElementById("home5").style.display = "none";
		document.getElementById("button1.1").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.1").style.display = "none";
		document.getElementById("ques2.1").style.display = "none";
		document.getElementById("ques3.1").style.display = "block";
		document.getElementById("p4.1").style.display = "none";
		document.getElementById("home4").style.display = "none";
		document.getElementById("p5.1").style.display = "block";
		document.getElementById("home5").style.display = "block";
		document.getElementById("button1.1").style.display = "none";
	}
}

function home_validate5(){
	var choice3 = document.getElementById("home4");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.1").style.display = "block";
	}
}

function home_validate6(){
	var choice3 = document.getElementById("home5");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.1").style.display = "block";
	}
}

function second_change(){
	document.getElementById("head1").style.display = "none";
	document.getElementById("head2").style.display = "none";
	document.getElementById("head3").style.display = "block";
	document.getElementById("div1").style.display = "none";
	document.getElementById("div2").style.display = "none";
	document.getElementById("div3").style.display = "block";
}

function travel_validate(){
	var choice = document.getElementById("travel0");
	if(choice.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice.selectedIndex == 1){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "block";
		document.getElementById("ques3.2").style.display = "none";
		document.getElementById("p1.2").style.display = "block";
		document.getElementById("travel1").style.display = "block";
		document.getElementById("p2.2").style.display = "none";
		document.getElementById("travel2").style.display = "none";
		document.getElementById("p3.2").style.display = "none";
		document.getElementById("travel3").style.display = "none";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";
	}
	else if(choice.selectedIndex == 2){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "block";
		document.getElementById("ques3.2").style.display = "none";
		document.getElementById("p1.2").style.display = "none";
		document.getElementById("travel1").style.display = "none";
		document.getElementById("p2.2").style.display = "block";
		document.getElementById("travel2").style.display = "block";
		document.getElementById("p3.2").style.display = "none";
		document.getElementById("travel3").style.display = "none";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";
	}
	else if(choice.selectedIndex == 3){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "block";
		document.getElementById("ques3.2").style.display = "none";
		document.getElementById("p1.2").style.display = "none";
		document.getElementById("travel1").style.display = "none";
		document.getElementById("p2.2").style.display = "none";
		document.getElementById("travel2").style.display = "none";
		document.getElementById("p3.2").style.display = "block";
		document.getElementById("travel3").style.display = "block";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";
	}
}

function travel_validate2(){
	var choice2 = document.getElementById("travel1");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "block";
		document.getElementById("travel4").style.display = "block";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "block";
		document.getElementById("travel5").style.display = "block";
		document.getElementById("button1.2").style.display = "none";
	}
}

function travel_validate3(){
	var choice2 = document.getElementById("travel2");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "block";
		document.getElementById("travel4").style.display = "block";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "block";
		document.getElementById("travel5").style.display = "block";
		document.getElementById("button1.2").style.display = "none";
	}
}

function travel_validate4(){
	var choice2 = document.getElementById("travel3");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "block";
		document.getElementById("travel4").style.display = "block";
		document.getElementById("p5.2").style.display = "none";
		document.getElementById("travel5").style.display = "none";
		document.getElementById("button1.2").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.2").style.display = "none";
		document.getElementById("ques2.2").style.display = "none";
		document.getElementById("ques3.2").style.display = "block";
		document.getElementById("p4.2").style.display = "none";
		document.getElementById("travel4").style.display = "none";
		document.getElementById("p5.2").style.display = "block";
		document.getElementById("travel5").style.display = "block";
		document.getElementById("button1.2").style.display = "none";
	}
}

function travel_validate5(){
	var choice3 = document.getElementById("travel4");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.2").style.display = "block";
	}
}

function travel_validate6(){
	var choice3 = document.getElementById("travel5");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.2").style.display = "block";
	}
}

function third_change(){
	document.getElementById("head1").style.display = "none";
	document.getElementById("head2").style.display = "none";
	document.getElementById("head3").style.display = "none";
	document.getElementById("head4").style.display = "block";
	document.getElementById("div1").style.display = "none";
	document.getElementById("div2").style.display = "none";
	document.getElementById("div3").style.display = "none";
	document.getElementById("div4").style.display = "block";
}

function stuff_validate(){
	var choice = document.getElementById("stuff0");
	if(choice.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice.selectedIndex == 1){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "block";
		document.getElementById("ques3.3").style.display = "none";
		document.getElementById("p1.3").style.display = "block";
		document.getElementById("stuff1").style.display = "block";
		document.getElementById("p2.3").style.display = "none";
		document.getElementById("stuff2").style.display = "none";
		document.getElementById("p3.3").style.display = "none";
		document.getElementById("stuff3").style.display = "none";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";
	}
	else if(choice.selectedIndex == 2){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "block";
		document.getElementById("ques3.3").style.display = "none";
		document.getElementById("p1.3").style.display = "none";
		document.getElementById("stuff1").style.display = "none";
		document.getElementById("p2.3").style.display = "block";
		document.getElementById("stuff2").style.display = "block";
		document.getElementById("p3.3").style.display = "none";
		document.getElementById("stuff3").style.display = "none";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";
	}
	else if(choice.selectedIndex == 3){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "block";
		document.getElementById("ques3.3").style.display = "none";
		document.getElementById("p1.3").style.display = "none";
		document.getElementById("stuff1").style.display = "none";
		document.getElementById("p2.3").style.display = "none";
		document.getElementById("stuff2").style.display = "none";
		document.getElementById("p3.3").style.display = "block";
		document.getElementById("stuff3").style.display = "block";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";
	}
}

function stuff_validate2(){
	var choice2 = document.getElementById("stuff1");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "block";
		document.getElementById("stuff4").style.display = "block";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "block";
		document.getElementById("stuff5").style.display = "block";
		document.getElementById("button1.3").style.display = "none";
	}
}

function stuff_validate3(){
	var choice2 = document.getElementById("stuff2");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "block";
		document.getElementById("stuff4").style.display = "block";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "block";
		document.getElementById("stuff5").style.display = "block";
		document.getElementById("button1.3").style.display = "none";
	}
}

function stuff_validate4(){
	var choice2 = document.getElementById("stuff3");
	if(choice2.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else if(choice2.selectedIndex == 1){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "block";
		document.getElementById("stuff4").style.display = "block";
		document.getElementById("p5.3").style.display = "none";
		document.getElementById("stuff5").style.display = "none";
		document.getElementById("button1.3").style.display = "none";

	}
	else if(choice2.selectedIndex == 2){
		document.getElementById("ques1.3").style.display = "none";
		document.getElementById("ques2.3").style.display = "none";
		document.getElementById("ques3.3").style.display = "block";
		document.getElementById("p4.3").style.display = "none";
		document.getElementById("stuff4").style.display = "none";
		document.getElementById("p5.3").style.display = "block";
		document.getElementById("stuff5").style.display = "block";
		document.getElementById("button1.3").style.display = "none";
	}
}

function stuff_validate5(){
	var choice3 = document.getElementById("stuff4");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.3").style.display = "block";
	}
}

function stuff_validate6(){
	var choice3 = document.getElementById("stuff5");
	if(choice3.selectedIndex == 0){
		alert("Select one answer please :)");
	}
	else{
		document.getElementById("button1.3").style.display = "block";
	}
}

function get_result(){
	var num = Math.floor(Math.random() * 1000);

	if(num >= 100){
		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML = "Your carbon footprint is "+num+"%. You've got work to do.";
		document.getElementById("info").style.display = "block";
	}
	else if(num < 100){
		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML =  "Your carbon footprint is "+num+"%. You're awesome.";
		document.getElementById("info").style.display = "block";
	}
}

function generate_info(){
	alert("Please visit our site footprint.wwf.org.uk to find out how you can reduce your footprint. Thank you :)")
}