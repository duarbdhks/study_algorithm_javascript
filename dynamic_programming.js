/*
다이나믹 프로그래밍, DP
- 목적: 하나의 문제는 단 한번만 풀도록 하는 알고리
- 내용: 문제를 한번만 풀고 그 결과를 저장하여 가지고 있다 필요할때 다시 쓰는 기법
- 예시:
    피보나치 수열: O(2^N) -> O(N)
    캐시등을 사용하여 필요없는 계산을 줄일 수 있음.

- 사용하는 경우:
    1. 중복 부분 문제
    2. 최적 부분 구조
 */

// 1. 중복 관련 DP 사용
let cacheFibo = {};

function fibo(n) {
    if (n === 2 || n === 1) return 1;
    if (cacheFibo[n]) return cacheFibo[n]
    return cacheFibo[n] = fibo(n - 1) + fibo(n - 2);
}

const resultFibo = fibo(50)
console.log(resultFibo)

// 2. 최적화
let cacheWays = {}

/**
 * n 걸음을 걷는 방법, ex) 1,1,1,1 / 2,2 / 1,1,2 등
 * @param n: 걸음의 거리
 */
function waysByStepDP(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (cacheWays[n]) {
        return cacheWays[n]
    } else {
        cacheWays[n] = waysByStepDP(n - 1) + waysByStepDP(n - 2) + waysByStepDP(n - 3)
        return cacheWays[n]
    }
}

const resultWay = waysByStepDP(12)
console.log(resultWay)

