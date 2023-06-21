/* eslint-disable no-new, @typescript-eslint/ban-ts-comment */

import './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper, { Navigation, Pagination } from 'swiper';

import { apiRequest } from 'shared/api';

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

const fetchingData = async (url: string) => {
  try {
    const result = await apiRequest({ url, method: 'get' });

    return await result;
  } catch (err) {
    throw Error(err as string);
  }
};

export const slider = () => {
  const url = 'https://dummyjson.com/users';
  const wrapper = document.getElementById('slider') as HTMLDivElement;

  if (!wrapper) {
    return false;
  }

  const swiperWrapper = wrapper.querySelector<HTMLDivElement>('.swiper-wrapper');

  if (!swiperWrapper) {
    renderError(wrapper, 'No swiper wrapper');

    return;
  }

  fetchingData(url)
    .then((data) => renderSlides(swiperWrapper, data))
    .then(initSlider)
    .catch((error) => renderError(wrapper, error));
};

slider();
