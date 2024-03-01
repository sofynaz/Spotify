console.log("Welcome to Spotify")
// Initialized the Variables
 let songIndex = 0;
 let audioElement = new Audio('songs/1.mp3');
 let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName')
 let songsItem = Array.from(document.getElementsByClassName('songsItem'));
    let songs = [
        {songsName: "Itter Songs",filepath: "songs/1.mp3", coverpath: "cover/1.jpg"},
        {songsName: "Main Tanvi vi payar kardan ",filepath: "songs/2.mp3", coverpath:"cover/2.jpg"},
        {songsName: "Ajj din chaddiyan",filepath: "songs/3.mp3", coverpath:"cover/3.jpg"},
        {songsName: "Thaa",filepath: "songs/4.mp3", coverpath:"cover/4.jpg"},
        {songsName: "Thug love",filepath: "songs/5.mp3", coverpath:"cover/5.jpg"},
        {songsName: "Gaddiyan Uchiya Rakhiya",filepath: "songs/6.mp3", coverpath:"cover/6.jpg"},
    ]

      songsItem.forEach((element, i)=>{
        //  console.log(element, i);
         element.getElementsByTagName("img")[0].src = songs[i].coverpath;
         element.getElementsByClassName("songsName")[0].innerText = songs[i].songsName;
      })

// audioElement.play();

//handle play/pause click

  masterPlay.addEventListener('click',()=>{
      if(audioElement.paused || audioElement.currentTime<=0){
             audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
       } 
    else{
         audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
          masterPlay.classList.add('fa-play-circle');
      }        
  })
//listen to events

  audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
  
   //update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 console.log(progress);
 myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;    
   })
   const makeAllPlays = ()=>{
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.add('fa-play-circle');
       element.classList.remove('fa-pause-circle');
   })
}

   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target)
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

    })
   })

   document.getElementById('next').addEventListener('click', ()=>{
if(songIndex>=6){
    songIndex = 0
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songsName
       audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
  
   })

   document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName
           audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
      
   })