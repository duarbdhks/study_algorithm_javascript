/*
버블 정렬
- 시간복잡도: O(N^2)
- 비고: 구현은 쉬우나 효율성이 가장 떨어짐.
선택정렬과 같은 시간복잡도이나, 버블 정렬이 더 오래걸림
*/
let temp;
let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j + 1]
            array[j + 1] = array[j]
            array[j] = temp;
        }
    }
}
console.log(array)