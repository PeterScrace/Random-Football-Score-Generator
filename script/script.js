var fTeam = ["Manchester City", "Liverpool", "Chelsea", "Tottenham", "Arsenal", "Watford", "Bournemouth", 
"Leicester City", "Wolves", "Manchester Utd", "Everton", "Burnley", "Crystal Palace", "West Ham United", "Brighton", 
"Southampton", "Fulham", "Newcastle Utd", "Cardiff City", "Huddersfield Town"];
var teams = document.querySelectorAll(".teams");
var scores = document.querySelectorAll(".scores");

var resetButton = document.querySelector("#reset");

function pickTeam(){ 
	for(var i = fTeam.length -1; i >=0; i--){
		var randomTeam = fTeam.splice(Math.floor(Math.random() * fTeam.length) ,1);
		return randomTeam;	
	}	
}


function pickScore(){
	var randomScore = Math.floor(Math.random() * 5);
	return randomScore;
}


function reset(){
	for(var i = fTeam.length -1; i>=0; i--){
		if(fTeam[i]){
			teams[i].textContent = pickTeam(); 
			scores[i].textContent = pickScore();
		} else {
			teams[i].textContent = "N/A"
			scores[i].textContent = "N/A"
		}
	}
	var newArray = fTeam.push("Manchester City", "Liverpool", "Chelsea", "Tottenham", "Arsenal", "Watford", "Bournemouth", 
				"Leicester City", "Wolves", "Manchester Utd", "Everton", "Burnley", "Crystal Palace", "West Ham United", "Brighton", 
				"Southampton", "Fulham", "Newcastle Utd", "Cardiff City", "Huddersfield Town");			
}	


resetButton.addEventListener("click", function(){
	reset();
});