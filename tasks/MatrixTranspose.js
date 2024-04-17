
/*
Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |

is

| 1 4 |
| 2 5 |
| 3 6 |

The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
Напишите функцию, которая выводит транспонирование матрицы — новую матрицу. где столбцы и строки оригинала меняются местами.

Например, транспонирование:

| 1 2 3 |
| 4 5 6 |

является

| 1 4 |
| 2 5 |
| 3 6 |

Входными данными вашей функции будет массив строк матрицы. Ты можешь Предположим, что каждая строка имеет одинаковую длину и что высота и обе ширины матрицы положительны.

*/
function transpose(matrix) {
let res = Array(matrix[0].length).fill().map(() => []);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      res[i][j] = matrix[j][i];
    }
  }
  return res;

}
