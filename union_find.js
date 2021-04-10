/*
합집합 찾기
- 내용: 재귀를 사용하여 부모노드를 찾음
*/

//부모 노드 찾기
function getParent(parent, x) {
    if (parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x])
}

// 두 부모노드를 합침
function unionParent(parent = [], a = 0, b = 0) {
    let aParent = getParent(parent, a);
    let bParent = getParent(parent, b);
    if (aParent < bParent) {
        parent[bParent] = aParent;
    } else {
        parent[aParent] = bParent
    }
}

//같은 부모를 갖는지 확인
function findParent(parent, a, b) {
    let aParent = getParent(parent, a);
    let bParent = getParent(parent, b);
    return aParent === bParent;
}

let list = new Array(11);
for (let i = 1; i <= 10; i++) {
    list[i] = i
}

console.log(list)

//1,2,3,4 연결함
unionParent(list, 1, 2)
unionParent(list, 2, 3)
unionParent(list, 3, 4)

//5,6,7,8 연결함
unionParent(list, 5, 6)
unionParent(list, 6, 7)
unionParent(list, 7, 8)

console.log(`1과 5는 연결이 되어 있는가? => ${findParent(list, 1, 5)}`)
console.log(`1과 2는 연결이 되어 있는가? => ${findParent(list, 1, 2)}`)
console.log(list)

