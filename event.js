console.log(document)
// 7 ways to add bg color
const purple=document.getElementById('make-purple');
purple.onclick = makePurple;
function makePurple(){
document.body.style.background='purple'
}

const gray=document.getElementById('make-gray');
gray.onclick =function makePurple(){
document.body.style.background='gray'}

document.getElementById('make-green').addEventListener('click',function(){
                              document.body.style.background="green";
})

// changing msg
function handeledClick(){
  const msgid=document.getElementById('handeled');
 msgid.innerText='muri kha';                         
   }
