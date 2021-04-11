/*
타일 채우기(3)
https://www.acmicpc.net/problem/14852
- 문제:
2×N 크기의 벽을 2×1, 1×2, 1×1 크기의 타일로 채우는 경우의 수를 구해보자.

- 입력:
첫째 줄에 N(1 ≤ N ≤ 1,000,000)이 주어진다.

- 출력:
첫째 줄에 경우의 수를 1,000,000,007로 나눈 나머지를 출력한다.
 */

// (n-1) => 2가지
// (n-2) => 3가지
// (n-3) => 2가지
// (n-4) => 2가지
function solution(n) {
    // 0번째: 방법 값, 1번째: 메모라이징 값
    let cache = {}

    cache[0] = [0];
    cache[1] = [2];
    cache[2] = [7, 1];

    function tile(width) {
        if (width <= 0) return 1;
        if (width === 1) return 2;
        if (width === 2) return 7;

        // if (cache[width]) {
        //     return cache[width];
        // } else {
        // let result = 2 * tile(width - 1) + 3 * tile(width - 2);
        for (let i = 3; i <= width; i++) {
            if (!cache[i]) cache[i] = []
            cache[i][1] = (cache[i - 1][1] + cache[i - 3][0]) % 1000000007
            cache[i][0] = (3 * cache[i - 2][0] + 2 * cache[i - 1][0] + 2) % 1000000007
            // result += (2 * tile(width - i))
        }
        // cache[width] = result % 1000000007;
        return cache[width][0]
        // }
    }

    return tile(n);
}

console.log(
    solution(100)
)
