const imageUrls = ["../image/elephant4.png", "../image/elephant2.png", "../image/elephant3.png"];
let index = 0;
const prevBtn = document.querySelector("button.prev");
const nextBtn = document.querySelector("button.next");
const imageDiv = document.querySelector("div.image");
let imgCenter = document.querySelector("img.center");
let imgLeft = document.querySelector("img.left");
let imgRight = document.querySelector("img.right");

function getImageUrl(index) {
	if (index < 0) {
		index += imageUrls.length;
	}
	return imageUrls[index % imageUrls.length];
}

function getImageEl(className, index) {
	const imageEl = document.createElement("img");
	imageEl.classList.add(className);
	imageEl.width = 600;
	imageEl.height = 600;
	imageEl.src = getImageUrl(index);
	return imageEl;
}

imgCenter.src = getImageUrl(index);
imgLeft.src = getImageUrl(index - 1);
imgRight.src = getImageUrl(index + 1);


nextBtn.addEventListener("click", () => {
	imgCenter.classList.remove("center");
	imgCenter.classList.add("left");
	imgRight.classList.remove("right");
	imgRight.classList.add("center");

	imgLeft.remove();
	imgLeft = imgCenter;
	imgCenter = imgRight;
	index = (index + 1) % imageUrls.length;
	imgRight = getImageEl("right", index + 1);
	imageDiv.appendChild(imgRight);
	console.log(imgLeft, imgCenter, imgRight);

});

prevBtn.addEventListener("click", () => {
	imgCenter.classList.remove("center");
	imgCenter.classList.add("right");
	imgLeft.classList.remove("left");
	imgLeft.classList.add("center");

	imgRight.remove();
	imgRight = imgCenter;
	imgCenter = imgLeft;
	index = (index + imageUrls.length - 1) % imageUrls.length;
	imgLeft = getImageEl("left", index - 1);
	imageDiv.appendChild(imgLeft);
	console.log(imgLeft, imgCenter, imgRight);
})
