const name=document.getElementById("name");
const myform=document.getElementById("myform");
const age=document.getElementById("age");
const address=document.getElementById("address");
const male=document.getElementById("male");
const female=document.getElementById("female");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const sub1=document.getElementById("sub1");
const buttons=document.getElementById("buttons");
const submit=document.getElementById("submit");
const clear=document.getElementById("clear");
const show=document.getElementById("show");

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    const myform=document.getElementById("myform").value;
    console.log(myform)
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const address=document.getElementById("address").value;
    const male=document.getElementById("male").value;
    const female=document.getElementById("female").value;
    const yes=document.getElementById("yes").value;
    const no=document.getElementById("no").value;
    event.textContent=myform.value;
    myform.value.classList.add("show");
    const sub1=document.getElementById("sub1").textContent;
    // myform.textContent.display="block";

})
