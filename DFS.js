/*
깊이 우선 탐색(Depth First Search) - DFS
- 시간복잡도: O(V+E), V: 정점의 갯수 / E: 간선의 갯수
- 사용: 맹목적인 탐색
- 필요 사항: 스택(stack), 스택을 사용하지 않고 재귀를 사용해도됨.
 */
import Graph from "./Graph";

class DFS extends Graph {
    constructor() {
        super();
    }

    dfs(startVertex) {
        let result = new Set();
        let visited = {}
        //DFS 재귀 사용
        this.#_dfs(startVertex, visited, result)
        return Array.from(result)
    }

    #_dfs(vertex, visited = {}, result = new Set()) {
        visited[vertex] = true;
        result.add(vertex);

        for (const adjacentV in this.edges) {
            if (
                this.edges.hasOwnProperty(adjacentV) &&
                !visited[adjacentV]
            ) {
                this.#_dfs(adjacentV, visited, result)
            }
        }
    }

}

const vertexList = [1, 2, 3, 4, 5, 6, 7];
const graph = new DFS();

//정점
for (const v of vertexList) {
    graph.addVertex(v)
}


graph.addEdge(1, 2)
graph.addEdge(1, 3)

graph.addEdge(2, 3)
graph.addEdge(2, 4)
graph.addEdge(2, 5)

graph.addEdge(3, 2)
graph.addEdge(3, 6)
graph.addEdge(3, 7)

graph.addEdge(4, 5)
graph.addEdge(6, 7)


const dfsResult = graph.dfs(1)
console.log(dfsResult)
