/*
힙 정렬
- 시간복잡도: O(N * logN)
- 비고:
이진트리를 사용함.
추가적인 배열이 필요하지 않아, 메모리 비용이 들지않음.

- 문제: 오름차순 정렬
 */
let list = [7, 6, 5, 8, 3, 5, 9, 1, 6];

function heapSort(array) {
    //전체 트리 구조를 최대 힙 구조로 변경, 0 은 root 이므로 1부터 시작
    for (let i = 1; i < array.length; i++) {
        let child = i;
        while (child !== 0) {
            let root = Math.floor((child - 1) / 2)
            //부모가 자식보다 작으면 교체
            if (array[root] < array[child]) {   //오름차순
                // if (array[root] > array[child]) {   //내림차순
                let temp = array[root];
                array[root] = array[child];
                array[child] = temp;
            }
            child = root;
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        let root = 0;
        let child = 1;
        while (child < i) {
            child = 2 * root + 1;
            //자식 중에 더 큰 값 찾기
            if (
                array[child] < array[child + 1] &&  //오름차순
                // array[child] > array[child + 1] &&  //내림차순
                child < (i - 1)
            ) {
                child++;
            }

            //루트보다 자식이 더 크다면 교환
            if (
                array[root] < array[child] &&   //오름차순
                // array[root] > array[child] &&   //내림차순
                child < i
            ) {
                let temp = array[root];
                array[root] = array[child];
                array[child] = temp;
            }
            root = child;
        }
    }

    return array;
}

console.log(
    heapSort(list)
)
