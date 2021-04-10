/*
너비 우선 탐색(Breath First Search)
- 시간복잡도: O(V+E), V: 정점의 갯수 / E: 간선의 갯수
- 내용: 시작 점이 주어졌을 때, 최단 경로를 찾아줌
- 사용: 맹목적인 탐색, 최단 경로를 찾아줌 => 최단 길이 보장해야 될 시 사용
- 필요 사항: 큐(queue)
 */
import Graph from "./Graph";

class BFS extends Graph {
    constructor() {
        super();
    }

    bfs(startVertex) {
        let queue = []; //큐
        let visited = {};   //방문 처리
        let result = new Set();

        queue.push(startVertex);
        while (queue.length) {
            let vertex = queue.shift()
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.add(vertex)
                for (const adjacentV in this.edges[vertex]) {
                    if (this.edges[vertex].hasOwnProperty(adjacentV)) {
                        queue.push(adjacentV)
                    }
                }
            }
        }
        return Array.from(result);
    }

}

const vertexList = [1, 2, 3, 4, 5, 6, 7];
const graph = new BFS();

//정점
for (const v of vertexList) {
    graph.addVertex(v)
}

//1과 2를 연결
graph.addEdge(1, 2)
//1과 3을 연결
graph.addEdge(1, 3)

//2와 3을 연결
graph.addEdge(2, 3)
//2와 4를 연결
graph.addEdge(2, 4)
//2와 5를 연결
graph.addEdge(2, 5)
//4와 5를 연결
graph.addEdge(4, 5)

//3과 6을 연결
graph.addEdge(3, 6)
//3과 7을 연결
graph.addEdge(3, 7)
//6과 7을 연결
graph.addEdge(6, 7)

const bfsResult = graph.bfs(1)
console.log(bfsResult)
