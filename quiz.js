
const quiz=[
{q:"Who made this birthday website?",a:["Rahul","Shamal","A secret admirer"],correct:0,why:"Yes! Rahul made this little surprise just for you. 💗"},
{q:"What sweet nickname does Rahul use for Shamal?",a:["My Sha","Sunshine","Princess"],correct:0,why:"That's right — My Sha! ❤️"},
{q:"Which month is special in our story?",a:["February","May","December"],correct:0,why:"February is one of our special months. 💞"},
{q:"Who says 'I love you' more?",a:["Rahul","Shamal","Both"],correct:2,why:"Both — love is best when it goes both ways! 💗"},
{q:"Who is the birthday star today?",a:["Rahul","Shamal","Both"],correct:1,why:"Of course, it's Shamal — today's queen! 👑"}
];
let index=0,score=0,locked=false;
const q=document.getElementById('question'),opts=document.getElementById('answers'),fb=document.getElementById('feedback'),next=document.getElementById('next');
function render(){locked=false;document.getElementById('counter').textContent='Question '+(index+1)+' of '+quiz.length;document.getElementById('score').textContent='Score: '+score;document.getElementById('bar').style.width=(index/quiz.length*100)+'%';q.textContent=quiz[index].q;fb.textContent='';next.style.display='none';opts.innerHTML='';quiz[index].a.forEach((v,i)=>{let b=document.createElement('button');b.className='answer';b.textContent=v;b.onclick=()=>choose(i,b);opts.appendChild(b)})}
function choose(i,button){if(locked)return;locked=true;let item=quiz[index],buttons=[...opts.children];buttons[item.correct].classList.add('correct');if(i===item.correct){score++;fb.textContent='Correct! '+item.why}else{button.classList.add('wrong');fb.textContent='Not quite! '+item.why}document.getElementById('score').textContent='Score: '+score;next.style.display='inline-block';next.textContent=index===quiz.length-1?'See my result ❤️':'Next question →'}
next.onclick=()=>{index++;if(index<quiz.length){render()}else{document.querySelector('.quiz-card').innerHTML='<div class="center"><div style="font-size:4rem">🎉💗🎂</div><h2 style="font:700 2.4rem Playfair Display;color:var(--rose)">You did it, Shamal!</h2><p class="lead">Your score: '+score+' / '+quiz.length+'</p><p style="line-height:1.8;margin-top:15px">No matter the score, you are number one in this birthday surprise. Lots of love, Rahul! 💕</p><a class="btn" href="letter.html">Read your letter →</a></div>';document.getElementById('bar').style.width='100%'}};
render();
