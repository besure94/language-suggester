window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
	let ruby = document.getElementById("ruby");
	let csharp = document.getElementById("csharp");
	let javascript = document.getElementById("javascript");

	form.addEventListener("submit", function(event) {
		// const qOneYes = document.getElementById("qOneYes").value;
		// const qOneNo = document.getElementById("qOneNo").value;
		// const qTwoYes = document.getElementById("qTwoYes").value;
		// const qTwoNo = document.getElementById("qTwoNo").value;
		// const qThreeYes = document.getElementById("qThreeYes").value;
		// const qThreeNo = document.getElementById("qThreeNo").value;
		// const qFourYes = document.getElementById("qFourYes").value;
		// const qFourNo = document.getElementById("qFourNo").value;
		// const qFiveYes = document.getElementById("qFiveYes").value;
		// const qFiveNo = document.getElementById("qFiveNo").value;
		const q1 = document.querySelector("input[name='q1']:checked").value;
		const q2 = document.querySelector("input[name='q2']:checked").value;
		const q3 = document.querySelector("input[name='q3']:checked").value;
		const q4 = document.querySelector("input[name='q4]:checked").value;
		const q5 = document.querySelector("input[name='q5']:checked").value;

		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		event.preventDefault();

		// if (qOneYes && qOneNo && qTwoYes && qTwoNo && qThreeYes && qThreeNo && qFourYes && qFourNo && qFiveYes && qFiveNo) {
		// 	if (qOneYes === yes && qOneFour === yes) {
		// 		document.getElementById("ruby").removeAttribute("class");
		// 	} else if (qTwoYes === yes && qFiveYes === yes) {
		// 		document.getElementById("csharp").removeAttribute("class");
		// 	} else if (qThreeYes === yes && qTwoYes === yes) {
		// 		document.getElementById("javascript").removeAttribute("class");
		// 	}
		// }
	});

	form.addEventListener("submit", function(){
		resetBtn.removeAttribute("class");
	});

	resetBtn.addEventListener("click", function(){
		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		const q1 = document.querySelector("input[name='q1']:checked").value = null;
		const q2 = document.querySelector("input[name='q2']:checked").value = null;
		const q3 = document.querySelector("input[name='q3']:checked").value = null;
		const q4 = document.querySelector("input[name='q4]:checked").value = null;
		const q5 = document.querySelector("input[name='q5']:checked").value = null;
		// document.getElementById("qOneYes").value = null;
		// document.getElementById("qOneNo").value = null;
		// document.getElementById("qTwoYes").value = null;
		// document.getElementById("qTwoNo").value = null;
		// document.getElementById("qThreeYes").value = null;
		// document.getElementById("qThreeNo").value = null;
		// document.getElementById("qFourYes").value = null;
		// document.getElementById("qFourNo").value = null;
		// document.getElementById("qFiveYes").value = null;
		// document.getElementById("qFiveNo").value = null;
	});
});