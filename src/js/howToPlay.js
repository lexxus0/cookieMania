import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.howToPlayDiv').forEach((div, i) => {
  gsap.fromTo(
    div.querySelector('.howToPlayInnerContent'),
    { x: i % 2 === 0 ? 100 : -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: div,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    }
  );
});
