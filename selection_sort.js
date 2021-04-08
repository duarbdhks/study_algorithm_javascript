/*
선택 정렬
- 시간복잡도: O(N^2)
- 비고: 데이터가 조금만 많아도 매운 많은 시간이 들음. 좋지않은 정렬
*/
let min, index, temp;
let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]
for (let i = 0; i < array.length; i++) {
    min = 9999;
    for (let j = i; j < array.length; j++) {
        if (min > array[j]) {
            min = array[j];
            index = j;
        }
    }
    temp = array[i];
    array[i] = array[index];
    array[index] = temp;
}