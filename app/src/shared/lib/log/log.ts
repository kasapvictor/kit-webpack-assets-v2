// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (...args: any[]): void => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const error = new Error();
  const stackLines = error.stack?.split('\n');

  if (stackLines && stackLines.length > 2) {
    const callerFile = stackLines[1].split('@')[0];

    window.console.log('⚡', callerFile);
    window.console.log('ℹ️', ...args);
    window.console.log('\n');
  } else {
    window.console.log('🚧', ...args);
    window.console.log('\n');
  }
};
