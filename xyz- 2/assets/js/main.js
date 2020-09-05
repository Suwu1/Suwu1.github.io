$(document).ready(function(){

var word1 = [
	"Hate",
	"Anger",
	"Despair"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "Still dare",
  "Still dare",
  "Dare"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
    "Hope",
  "Comfort",
  "Believe"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});