// JavaScript Document
function show(obj){
	var img=document.getElementById("main");
	img.src = obj.src;
	
	
	var images = document.querySelectorAll(".showimg");
	for(i=0; i < images.length;i++)
		images[i].style.border = "";
	
	obj.style.border = "2px solid #494949";
}