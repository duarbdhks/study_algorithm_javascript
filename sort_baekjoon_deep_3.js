/*
[정렬 심화문제] 수 정렬하기 3
https://www.acmicpc.net/problem/10989

- 문제:
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

- 입력:
첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다.
둘째 줄부터 N개의 줄에는 숫자가 주어진다.
이 수는 10,000보다 작거나 같은 자연수이다.

- 솔루션:
100만개 이상의 데이터 O(N)을 사용.

 */
const N = 10;
let array = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

function solution(N, array) {
    let count = new Array(N);
    for (let i = 0; i < N; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        count[array[i] - 1]++
    }

    const results = []
    for (let i = 0; i < count.length; i++) {
        while (count[i] !== 0) {
            results.push(i + 1)
            count[i]--
        }
    }
    return results;
}

console.log(
    solution(N, array)
)
