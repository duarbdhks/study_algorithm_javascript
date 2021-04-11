/*
강한 결합 요소
- 목적: 그래프안에서 강하게 결합된 정점 집합
- 특징: 같은 SCC(강한결합요소)에 속하는 두 정점은 도달이 가능함
- 추출 방법: 타잔 알고리즘
 */
const graph2 = [
    0,
    [2],//1
    [3],//2
    [1],//3
    [2, 5],//4
    [7],//5
    [5],//6
    [6],//7
    [5, 9],//8
    [10],//9
    [11],//10
    [3, 8],//11
]

const graph = [
    0,  //vertex: none
    [2],  //vertex: 1
    [3],  //vertex: 2
    [1],  //vertex: 3
    [2, 5],  //vertex: 4
    [7],  //vertex: 5
    [5],  //vertex: 6
    [6],  //vertex: 7
]
const isVisited = new Array(graph.length).fill(false);
const isFinished = new Array(graph.length).fill(false);
const stack = [];
const scc = [];


const dfs = (vertex) => {
    let parent = vertex;
    isVisited[vertex] = true;
    stack.push(vertex)
    for (let i = 0; i < graph[vertex].length; i++) {
        const nextV = graph[vertex][i];
        if (!isVisited[nextV]) {
            parent = Math.min(parent, dfs(nextV))
        } else {
            parent = nextV;
        }
    }

    if (parent === vertex) {
        const sccEl = [];
        let topEl = 0;
        while (topEl !== parent) {
            topEl = stack.pop();
            isFinished[topEl] = true;
            sccEl.unshift(topEl)
        }
        console.log(sccEl)
        scc.push(sccEl);
    }

    return parent;
}

const tarjan = () => {
    let parent = 0;
    let topEl = 0;
    for (let vertex = 1; vertex < graph.length; vertex++) {
        if (!isFinished[vertex]) {
            dfs(vertex)
        }
    }
}

tarjan()
console.log(scc)