import './index.css';

const foo = (n: number) => {
  const body = document.querySelector<HTMLBodyElement>('body');

  if (body) {
    body.append(`!!!${10 + n}!!!`);
  }
};

foo(2);