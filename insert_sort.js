/*
삽입 정렬
- 시간복잡도: O(N^2)
- 비고: 필요할때만 위치를 바꿈. 실제로 버블과 선택보다 빠름.
Good Choice
 */
let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

for (let i = 0; i < array.length; i++) {
    let j = i;
    while (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        j--;
    }
}

console.log(array)