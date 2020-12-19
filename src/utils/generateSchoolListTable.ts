import Table from 'cli-table3';
import chalk from 'chalk';

type SchoolList = Array<School>;
interface School {
  name: string;
  address: string;
  code: string;
}
export default (schoolList: SchoolList): string => {
  const table = new Table({
    head: ['학교 이름', '학교 주소', '학교 코드'],
    style: { head: ['green'] },
  });

  schoolList.forEach((item) =>
    table.push([item.name, item.address, chalk.cyan.bold(item.code)])
  );

  return table.toString();
};
