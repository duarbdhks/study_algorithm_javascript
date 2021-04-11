/*
2xn 타일링 문제(2)
https://www.acmicpc.net/problem/11727
- 문제:
2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
아래 그림은 2×17 직사각형을 채운 한가지 예이다.

- 입력:
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

- 출력:
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
 */

//2x1 => 1
//2x2 => 3
//2x3 => 1 + 2 + 2 = 5
//2x4 => 1 + 4 + 1 + 4 = 11
function solution(n) {
    let cache = {}

    function tile(width) {
        if (width <= 0) return 0;
        if (width === 1) return 1;
        if (width === 2) return 3;

        if (cache[width]) {
            return cache[width];
        } else {
            cache[width] = (tile(width - 1) + 2 * tile(width - 2)) % 10007;
            return cache[width]
        }
    }

    return tile(n);
}

console.log(
    solution(4)
)
