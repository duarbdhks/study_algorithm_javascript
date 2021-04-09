/*
큐
은행 창구: 번호표 먼저 뽑은 사람부터 처리해줌
 - 시간복잡도: O(1)
*/
let queue = [];
queue.push(7);
queue.push(5);
queue.push(4);
queue.shift();
queue.push(6);
queue.shift();

console.log(queue)
while (queue.length !== 0) {
    console.log(queue[0])
    queue.shift()
}

