testCases=[{expected :  [[2,3],[5]] ,  input1 :  [2,3,5] , input2 : 5 },
{expected :  false ,  input1 :  [2,3,5] , input2 : "string" },
{expected :  false ,  input1 :  [2,3,5] , input2 : true },
{expected :  false ,  input1 :  [2,3,5] , input2 : false },
{expected :  false ,  input1 :  [2,3,5] , input2 : [] },
{expected :  false ,  input1 :  [2,3,5] , input2 : {} },
{expected :  false ,  input1 :  [2,3,5] , input2 : "5" },
{expected :  false ,  input1 :  [2,3,5] , input2 : "dgvjw" },
{expected :  false ,  input1 :  [2,3,5] , input2 : "shgw2346" },
{expected :  false ,  input1 :  [2,3,5] , input2 : "#$" },
{expected :  false ,  input1 :  [2,3,5] , input2 : "&^hggh$%$S" },
{expected :  false ,  input1 :  "" , input2 : 5 },
{expected :  false ,  input1 :  {} , input2 : 5 },
{expected :  false ,  input1 :  2 , input2 : 5 },
{expected :  false ,  input1 :  -2 , input2 : 5 },
{expected :  false ,  input1 :  [] , input2 : 5 },
{expected :  false ,  input1 :  true , input2 : 5 },
{expected :  false ,  input1 :  false , input2 : 5 },
{expected :  false ,  input1 :  [2,3,5] , input2 : -5 },
{expected :  false ,  input1 :  [0] , input2 : 5 }];

test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = sumOf(testCase.input1,testCase.input2);

    for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function sumOf(array1,target){
    if(!Array.isArray(array1) || array1.length === 0){
        return false;
    }
    else{
        for(let i=0;i<array1.length;i++){
            if(typeof array1[i] !== "number"){
                return false;
            }
        }
        let newArray1=[]
    let newArray2=[]
    let newArray3=[]
    let res=[]
    let array2=[]
    for(let i=0;i<array1.length;i++){
            if(array1[i]===target){
                    newArray2.push(array1[i])
                    console.log(newArray2);
                }
            }
                for(let i=0;i<array1.length;i++){
                    for(j=i+1;j<array1.length;j++){
            if(array1[i]+array1[j]=== target){
                newArray1.push(array1[i]);
                newArray1.push(array1[j]);
                console.log(newArray1)
                newArray3.push(newArray1);
                newArray1=[]
                
                console.log(newArray3)
            }
            
        }
    }

    res.push(newArray3);
    res.push(newArray2);
   
    array2=res.flat(1);
    return (array2);
        }
    }


