/*
크루스칼 알고리즘
- 목적: 가장 적은 비용으로 모든 노드를 연결하기 위함.
- 사용 예시: 여러 개의 도시가 있을 때 가 도시를 도로를 이용해 연결하고자 할 때(가장 적은 비용)

- 용어 정리:
    노드 = 정점 = 도시: 그래프의 점
    간선 = 거리 = 비용: 그래프의 선

- 최소비용 계산:
    간선 갯수 = 노드 갯수 - 1
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

class Edge {
    node = new Array(2);
    distance;

    constructor(a = 0, b = 0, distance = 0) {
        this.node[0] = a;
        this.node[1] = b;
        this.distance = distance;
    }

    operator(edge = new Edge()) {
        return this.distance < edge.distance
    }
}

let n = 7;  //정점의 갯수
let m = 11; //간선의 갯수

let vector = [];
//11개의 간선 생성
vector.push(new Edge(1, 7, 12));
vector.push(new Edge(1, 4, 28));
vector.push(new Edge(1, 2, 67));
vector.push(new Edge(1, 5, 17));
vector.push(new Edge(2, 4, 24));
vector.push(new Edge(2, 5, 62));
vector.push(new Edge(3, 5, 20));
vector.push(new Edge(3, 6, 37));
vector.push(new Edge(4, 7, 13));
vector.push(new Edge(5, 6, 45));
vector.push(new Edge(5, 7, 17));

//간선의 비용을 기준으로 오름차순
vector.sort((a, b) => a.operator(b) ? -1 : !a.operator(b) ? 1 : 0)

//각 정점이 포함 된 그래프가 어디인지 저장
let parent = new Array(n);
for (let i = 0; i < n; i++) {
    parent[i] = i;
}

let sum = 0
for (let i = 0; i < vector.length; i++) {
    const [nodeA = 0, nodeB = 0] = vector[i].node;
    //아직 사이클이 발생하지 않은 경우, 그래프에 포함(합치기)
    if (!findParent(parent, nodeA - 1, nodeB - 1)) {
        sum += vector[i].distance;
        unionParent(parent, nodeA - 1, nodeB - 1)
    }
}

console.log(sum)
