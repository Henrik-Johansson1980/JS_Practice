//Array chunking
//Dela upp en array i flera delar med en bestämd storlek
//Tex chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3],[4,5,6],[7]]
function chunkArray(arr, len){
    //------------------------------------------------
    //Metod 1 While-loop
    //------------------------------------------------
    // const chunkedArr = [];
    // //Set index for loop
    // let i = 0;
    // //Loop
    // while(i < arr.length){
    //     //Slice from index to index + chunk length and push to chunked array
    //     chunkedArr.push( arr.slice( i, i+len ) );
    //     i += len;
    // }
    // return chunkedArr;
    
    //------------------------------------------------
    //Metod 2 forEach
    //------------------------------------------------
    // const chunkedArr = [];
    // //Set index for loop
    // //Loop Through arr
    // arr.forEach( function (val)  {
    //     //Get last element
    //     const last = chunkedArr[chunkedArr.length -1];
    //     //check if there is a last element ant if last length is equal to chunk length
    //     if( !last || last.length === len){
    //         chunkedArr.push([val]);
    //     }else {
    //         last.push(val);
    //     }
    // });

    // return chunkedArr;
    //------------------------------------------------
    //Metod 3 forEach assow
    //------------------------------------------------
    const chunkedArr = [];
    //Set index for loop
    //Loop Through arr
    arr.forEach( (val) => {
        //Get last element
        const last = chunkedArr[chunkedArr.length -1];
        //check if there is a last element ant if last length is equal to chunk length
        if( !last || last.length === len){
            chunkedArr.push([val]);
        }else {
            last.push(val);
        };
    });

    return chunkedArr;
}


//Flatten array
// Ta en array med arrayer och platta ut till en enskild array [1,2], [3,4], [5,6,7] === [ 1, 2, 3, 4, 5, 6, 7 ]

function flattenArray(arrays){
        
    //------------------------------------------------
    //Metod 1 reduce
    //------------------------------------------------
    // return arrays.reduce(function(a, b){
    //     return a.concat(b);
    // });

    //------------------------------------------------
    //Metod 2 concat.apply
    //------------------------------------------------
    //return [].concat.apply([], arrays);

    //------------------------------------------------
    //Metod 3 spread operator
    //------------------------------------------------
    return [].concat(...arrays);

}

//Anagram returnera sant om strängarna är anagram

function isAnagram(str1, str2){
    
}


//Skriv ut
const output = isAnagram('elbow','below');
console.log(output);