/*
수 정렬하기 2
https://www.acmicpc.net/problem/2751
- 문제:
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

- 입력:
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다.
둘째 줄부터 N개의 줄에는 숫자가 주어진다.
이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다.
수는 중복되지 않는다.

- 솔루션:
시간 제한 1초일 시, 1억으로 생각하면 됨.
=> 100만 개의 수를 고려해야하므로 N*logN 을 사용해야함.
 */

let array = [5, 4, 3, 2, 1];

function solution(array) {
    //pivot 은 마지막원소이므로, right 은 총 갯수-1
    return quickSort(array, 0, array.length - 1)
}

//마지막 원소를 pivot 으로 잡음
const quickSort = (array, left, right) => {
    let index;
    if (array.length > 1) {
        //분할 기준점
        index = partition(array, left, right)

        //좌측 분할 정렬
        if (left < index - 1) {
            quickSort(array, left, index - 1)
        }

        //우측 분할 정렬
        if (index < right) {
            quickSort(array, index, right)
        }
    }
    return array;
}

const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)];

    //엇갈릴 때까지 반복
    while (left <= right) {
        //기준 값과 같거나 더 큰 값을 만날때까지
        while (pivot > array[left]) {    //오름차순
            left++;
        }

        //기준 값보다 작은 값을 만날때까지
        while (pivot < array[right]) {   //오름차순
            right--;
        }

        if (left <= right) {
            const temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left++;
            right--;
        }
    }
    return left;
}

console.log(
    solution(array)
)
