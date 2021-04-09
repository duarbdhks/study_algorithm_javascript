/*
[정렬 심화문제] 단어 정렬
https://www.acmicpc.net/problem/1181

- 문제:
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로

- 입력:
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000)
둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다.
주어지는 문자열의 길이는 50을 넘지 않는다.

- 솔루션:
20000 개이므로 그냥 sort 함수를 사용함
 */
let words = [
    13,
    'but',
    'i',
    'wont',
    'hesitate',
    'no',
    'more',
    'no',
    'more',
    'it',
    'cannot',
    'wait',
    'im',
    'yours'
];

function solution(words) {
    //중복 제거
    const wordList = Array.from(new Set(words));
    return wordList
        .filter(str => typeof str === 'string')
        .sort((a, b) => {
            if (a.length < b.length) return -1  //길이가 짧은 것부터
            if (a.length > b.length) return 0

            //길이가 같다면, 사전순으로 정렬
            return a < b ? -1 : a > b ? 1 : 0;
        })
}

console.log(
    solution(words)
)
