/* eslint-disable no-new, @typescript-eslint/ban-ts-comment */

import './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper, { Navigation, Pagination } from 'swiper';

import { apiRequest } from 'shared/api';

// region Types
interface UserProps {
  age: number;
  email: string;
  image: string;
  firstName: string;
  lastName: string;
  username: string;
  birthDate: string;
}

interface DataProps {
  users: UserProps[];
}
// endregion

// region View
const initSlider = () => {
  new Swiper('.swiper', {
    loop: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    modules: [Navigation, Pagination],
  });
};

const slideHtml = (item: UserProps) => {
  return `<div class="swiper-slide">
            <div class="user">
                <div class="user__name">Full Name: ${item.firstName} ${item.lastName}</div>
                <div class="user__nick">Nickname: ${item.username}</div>
                <div class="user__age">Age: ${item.age}</div>
                <div class="user__email">Email: ${item.email}</div>
                <div class="user__birth">Birthday: ${item.birthDate}</div>
                <img class="user__avatar" src="${item.image}" alt="${item.firstName} ${item.lastName}">
            </div>
           </div>`;
};

const renderSlides = (wrapper: HTMLDivElement, data: DataProps) => {
  const { users } = data;

  wrapper.innerHTML = Object.values(users)
    .map((user: UserProps) => slideHtml(user))
    .join('');
};

const renderError = (wrapper: HTMLDivElement, error: string) => {
  wrapper.innerHTML = `<p class="error">Something went wrong. ${error}<p>`;
};
// endregion

// region Model
const fetchingData = async (url: string) => {
  try {
    const result = await apiRequest({ url, method: 'get' });

    return await result;
  } catch (err) {
    throw Error(err as string);
  }
};
// endregion

// region Controller
export const slider = async () => {
  const url = 'https://dummyjson.com/users';
  const wrapper = document.getElementById('slider') as HTMLDivElement;
  const swiperWrapper = wrapper?.querySelector<HTMLDivElement>('.swiper-wrapper');

  if (!wrapper || !swiperWrapper) {
    // eslint-disable-next-line no-console
    console.log('Slider error: Required DOM elements not found');

    return false;
  }

  try {
    const data = await fetchingData(url);
    renderSlides(swiperWrapper, data);
    initSlider();
  } catch (error) {
    renderError(wrapper, error as string);
  }
};
// endregion

// initial Slider
slider();
