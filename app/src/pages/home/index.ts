import './index.css';

const generateAppDynamicContent = () => {
  const el = document.getElementById('app') as HTMLDivElement;

  if (!el) {
    return false;
  }

  const content = 'Hello World!';
  el.innerHTML = `<p>${content}</p>`;
};

generateAppDynamicContent();
