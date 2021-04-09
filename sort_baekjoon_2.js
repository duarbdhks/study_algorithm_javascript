/*
세 수 정렬
https://www.acmicpc.net/problem/2752
- 문제:
동규는 세수를 하다가 정렬이 하고싶어졌다.
숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다.
숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.

- 입력:
숫자 세 개가 주어진다.
이 숫자는 1보다 크거나 같고, 1,000,000보다 작거나 같다.
이 숫자는 모두 다르다.
 */

//N: 수의 갯수
let array = [3, 1, 2];

function solution(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        let j = i;
        while (array[j] > array[j + 1]) {
            temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
            j--;
        }
    }

    return array;
}

console.log(
    solution(array)
)
