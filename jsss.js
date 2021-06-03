// gsap.registerplugin(Scrolltrigger);
//         var t1 = gsap.timeline();

//         t1.from('.content',{
//             y:'-30% ',
//             opacity:0,
//             duration: 2,
//             ease: Power4.easeOut
//         })
//         t1.from('.stagger1', {
//             opacity: 0,
//             y:-50,
//             stagger:.3,
//             ease: Power4.easeOut,
//             duration:2
//         })

const background = document.querySelector('.background');
const toggleBody = document.querySelector('.toggle-body');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  background.classList.toggle('background--on');
  toggleBody.classList.toggle('toggle-body--on');
  toggleBtn.classList.toggle('toggle-btn--on');
  toggleBtn.classList.toggle('toggle-btn--scale');
});