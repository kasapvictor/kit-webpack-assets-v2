import './index.css';
import { lalal } from 'shared/lib/lalal';

const aboutInit = () => {
  const body = document.querySelector<HTMLBodyElement>('body');

  if (!body) {
    return;
  }

  const sum = lalal(15);

  body.append(`[|||][>>>]${sum}`);
};

aboutInit();
