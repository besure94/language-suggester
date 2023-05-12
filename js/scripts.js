window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
	let ruby = document.getElementById("ruby");
	let csharp = document.getElementById("csharp");
	let javascript = document.getElementById("javascript");
	let python = document.getElementById("python");

	form.addEventListener("submit", function(event) {
		const yes = "yes";
		const no = "no";
		const questOne = document.getElementById("questOne").value.toLowerCase();
		const questTwo = document.getElementById("questTwo").value.toLowerCase();
		const questThree = document.getElementById("questThree").value.toLowerCase();
		const questFour = document.getElementById("questFour").value.toLowerCase();
		const questFive = document.getElementById("questFive").value.toLowerCase();

		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		python.setAttribute("class", "hidden");
		event.preventDefault();

		if (questOne && questTwo && questThree && questFour && questFive) {
			if (questOne === yes && questTwo === yes && questThree === no || questFour === no && questFive === no) {
				document.getElementById("ruby").removeAttribute("class");
			} else if (questOne === no && questTwo === yes && questThree === no || questFour === yes && questFive === yes) {
				document.getElementById("csharp").removeAttribute("class");
			} else if (questOne === no && questTwo === yes && questThree === yes || questFour === no && questFive === yes) {
				document.getElementById("javascript").removeAttribute("class");
			} else {
				document.getElementById("python").removeAttribute("class");
			}
		}

	});

	form.addEventListener("submit", function(){
		resetBtn.removeAttribute("class");
	});

	resetBtn.addEventListener("click", function(){
		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		python.setAttribute("class", "hidden");
		document.getElementById("questOne").value = null;
		document.getElementById("questTwo").value = null;
		document.getElementById("questThree").value = null;
		document.getElementById("questFour").value = null;
		document.getElementById("questFive").value = null;
	});
});