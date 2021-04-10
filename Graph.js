/*
정점: vertex
간선: edge
 */
class Graph {

    constructor() {
        this.edges = {}
    }

    //정점 추가
    addVertex(vertex) {
        this.edges[vertex] = {}
    }

    //정점 제거
    removeVertex(vertex) {
        //인접 간선 제거
        for (const adjacentVertex in this.edges[vertex]) {
            if (this.edges[vertex].hasOwnProperty(adjacentVertex)) {
                this.removeEdge(adjacentVertex, vertex)
            }
        }
        //정점 제거
        delete this.edges[vertex];
    }

    //간선 추가
    addEdge(vertex1, vertex2, weight = 0) {
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }

    //간선 제거
    removeEdge(vertex1, vertex2) {
        //1 -> 2 간선 제거
        if (
            this.edges[vertex1] &&
            this.edges[vertex1][vertex2] !== undefined
        ) {
            delete this.edges[vertex1][vertex2]
        }

        //2 -> 1 간선 제거
        if (
            this.edges[vertex2] &&
            this.edges[vertex2][vertex1] !== undefined
        ) {
            delete this.edges[vertex2][vertex1]
        }
    }
}

export default Graph;