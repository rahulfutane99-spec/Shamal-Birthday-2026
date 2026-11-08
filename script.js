
let ctx=null,timer=null,on=false,n=0;
const notes=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,523.25,659.25,783.99,1046.5,880,783.99,659.25,587.33];
function tone(freq,at,dur){const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(.10,at+.06);g.gain.exponentialRampToValueAtTime(.0001,at+dur);o.connect(g);g.connect(ctx.destination);o.start(at);o.stop(at+dur+.02)}
function step(){if(!on)return;const t=ctx.currentTime,f=notes[n%notes.length];tone(f,t,.72);if(n%4===0)tone(f/2,t,.9);n++}
function toggleMusic(){const b=document.getElementById('musicButton');if(!ctx)ctx=new(window.AudioContext||window.webkitAudioContext)();if(ctx.state==='suspended')ctx.resume();on=!on;if(on){step();timer=setInterval(step,650);b.textContent='♫ Pause birthday music'}else{clearInterval(timer);b.textContent='♫ Play birthday music'}}
document.addEventListener('DOMContentLoaded',()=>{const b=document.getElementById('musicButton');if(b)b.addEventListener('click',toggleMusic)});
