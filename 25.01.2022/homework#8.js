function f(a) {
    if (Array.isArray(a)) {
        var result = a.flat(Infinity);
        var i, sum = 0;
        for (i of result) {
            sum += i;
        }
        console.log(sum)
    } else {
        throw new Error('parameter type should be a Array');
    }
}
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3


