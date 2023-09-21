const maxArea =(height)=>{
    let result = 0,
    left =0,
    right =height.length-1;

    while(left<right){
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right-left) *smallestSide;

        if(area> result){
            result = area;
        } 
        else{
            right --;
        }
        return result;
    }
}

const maxarea = maxArea([1,8,6,2,5,4,8,3,7])

console.log(maxarea)