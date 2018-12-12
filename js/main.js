document.getElementById("sch").onclick = function() {
	displaySearch()
};
var a = 0;

function show() {
	alert("writen by 马斌恒 \n 无模板纯手打 \n logo图标运用Font Awesome");
}

function displaySearch() {
	var div = document.getElementById("div");
	if(a % 2 == 0) {
		div.style.setProperty('display', 'block');
		a++;
	} else {
		div.style.setProperty('display', 'none');
		a++;
	}
}

$(function() {
	$("#slider").easySlider({
		slideSpeed: 500,
		paginationSpacing: "15px",
		paginationDiameter: "12px",
		paginationPositionFromBottom: "20px",
		slidesClass: ".slides",
		controlsClass: ".controls",
		paginationClass: ".pagination"
	});
});

baguetteBox.run('.baguetteBoxOne', {
	animation: 'fadeIn',
});