import './index.css';

import { log } from 'shared/lib';

const foo1 = (n: number) => {
  const body = document.querySelector('body');
  if (body) {
    body.append(`${10 + n}`);
  }
};

foo1(5);

log('APP/1');
