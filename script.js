
$(function(){
	var $mainMenuItems = $("#mainMenu ul").children("li"),
	totalMainMenuItems = $mainMenuItems.length,
	openedIndex = 2,

	init = function(){
		bindEvents();
		if(validIndex(openedIndex))
			animateItem($mainMenuItems.eq(openedIndex), true, 700);
	},

	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
		var newIndex = $(this).parent().index();
		$item = $mainMenuItems.eq(newIndex);
		checkAndAnimateItem(newIndex);
		});

		$(".button").hover(function(){
			$(this).addClass("hovered");
		},
		function(){
			$(this).removeClass("hovered")
		});
		$(".button").click(function(){
			var newIndex = $(this).index();
				checkAndAnimateItem(newIndex);
		});
	},

	validIndex = function(indexToCheck){
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
	},

	animateItem = function($item, toOpen, speed){
		var $colorImage = $item.find(".color"),
		itemParameter = toOpen ? {width: "420px"}:{width: "140px"},
		colorImageParameter = toOpen ? {left: "0px"}:{left: "140px"};
		$colorImage.animate(colorImageParameter,speed);
		$item.animate(itemParameter,speed);
	},

	checkAndAnimateItem = function(indexToCheckAndAnimate){
		if(openedIndex === indexToCheckAndAnimate){
			animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);				
			openedIndex = -1;
			} else {
				if(validIndex(indexToCheckAndAnimate)){
					animateItem($mainMenuItems.eq(openedIndex), false, 250);
					openedIndex = indexToCheckAndAnimate;
					animateItem($mainMenuItems.eq(openedIndex), true, 250);
				}
			}
	};

	init();

});