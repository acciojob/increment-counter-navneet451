//your JS code here. If required.
let counterValue = 0;
let element=document.getElementById("counter");
let button=document.getElementById("incrementBtn");

button.addEventListener("click", function() {
	alert("Current Counter Value: " + counterValue);

	counterValue++;
	element.textContent=counterValue;
});

