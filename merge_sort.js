/*
병합정렬
- 시간복잡도: O(N * logN)
- 비고:
퀵정렬도 빠르지만, 만약에 정렬되있는경우 느림(편향적인 정렬)
이러한 평향적인 부분이 없어 N * logN을 보장함.
=> 병합정렬 > 퀵정렬
- 문제: 오름차순 정렬
- 내용: 일단 반으로 자르고, 나중에 병합함.
 */

let list = [7, 6, 5, 8, 3, 5, 9, 1]

const merge = (left = [], right = []) => {
    let results = [], leftIdx = 0, rightIdx = 0;

    //작은 순으로 배열에 삽입
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] <= right[rightIdx]) {
            results.push(left[leftIdx])
            leftIdx++;
        } else {
            results.push(right[rightIdx])
            rightIdx++;
        }
    }

    //나마은 데이터도 삽입
    const leftRemains = [...left].slice(leftIdx);
    const rightRemains = [...right].slice(rightIdx);

    return results.concat(leftRemains).concat(rightRemains);
}

const mergeSort = (array) => {
    if (array.length < 2) return array;

    let midPoint = Math.floor(array.length / 2);
    let leftArray = [...array].splice(0, midPoint);
    let rightArray = [...array].splice(midPoint);
    const left = mergeSort(leftArray)
    const right = mergeSort(rightArray)
    return merge(left, right)
}

console.log(
    mergeSort(list)
)
