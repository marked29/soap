import Sandbox from './sandbox/Sandbox';

import './App.css';
import { useEffect } from 'react';
import NicePage from './nice-page/NicePage';

// Потрібно написати функцію, яка приймає в якості вхідного параметра рядок (строку) з цифрами, які ніяк не впорядковані (приклад 7359). На виході ми повинні отримати ті ж самі цифри,  але вже впорядковані від більшого до меншого.
// "7359"

// Розмістити цифри в порядку спаду, від більшого до меншого.Викинути з рядка (57689453219643)  всі прості цифри

const sortDigits = (str: string) => {
  return str
    .split('')
    .map((item) => Number(item))
    .sort((a, b) => b - a)
    .join('');
};

const isSimpleNumber = (number: number) => {
  let counter = 0;

  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      counter++;
    }
  }

  return counter === 2;
};

const sortAndRemoveSimpleDigits = (str: string) => {
  return str
    .split('')
    .filter((item) => {
      return !isSimpleNumber(Number(item));
    })
    .sort((a, b) => b - a)
    .join('');
};

function App() {
  useEffect(() => {
    console.log(sortDigits('7359'));
    console.log(sortAndRemoveSimpleDigits('57689453219643'));
  }, []);

  return (
    <>
      <NicePage></NicePage>
    </>
  );
}

export default App;
