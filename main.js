// const tabItems = document.querySelectorAll('.tab-item');
// const tabContentItems = document.querySelectorAll('.tab-content-item');

// // Select tab content item
// function selectItem(e) {
// 	// Remove all show and border classes
// 	removeBorder();
// 	removeShow();
// 	// Add border to current tab item
// 	this.classList.add('tab-border');
// 	// Grab content item from DOM
// 	const tabContentItem = document.querySelector(`#${this.id}-content`);
// 	// Add show class
// 	tabContentItem.classList.add('show');
// }

// // Remove bottom borders from all tab items
// function removeBorder() {
// 	tabItems.forEach(item => {
// 		item.classList.remove('tab-border');
// 	});
// }

// // Remove show class from all content items
// function removeShow() {
// 	tabContentItems.forEach(item => {
// 		item.classList.remove('show');
// 	});
// }

// // Listen for tab item click
// tabItems.forEach(item => {
// 	item.addEventListener('click', selectItem);
// });


// const tabItems = document.querySelectorAll('.tab');
// const tabContentItems = document.querySelectorAll('.tab-content-item');

// // Select tab content item
// function selectItem(e) {
// 	// Remove all show classes
// 	removeShow();
// 	// Grab content item from DOM
// 	const tabContentItem = document.querySelector(`#${this.id}-content`);
// 	// Add show class
// 	tabContentItem.classList.add('show');
// }

// // Remove show class from all content items
// function removeShow() {
// 	tabContentItems.forEach(item => {
// 		item.classList.remove('show');
// 	});
// }

// // Listen for tab item click
// tabItems.forEach(item => {
// 	item.addEventListener('click', selectItem);
// });

let tabHeader = document.getElementsByClassName("tab")[0];
let tabBody = document.getElementsByClassName("tab-content-item")[0];


let tabsPanel = tabHeader.getElementByClassname("qst");

for(let i=0; i<tabsPanel.length;i++){
  tabsPanel[i].addEventListener("click", function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPanel[i].classList.add("active");
  })
}


