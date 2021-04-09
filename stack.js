/*
스택
택배 상하차: 물건을 넣고, 꺼낼땐 마지막 쌓은 물건부터 꺼냄.
- 시간복잡도: O(1)
 */
let stack = [];

stack.push(7)
stack.push(5)
stack.push(4)
stack.pop()
stack.push(6)
stack.pop()

console.log(stack)
while (stack.length !== 0) {
    console.log(stack[stack.length - 1])
    stack.pop()
}

