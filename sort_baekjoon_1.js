/*
단순 정렬 문제
https://www.acmicpc.net/problem/2750
- 문제:
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

- 입력:
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다.
둘째 줄부터 N개의 줄에는 숫자가 주어진다.
이 수는 절댓값이 1,000보다 작거나 같은 정수이다.
수는 중복되지 않는다.

- 솔루션:
1000보다 작은 수이므로, 단순 선택정렬을 사용함.
 */

let N = 5;
let array = [5, 2, 3, 4, 1]

function solution(N, array) {
    //min: 최소값, minIndex: 최소값 인덱스
    let min, minIndex, temp;
    for (let i = 0; i < array.length; i++) {
        min = 1000
        for (let j = i; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j];
                minIndex = j;
            }
        }
        temp = array[i]
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

solution(N, array)