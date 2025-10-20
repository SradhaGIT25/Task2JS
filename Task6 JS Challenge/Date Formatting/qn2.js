const date=new Date();
console.log(date);
let format=new Intl.DateTimeFormat("Asia/Kolkata").format(date);
console.log(format);