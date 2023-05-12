window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
	let ruby = document.getElementById("ruby");
	let csharp = document.getElementById("csharp");
	let javascript = document.getElementById("javascript");

	form.addEventListener("submit", function(event) {
		const yes = "yes";
		const no = "no";
		const q1 = document.getElementById("q1").value.toLowerCase();
		const q2 = document.getElementById("q2").value.toLowerCase();
		const q3 = document.getElementById("q3").value.toLowerCase();
		const q4 = document.getElementById("q4").value.toLowerCase();
		const q5 = document.getElementById("q5").value.toLowerCase();

		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		event.preventDefault();

		if (q1 && q2 && q3 && q4 && q5) {
			if (q1 === yes && q2 === yes && q3 === no || q4 === no && q5 === no) {
				document.getElementById("ruby").removeAttribute("class");
			} else if (q1 === no && q2 === yes && q3 === no || q4 === yes && q5 === yes) {
				document.getElementById("csharp").removeAttribute("class");
			} else if (q1 === no && q2 === yes && q3 === yes || q4 === no && q5 === yes) {
				document.getElementById("javascript").removeAttribute("class");
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
		document.getElementById("q1").value = null;
		document.getElementById("q2").value = null;
		document.getElementById("q3").value = null;
		document.getElementById("q4").value = null;
		document.getElementById("q5").value = null;
	});
});