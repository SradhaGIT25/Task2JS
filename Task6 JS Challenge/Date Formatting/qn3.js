const date=new Date()
console.log(
   new Intl.DateTimeFormat( {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date),
);