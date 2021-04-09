/*
퀵 정렬
- 시간복잡도: O(N * logN)
- 비고: 가장 빠른 정렬.
*/
let list = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)];

    //엇갈릴 때까지 반복
    while (left <= right) {
        //기준 값과 같거나 더 큰 값을 만날때까지
        while (pivot > array[left]) {    //오름차순
            // while (pivot < array[left]) {   //내림차순
            left++;
        }

        //기준 값보다 작은 값을 만날때까지
        while (pivot < array[right]) {   //오름차순
            // while (pivot > array[right]) {  //내림차순
            right--;
        }

        if (left <= right) {
            const temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left++;
            right--;
        }
    }
    return left;
}

const quickSort = (array, left, right) => {
    let index;
    if (array.length > 1) {
        //분할 기준점
        index = partition(array, left, right)

        //좌측 분할 정렬
        if (left < index - 1) {
            quickSort(array, left, index - 1)
        }

        //우측 분할 정렬
        if (index < right) {
            quickSort(array, index, right)
        }
    }
    return array;
}

console.log(
    quickSort(list, 0, list.length - 1)
)


// const quickSort = (data, start, end) => {
//     //원소가 1개인 경우
//     if (start >= end) return;
//
//     let pivot = start;    //키는 첫번째 원소, 중심축
//     let left = start + 1;
//     let right = end;
//     let temp;
//
//     while (left <= right) {    //엇갈릴 때까지 반복
//         //키 값보다 큰 값을 만날 때까지
//         while (data[left] <= data[pivot]) {
//             left++;
//         }
//
//         //키 값보다 작은 값을 만날 때까지
//         while (data[right] >= data[pivot] && right > start) {
//             right--;
//         }
//
//         if (left > right) {   //엇갈린 상태라면 데이터 교체
//             temp = data[right]
//             data[right] = data[pivot]
//             data[pivot] = temp
//         } else {
//             temp = data[right]
//             data[left] = data[right]
//             data[right] = temp;
//         }
//     }
//
//     quickSort(data, start, right - 1)
//     quickSort(data, left + 1, end)
// }
//
//
// quickSort(array, 0, array.length - 1)
// console.log(array)