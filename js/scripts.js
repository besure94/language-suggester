window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
	let ruby = document.getElementById("ruby");
	let csharp = document.getElementById("csharp");
	let javascript = document.getElementById("javascript");

	form.addEventListener("submit", function(event) {
		const qOneYes = document.getElementById("qOneYes").checked;
		const qOneNo = document.getElementById("qOneNo").checked;
		const qTwoYes = document.getElementById("qTwoYes").checked;
		const qTwoNo = document.getElementById("qTwoNo").checked;
		const qThreeYes = document.getElementById("qThreeYes").checked;
		const qThreeNo = document.getElementById("qThreeNo").checked;
		const qFourYes = document.getElementById("qFourYes").checked;
		const qFourNo = document.getElementById("qFourNo").checked;
		const qFiveYes = document.getElementById("qFiveYes").checked;
		const qFiveNo = document.getElementById("qFiveNo").checked;
		// const q1 = document.querySelector("input#q1).value;
		// const q2 = document.querySelector("input[name='q2']:checked").value;
		// const q3 = document.querySelector("input[name='q3']:checked").value;
		// const q4 = document.querySelector("input[name='q4]:checked").value;
		// const q5 = document.querySelector("input[name='q5']:checked").value;

		ruby.setAttribute("class", "hidden");
		csharp.setAttribute("class", "hidden");
		javascript.setAttribute("class", "hidden");
		event.preventDefault();

		// if (q1 && q2 && q3 && q4 && q5) {
		// 	if (q1 === yes && q2 === no && q3 === no && q4 === yes && q5 === no) {
		// 		document.getElementById("ruby").removeAttribute("class");
		// 	} else if (q1 === no && q2 === yes && q3 === no && q4 === yes && q5 === yes) {
		// 		document.getElementById("csharp").removeAttribute("class");
		// 	} else if (q1 === no && q2 === no && q3 === yes && q4 === no && q5 === yes) {
		// 		document.getElementById("javascript").removeAttribute("class");
		// 	}
		// }
		if (qOneYes && qOneNo && qTwoYes && qTwoNo && qThreeYes && qThreeNo && qFourYes && qFourNo && qFiveYes && qFiveNo) {
			if (qOneYes === true && qOneNo === false && qTwoYes === false && qTwoNo === true && qThreeYes === false && qThreeNo === true && qFourYes === false && qFourNo === true && qFiveYes === false && qFiveNo === true) {
				document.getElementById("ruby").removeAttribute("class");
			} else if (qOneYes === false && qOneNo === true && qTwoYes === true && qTwoNo === false && qThreeYes === true && qThreeNo === false && qFourYes === true && qFourNo === false && qFiveYes === true && qFiveNo === false) {
				document.getElementById("csharp").removeAttribute("class");
			} else if (qThreeYes === true && qTwoYes === true) {
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
		// document.querySelector("input[name='q1']:checked").value = null;
		// document.querySelector("input[name='q2']:checked").value = null;
		// document.querySelector("input[name='q3']:checked").value = null;
		// document.querySelector("input[name='q4]:checked").value = null;
		// document.querySelector("input[name='q5']:checked").value = null;
		document.getElementById("qOneYes").checked = null;
		document.getElementById("qOneNo").checked = null;
		document.getElementById("qTwoYes").checked = null;
		document.getElementById("qTwoNo").checked = null;
		document.getElementById("qThreeYes").checked = null;
		document.getElementById("qThreeNo").checked = null;
		document.getElementById("qFourYes").checked = null;
		document.getElementById("qFourNo").checked = null;
		document.getElementById("qFiveYes").checked = null;
		document.getElementById("qFiveNo").checked = null;
	});
});