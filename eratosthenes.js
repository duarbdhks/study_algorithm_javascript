/*
에라토스테네스의 체 알고리즘
- 목적: 소수를 판별하는 알고리즘
- 내용: 소수를 대량으로 빠르고 정확하게 구현하는방법
- 사용하는 경우:
    굳이 필요없는 숫자는 제외하고 판별함.
 */

// 비효율 적인 함수
// 시간복잡도: O(N)
function isPrimeNum(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//제곱근으로 범위 지정
function eratosPrimeNum(n) {
    const end = Math.sqrt(n);
    for (let i = 2; i < end; i++) {
        if (n % i === 0) return false;
    }
    return true
}

//에라토스테네스의 체 알고리즘
function primeNumService(n) {
    let list = []
    for (let i = 2; i <= n; i++) {
        list[i] = i
    }
    for (let i = 2; i <= n; i++) {
        if (list[i] === 0) continue;
        for (let j = i + i; j <= n; j += i) {
            list[j] = 0;
        }
    }
    return list.filter(v => v !== 0);
}

console.log(
    primeNumService(10)
)