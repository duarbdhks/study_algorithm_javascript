/*
2xn 타일링 문제
https://www.acmicpc.net/problem/11726
- 문제:
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.

- 입력:
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

- 출력:
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
 */

//2x1 => 1 방법
//2x2 => 2 방법
//2x3 => 3 방법
//2x4 => 1+ 3 + 1 => 5
//2x5 => 1 + 4 + 3 => 8
function solution(n) {
    let cache = {}
    let ways = tile(n);
    function tile(width) {
        if (width <= 0) return 0;
        if (width === 1) return 1;
        if (width === 2) return 2;

        if (cache[width]) {
            return cache[width];
        } else {
            cache[width] = tile(width - 1) + tile(width - 2);
            return cache[width]
        }
    }

    return ways % 10007;
}

console.log(
    solution(100)
)