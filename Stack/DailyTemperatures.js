var top = function(a) {
    return a[a.length - 1];
}

var dailyTemperatures = function(temperatures) {
    let stack = [], ans = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[top(stack)] < temperatures[i]) {
            let index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))