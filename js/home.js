let audience = document.querySelector('button');

audience.addEventListener('click', function() {
  let duration = 0.3, 
      delay = 0.08;
  TweenMax.to(audience, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to(audience, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams:[3], delay: delay});
  TweenMax.to(audience, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams:[6], delay: delay * 3})
});

// let clickme = document.querySelector("#clickme");

// clickme.addEventListener("click", alertScreen = () => {
//   setTimeout(function() {
//     alert("hello"); }, 3000);
// });