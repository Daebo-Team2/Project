/* photo */

const otimglist = ['../image/슬라이드사진1.jpg','../image/슬라이드사진2.jpg','../image/슬라이드사진3.jpg'];
let otimg = document.querySelector("#otterimg");
let idx = 0;

otimg.src = otimglist[idx];
document.querySelector("button.prevButton").addEventListener("click", () => {
	idx = ( idx + otimglist.length -1 ) % otimglist.length;
	otimg.src = otimglist[idx];
			})
			
document.querySelector("button.nextButton").addEventListener("click", () => {
	idx = ( idx + 1 ) % otimglist.length;
	otimg.src = otimglist[idx];
			})
			
document.querySelector("button.mainbtn").addEventListener("click", () => {
	window.location.href = "main.html"
		})
		
document.querySelector("button.infobtn").addEventListener("click", () => {
	window.location.href = "./Eurasian_otter.html"
		})