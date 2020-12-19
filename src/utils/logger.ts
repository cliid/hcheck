import chalk from 'chalk';

let step = 1;
const totalStep = 7;

const resetStep = (): void => {
  step = 1;
};
const logStep = (str: string): void => {
  console.log(`${chalk.cyan(`[ ${step++} / ${totalStep} ]`)} ${str}`);
};

const logError = (err: string | Error): void => {
  let str = '';
  if (err instanceof Error) {
    if (typeof err.stack !== 'undefined') {
      str = err.stack;
    }
  } else {
    str = err;
  }
  console.error(chalk.red(str));
};

const logSuccess = (): void => {
  console.log(chalk.green('자가진단을 완료하였습니다!'));
};

const logNormal = (str: string): void => {
  console.log(chalk.blueBright.bold(str));
};

const logDisclaimer = (): void => {
  console.log(
    chalk.yellow.bold(`
${chalk.inverse(
  '경고'
)} 이 스크립트는 건강상의 문제가 없는 사람이 빠르게 자가진단을 할 수 있게 하는 목적으로 개발되었습니다. 만약 코로나19 의심 증상이 있다면 이 스크립트를 사용하지 마시고 직접 자가진단 페이지에 가서 자가진단을 하시기 바랍니다.`)
  );
};

export default {
  resetStep,
  logStep,
  logError,
  logSuccess,
  logDisclaimer,
  logNormal,
};
