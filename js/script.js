// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");

	// declare your variables here.
	var background;
	var frame3Background;


	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");

	// register the stage to handle mouse events.
	stage.enableMouseOver(10);

	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);

	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {

		console.log("tick");

		stage.update();
	}

	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);

	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);

	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "frame1-deezer", src:"images/frame1/deezer.png"},
		{id: "frame1-marks", src:"images/frame1/marks.png"},
		{id: "frame1-reward", src:"images/frame1/reward.png"},
		{id: "frame1-copy", src:"images/frame1/copy.png"},
		{id: "skyLogo", src:"images/frame1/logo.png"},
		{id: "frame1-shadow", src:"images/frame1/shadow.png"},
		{id: "frame2-stamp", src:"images/frame2/stamp.png"},
		{id: "frame2-joinsky", src:"images/frame2/joinsky.png"},
		{id: "frame2-linerental", src:"images/frame2/linerental.png"},
		{id: "frame3-findoutmore", src:"images/frame3/findoutmore.png"},
		{id: "frame3-musicorvoucher", src:"images/frame3/musicorvoucher.png"},
		{id: "frame3-limitedtimeoffer", src:"images/frame3/limitedtimeoffer.png"},
		{id: "frame3-linerental", src:"images/frame3/linerental.png"},
		{id: "frame3-whenyoujoin", src:"images/frame3/whenyoujoin.png"},
		{id: "frame3-sheen", src:"images/frame3/sheen.png"},
		{id: "frame3-background", src:"images/frame3/bg2.png"},
	]);

	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}

	function drawTheBannerBackground() {
		console.log("draw and animate the background.");

		// create bitmap for the background for frame 3
		frame3Background = new createjs.Bitmap( loader.getResult( "frame3-background" ) );

		// set the background bitmap alpha to zero.
		frame3Background.alpha = 0;

		// add background to the display list.
		stage.addChild( frame3Background );

		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );

		// set the background bitmap alpha to zero.
		background.alpha = 0;

		// add background to the display list.
		stage.addChild( background );

		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );

		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}

	// frame 1
	function frame1() {
		console.log("draw and animate frame one.");

		// create new bitmap and retireve image from preloader
		var skyLogo = new createjs.Bitmap( loader.getResult( "skyLogo") );
		// add the logo to the stage/canvas
		stage.addChild(skyLogo);

		// position the logo
		skyLogo.x = 20;
		skyLogo.y = 200;

		// create new bitmap and retrieve the shadow for deezer from preloader
		var shadowDeezer = new createjs.Bitmap( loader.getResult( "frame1-shadow") );
		// add the shadow to the stage
		stage.addChild(shadowDeezer);
		// position shadow on stage/canvas
		shadowDeezer.x = 60;
		shadowDeezer.y = 187;

		// create new image and retrieve shadow for marks and spencer from preloader
		var shadowMarks = new createjs.Bitmap( loader.getResult( "frame1-shadow") );
		// add the shadow  to stage
		stage.addChild(shadowMarks);
		// position shadow on stage/canvas
		shadowMarks.x = 160;
		shadowMarks.y = 187;

		// create new bitmap and retrieve deezer badge from preloader
		var deezerBadge = new createjs.Bitmap( loader.getResult( "frame1-deezer") );
		// add the deezer badge to stage
		stage.addChild(deezerBadge);
		// position deezer badge on stage/canvas
		deezerBadge.x = 60;
		deezerBadge.y = 110;

		// create new image and retrieve marks and specers badge from preloader
		var marksBadge = new createjs.Bitmap( loader.getResult( "frame1-marks") );
		// add the marks and specer badge to stage/canvas
		stage.addChild(marksBadge);
		// position marks and spencer badge on stage/canvas
		marksBadge.x = 160;
		marksBadge.y = 110;

		// create new bitmap and retrieve reward text from preloader
		var frame1Reward = new createjs.Bitmap( loader.getResult( "frame1-reward") );
		// add the reward text to stage/canvas
		stage.addChild(frame1Reward);
		// position reward text on stage/canvas
		frame1Reward.x = 50;
		frame1Reward.y = 30;

		// create new bitmap and retrieve copy text from preloader
		var frame1Copy = new createjs.Bitmap( loader.getResult( "frame1-copy") );
		// add the copy text to stage/canvas
		stage.addChild(frame1Copy);
		// position copy text on stage/canvas
		frame1Copy.x = 50;
		frame1Copy.y = 55;

		// set the transparency for reward and copy text as 0 when first loaded
		frame1Reward.alpha = 0;
		frame1Copy.alpha = 0;

		// fade in the reward text
		createjs.Tween.get( frame1Reward ).to( {alpha:1}, 1000)

		// function to run to fade in the copy text
		function fadeInFrame1Copy() {
			// fade in copy
			createjs.Tween.get( frame1Copy ).to( {alpha:1}, 1000);
		}

		// delay fade in for copy text for 1000ms (1s)
		setTimeout(fadeInFrame1Copy, 1000);

		// function to fade out frame 1 elements
		function fadeOutFrame1() {
			createjs.Tween.get( deezerBadge ).to( {alpha:0}, 1000);
			createjs.Tween.get( marksBadge ).to( {alpha:0}, 1000);
			createjs.Tween.get( frame1Reward ).to( {alpha:0}, 1000);
			createjs.Tween.get( frame1Copy ).to( {alpha:0}, 1000);
			createjs.Tween.get( shadowDeezer ).to( {alpha:0},1000);
			createjs.Tween.get( shadowMarks ).to( {alpha:0}, 1000);
		}

		// run function to fade out frame 1 elements after 3000ms (3s);
		setTimeout(fadeOutFrame1, 3000);

		// after 4000ms (4s), run frame 2 function
		setTimeout(frame2, 4000);
	}

	// frame 2
	function frame2() {
		console.log("draw and animate frame two.");

		// create new bitmap and load the join sky text from preloader
		var frame2JoinSky = new createjs.Bitmap( loader.getResult( "frame2-joinsky"));
		// add join sky text to stage.canvas
		stage.addChild(frame2JoinSky);
		// position the join sky text on stage/canvas
		frame2JoinSky.x = 40;
		frame2JoinSky.y = 30;

		// create new bitmap and retrieve sky stamp from preloader
		var frame2Stamp = new createjs.Bitmap( loader.getResult( "frame2-stamp"));
		// add image to stage
		stage.addChild(frame2Stamp);
		// position on sky stamp on stage/canvas
		frame2Stamp.x = 60;
		frame2Stamp.y = -200;

		// create new bitmap and retrieve line rental info from preloader
		var frame2LineRental = new createjs.Bitmap( loader.getResult( "frame2-linerental"));
		// add line rental info to stage/canvas
		stage.addChild(frame2LineRental);
		// position line rental info on the stage/canvas
		frame2LineRental.x = 130;
		frame2LineRental.y = 215;

		// set the transpareny as 0 on load of frame 2
		frame2JoinSky.alpha = 0;
		frame2LineRental.alpha = 0;

		// fade in the join sky text on
		createjs.Tween.get( frame2JoinSky ).to( {alpha:1}, 1000);

		// function to fade in the line rental and stamp images
		function frame2FadeInLineRentalStamp() {

			// move in the sky stamp using the bounce out easing
			createjs.Tween.get( frame2Stamp ).to( {x:65,y:60}, 1000, createjs.Ease.bounceOut);

			// fade in the line rental info
			createjs.Tween.get( frame2LineRental ).to( {alpha:1}, 1000);
		}

		// delay the function by 1000ms (1s)
		setTimeout(frame2FadeInLineRentalStamp, 1000);

		// function to fade out frame 2 elements
		function fadeOutFrame2() {

			// fade out the respective elements
			createjs.Tween.get( frame2JoinSky ).to( {alpha:0}, 1000);
			createjs.Tween.get( frame2Stamp ).to( {alpha:0},1000);
			createjs.Tween.get( frame2LineRental ).to( {alpha:0}, 1000);
			createjs.Tween.get( background ).to( {alpha:0}, 1000);
			createjs.Tween.get( frame3Background ).to( {alpha:1}, 1000);
		}

		// delay function run by 3000ms (3s) to fade out elements
		setTimeout(fadeOutFrame2, 3000);

		// after 4000ms (4s), run the frame 3 function
		setTimeout(frame3, 4000);
	}

	// frame 3
	function frame3() {
		console.log("draw and animate frame three.");

		// create new bitmap for the music or voucher text and retrieve from preloader
		var frame3MusicOrVoucher = new createjs.Bitmap( loader.getResult( "frame3-musicorvoucher"));
		// add music or voucher text to stage/canvas
		stage.addChild(frame3MusicOrVoucher);
		// position the music or voucher text on stage/canvas
		frame3MusicOrVoucher.x = 10;
		frame3MusicOrVoucher.y = 30;

		// create new bitmap for the when you join text and retrieve from preloader
		var frame3WhenYouJoin = new createjs.Bitmap( loader.getResult( "frame3-whenyoujoin"));
		// add the when you join text to stage/canvas
		stage.addChild(frame3WhenYouJoin);
		// position the when you join text
		frame3WhenYouJoin.x = 40;
		frame3WhenYouJoin.y = 85;

		// create new image for the limited time offer text and retrieve from preloader
		var frame3LimitedTimeOffer = new createjs.Bitmap( loader.getResult( "frame3-limitedtimeoffer"));
		// add image to stage/canvas
		stage.addChild(frame3LimitedTimeOffer);
		// position the limited time offer text
		frame3LimitedTimeOffer.x = 75;
		frame3LimitedTimeOffer.y = 140;

		// create new image for the line rental info and retrieve from preloader
		var frame3LineRental = new createjs.Bitmap( loader.getResult( "frame3-linerental"));
		// add line rental info to stage/canvas
		stage.addChild(frame3LineRental);
		// position the line rental info
		frame3LineRental.x = 85;
		frame3LineRental.y = 180;

		// create new bitmap for the find out more button and retrieve from preloader
		var frame3FindOutMore = new createjs.Bitmap( loader.getResult( "frame3-findoutmore"));
		// add the fine out more button to stage/canvas
		stage.addChild(frame3FindOutMore);
		// position the button
		frame3FindOutMore.x = 145;
		frame3FindOutMore.y = 195;

		// create new bitmap for the limited time only text
		var frame3Sheen = new createjs.Bitmap( loader.getResult( "frame3-sheen"));
		// add image to canvas
		stage.addChild(frame3Sheen);
		// position the musicorvoucher
		frame3Sheen.x = 75;
		frame3Sheen.y = 195;

		// transparency is set to 0 when frame is loaded
		frame3MusicOrVoucher.alpha = 0;
		frame3WhenYouJoin.alpha = 0;
		frame3LineRental.alpha = 0;
		frame3LimitedTimeOffer.alpha = 0;
		frame3Sheen.alpha = 0.6;

		// fade in the music or voucher text on frame load
		createjs.Tween.get( frame3MusicOrVoucher ).to( {alpha: 1}, 1000)

		// function to fade in blue text
		function fadeInWhenYouJoin() {

			// fade in the when you join text
			createjs.Tween.get( frame3WhenYouJoin ).to( {alpha: 1}, 1000)
		}

		// delay fade in by 1000ms (1s)
		setTimeout(fadeInWhenYouJoin, 1000)

		// function to fade in limited time offer text
		function fadeInLimitedTimeOffer() {

			// fade in the limited time offer text
			createjs.Tween.get( frame3LimitedTimeOffer ).to( {alpha: 1}, 1000)
		}

		// delay function to fade in limited time offer text by 2500 ms (2.5s)
		setTimeout(fadeInLimitedTimeOffer, 2500)

		// function to fade in line rental info
		function fadeInLineRental() {

			// fade in the line rental info
			createjs.Tween.get( frame3LineRental ).to( {alpha: 1}, 1000)
		}

		// delay fade in of line rental info by 4000ms (4s)
		setTimeout(fadeInLineRental, 4000)

				// function to move sheen across button
				function sheenAcrossButton() {

					// function to move sheen across button
					createjs.Tween.get( frame3Sheen ).to( {x: 300 }, 1500, createjs.Ease.quartIn)
				}

				// delay function run for the sheen across the button by 5000ms (5s)
				setTimeout(sheenAcrossButton, 5000);
	}

	// remove event listener after 15000ms
	setTimeout(function() {
		createjs.Ticker.removeEventListener("tick", handleTick)
	}, 15000)

};
