/*
이진 트리의 구현과 순회 방식
- 목적: 데이터의 탐색 속도 증진을 위해 사용하는 구조

- 방법: 이진트리에서 데이터를 탐색하는 방법은 세가지.
    1. 전위 순회(Preorder Traversal)
        - 순서: 1-2-4-8-9-5-10-11-3-6-12-13-7-14-15
        1) 자기 자신 처리
        2) 왼쪽 자식 처리
        3) 오른쪽 자식 처리
    2. 중위 순회(Inorder Traversal)
        - 순서: 8-4-9-2-10-5-11-1-12-6-13-3-14-7-15
        1) 왼쪽 자식 처리
        2) 자기 자신 처리
        3) 오른쪽 자식 처리
    3. 후위 순회(Postorder Traversal)
        - 순서: 8-9-4-10-11-5-2-12-13-6-14-15-7-3-1
        1) 왼쪽 자식 처리
        2) 오른쪽 자식 처리
        3) 자기 자신 처리
        - 수식에 대해 컴퓨터(계산기)가 처리하는 방식
 */
let number = 15;
let nodes = [];

for (let i = 1; i <= number; i++) {
    nodes[i] = {value: i, left: null, right: null}
}

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        nodes[parseInt(i / 2)].left = nodes[i]
    } else {
        if (parseInt(i / 2) === 0) continue;
        nodes[parseInt(i / 2)].right = nodes[i]
    }
}

//전위 순회
function preOrder(node, result = []) {
    if (!node) return;
    result.push(node.value)
    preOrder(node.left, result);
    preOrder(node.right, result);
}

let preOrderResult = []
preOrder(nodes[1], preOrderResult)


//중위 순회
function inOrder(node, result = []) {
    if (!node) return;
    inOrder(node.left, result);
    result.push(node.value)
    inOrder(node.right, result);
}

let inOrderResult = []
inOrder(nodes[1], inOrderResult)

//후위 순회
function postOrder(node, result = []) {
    if (!node) return;
    postOrder(node.left, result);
    postOrder(node.right, result);
    result.push(node.value)
}

let postOrderResult = []
postOrder(nodes[1], postOrderResult)

console.log(nodes, '노드 목록')
console.log(preOrderResult, '전위순회')
console.log(inOrderResult, '중위순회')
console.log(postOrderResult, '후위순회')