import './index.css';

const aboutInit = () => {
  const body = document.querySelector<HTMLBodyElement>('body');

  if (!body) {
    return;
  }

  body.append(`10`);
};

aboutInit();
