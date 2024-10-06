import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `
          <span class="${className}">
            <svg class="reviewsSvg" width="35" height="10">
              <use href="/img/icons/sprite.svg#swiper"></use>
            </svg>
          </span>`;
    },
  },

  breakpoints: {
    1200: {
      slidesPerView: 1.5,
    },
  },
});
