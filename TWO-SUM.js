//leetcode - 1

/**
 * Author : Abrar
 * Used map to find difference if exists else set nums[i],i
 * it wont work during the first iteration but it will work from next time.
 */



var twoSum = function(nums, target) {

    let map = new Map();

    for(let i=0; i< nums.length;i++){
        let diff = target-nums[i]

        if( map.has(diff)){
            return [i, map.get(diff)]
        }

        map.set(nums[i],i)
    }


  };

