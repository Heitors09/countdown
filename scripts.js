const timer = document.getElementById('timer');
const release = '10 Nov 2023';

function contador(){
    const date = new Date(release);
    const current = new Date();
    
    //define os dias horas minutos e segundos de acordo com o totalseconds da data informada
    const Totalseconds = (date - current)/1000;
    const days = Math.floor(Totalseconds / 3600/ 24);
    const hours = Math.floor(Totalseconds / 3600 ) % 24;
    const mins = Math.floor(Totalseconds/60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;
    
    timer.innerHTML = formatTime(days) + formatTime(hours) + formatTime(mins) + ':' + seconds
   
   //função para formatar o time colocando o zero antes
   function formatTime(time){
         return time < 10 ? `0${time}:` : time;
   }
   
}

contador();

setInterval(contador,1000);