/*
다익스트라 알고리즘
- 목적: 다이나믹 프로그래밍을 활요한 최단경로 탐색
- 특징: 최단거리를 구할 때 그 이전까지 구했던 최단거리 정보를 사용

- 작동 과정:
    1. 출발노드 설정
    2. 출발노드 기준으로 각 노드 최소비용 저장
    3. 방문하지 않은 노드 중 가장 비용이 적은 노드 선택
    4. 해당 노드를 거쳐 특정한 노드로 가는경우를 고려하여 최소비용 갱신
    5. 3,4번을 반복함
 */
import PriorityQueue from "./PriorityQueue";

const nodeCnt = 6;
//전체 그래프
let nodes = [
    [0, 2, 5, 1, Infinity, Infinity],   //1번노드의 탐색 거리
    [2, 0, 3, 2, Infinity, Infinity],   //2번노드의 탐색 거리
    [5, 3, 0, 3, 1, 5],   //3번노드의 탐색 거리
    [1, 2, 3, 0, 1, Infinity],   //4번노드의 탐색 거리
    [Infinity, Infinity, 1, 1, 0, 2],   //5번노드의 탐색 거리
    [Infinity, Infinity, 5, Infinity, 2, 0],   //6번노드의 탐색 거리
]
let distances = {}   //최단 거리

let visited = new Array(nodeCnt).fill(false)    //방문한 노드
const dist = new Array(nodeCnt).fill(Number.MAX_SAFE_INTEGER);    //최단 거리
const pq = new PriorityQueue(dist)


function getSamllIndex() {
    let min = Infinity;
    let index = 0;
    for (let i = 0; i < nodeCnt; i++) {
        if (distances[i] < min && !visited[i]) {
            min = distances[i];
            index = i;
        }
    }
    return index;
}

//선형 탐색 => 시간복잡도 O(N*N), 비효율적인 소스코드
function dijkstraBad(start) {
    for (let i = 0; i < nodeCnt; i++) {
        distances[i] = nodes[start][i];
    }
    visited[start] = true;

    for (let i = 0; i < nodeCnt - 2; i++) {
        const current = getSamllIndex();
        visited[current] = true;
        for (let j = 0; j < nodeCnt; j++) {
            if (!visited[j]) {
                if (distances[current] + nodes[current][j] < distances[j]) {
                    distances[j] = distances[current] + nodes[current][j];
                }
            }
        }
    }
}

//힙 구조를 사용, O(N*logN)
function dijkstraBest(start) {
    pq.enqueue(start)
    dist[start] = 0;

    while (pq.queue.length) {
        const [current] = pq.dequeue();
        if (visited[current]) continue;
        visited[current] = true;

        for (let i = 0; i < nodes[current].length; i++) {
            const next = nodes[current][i]; //인접 노드와의 거리
            if (dist[current] + next < dist[i]) {
                dist[i] = dist[current] + next;
                pq.enqueue(i)
            }
        }
    }
}

// dijkstraBad(0)
dijkstraBest(0)
for (let i = 0; i < nodes.length; i++) {
    console.log(`${i + 1}번까지의 최단 비용: ${dist[i]}`)
}