/*
타일 채우기
https://www.acmicpc.net/problem/2133
- 문제:
3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구해보자.

- 입력:
첫째 줄에 N(1 ≤ N ≤ 30)이 주어진다.

- 출력:
첫째 줄에 경우의 수를 출력한다.
 */

//3x1 => 0
//3x2 => 3
//3x3 => 0
//3x4 => 2 x (3x3 + 3x2 + 3x1) = 36
function solution(n) {
    let cache = {}

    function tile(width) {
        if (width <= 0) return 1;
        if (width === 1) return 0;
        if (width === 2) return 3;

        if (cache[width]) {
            return cache[width];
        } else {
            let result = 3 * tile(width - 2);
            for (let i = 3; i <= width; i++) {
                if (i % 2 === 0) result += 2 * tile(width - i)
            }
            cache[width] = result;
            console.log(cache)
            console.log(result)
            return cache[width]
        }
    }

    return tile(n);
}

console.log(
    solution(4)
)
