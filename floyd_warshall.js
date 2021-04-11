/*
플로이드 와샬 알고리즘
- 목적: 모든정점에서 모든 정점으로의 최단경로 구할 때
- 특징: 거쳐가는 정점을 기준으로 최단경로를 구함.
 */

const vectorCnt = 4;
const nodes = [
    [0, 5, Infinity, 8],
    [7, 0, 9, Infinity],
    [2, Infinity, 0, 4],
    [Infinity, Infinity, 3, 0]
];
const dist = []

function floydWarshall() {
    for (let i = 0; i < vectorCnt; i++) {
        for (let j = 0; j < vectorCnt; j++) {
            if (!dist[i]) dist[i] = []
            dist[i][j] = nodes[i][j]
        }
    }

    // i = 거쳐가는 노드
    for (let i = 0; i < vectorCnt; i++) {
        // j = 출발 노드
        for (let j = 0; j < vectorCnt; j++) {
            //k = 도착 노드
            for (let k = 0; k < vectorCnt; k++) {
                // (출발노드에서 거쳐 가는 노드 거리 + 거쳐가는 노드에서 도착 노드 거리 < 출발노드에서 도착노드까지의 거리) 러면
                if (dist[j][i] + dist[i][k] < dist[j][k]) {
                    dist[j][k] = dist[j][i] + dist[i][k];
                }
            }
        }
    }
}

floydWarshall()
console.log(dist)
