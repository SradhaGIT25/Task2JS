let number=21
let position=0
let values=[1,2,3,4,5,6,7,8,9,10,50,60,100,200,300,400,500,600,700,800,900,1000,2000]
let romans=["I","II","III","IV","V","VI","VII","VIII","IX","X","L","LX","C","CX","CCC","CD","D","DC","DCC","DCCC","CM","M","MM"]
for(let i=0;i<=values.length-1;i++){
if(values[i]==number){
    position=values.indexOf(values[i])
    console.log(romans[position])
}
}
