const curtain=document.getElementById("curtain");
const letter=document.getElementById("letter");
const bgm=document.getElementById("bgm");
const typedText=document.getElementById("typed-text");
const sparkContainer=document.querySelector(".spark-container");

document.body.addEventListener("click",()=>{
  bgm.volume=0.4;
  bgm.play();
},{once:true});

function createSpark(){
  const spark=document.createElement("div");
  spark.classList.add("spark");
  spark.style.left=Math.random()*100+"vw";
  spark.style.animationDuration=(Math.random()*3+3)+"s";
  sparkContainer.appendChild(spark);
  setTimeout(()=>spark.remove(),5000);
}
setInterval(createSpark,200);

function createFlower(){
  const flower=document.createElement("div");
  flower.classList.add("flower");
  const symbols=["🌹","🌸","❤️","💮"];
  flower.innerHTML=symbols[Math.floor(Math.random()*symbols.length)];
  flower.style.left=Math.random()*100+"vw";
  flower.style.animationDuration=(Math.random()*3+5)+"s";
  curtain.appendChild(flower);
}
for(let i=0;i<100;i++){createFlower();}

curtain.addEventListener("click",()=>{
  curtain.style.transition="1.5s";
  curtain.style.opacity="0";
  setTimeout(()=>curtain.remove(),1500);
  letter.classList.add("show");
  typeWriter();
});

const message=`
May God protect you everywhere, every minute and every second.

On this sacred occasion of Mahashivratri, I pray that Lord Shiva blesses you with endless strength, wisdom, and peace. Just like Bholenath stands calm and powerful in every storm, may you always stay strong, focused, and unstoppable in chasing your dreams.

You are one of the most hardworking and dedicated people I know. The way you stay organized, disciplined, and committed to your goals truly inspires me. No matter how tough things get, you never give up and that’s something I deeply admire about you.

Thank you for being my healer, my unpaid therapist, my constant support system, and my safe place. Your words calm my chaos, your presence brings me peace, and your guidance always helps me see things clearly.

On this Mahashivratri, I pray that Shiva blesses you with success in everything you work for, protects you from negativity, and fills your life with happiness and divine energy.

May you rise higher, achieve bigger, and always stay the pure-hearted, strong soul that you are. I’m so grateful to have you in my life. 🤍

Happy Mahashivratri, Mere Acche Karmo Ka Fhal. 🕉️✨
`;

let i=0;
function typeWriter(){
  if(i<message.length){
    typedText.innerHTML+=message.charAt(i);
    i++;
    setTimeout(typeWriter,30);
  }else{
    blessingBurst();
  }
}

function blessingBurst(){
  for(let i=0;i<50;i++){
    createSpark();
  }
}

