/** @format */
var tl = gsap.timeline();

gsap.set(".a", {
	opacity: 0,
	y: 15,
});

tl.from("#main #left", {
	width: 0,
	duration: 1.5,
	padding: 0,
	ease: Expo.easeInOut,
})
	.from("#main #right", {
		width: 0,
		duration: 1,
		ease: Expo.easeInOut,
	})
	.to(".a", {
		opacity: 1,
		y: 0,
		delay: -1.5,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOut,
	})
	.from("#right > img", {
		scale: 2,
		// width: 0,
		y: 25,
		opacity: 0,
		rotate: 360,
		duration: 2,
		ease: Expo.easeInOut,
	});
