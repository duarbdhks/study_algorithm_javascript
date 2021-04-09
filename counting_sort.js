/*
계수정렬
- 시간복잡도: O(N)

- 비고:
범위 조건이 있다면, 힙정렬/병합정렬/퀵정렬 보다 빠름.

- 문제:
5 이하의 숫자를 30개 데이터로 랜덤하게 출력함. 이를 정렬하라.
 */
let N = 5 // 조건: 5 이하의 데이터
let list = [
    1, 3, 2, 4, 3, 2, 5, 3, 1, 2,
    3, 4, 4, 3, 5, 1, 2, 3, 5, 2,
    3, 1, 4, 3, 5, 1, 2, 1, 1, 1
]


function countingSort(N, array) {
    let count = [];
    let results = [];
    for (let i = 0; i < N; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        count[array[i] - 1]++
    }
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            results.push(i + 1)
        }
    }
    return results;
}

console.log(
    countingSort(N, list)
)
