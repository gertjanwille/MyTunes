import 'whatwg-fetch';
import'es6-promise';

import $album from './modules/Export';
import cover from './modules/Functies';
import time from './modules/Time';

let albums, current, playing, $audio;

const init = data =>{
	albums = data;

	document.querySelector('.holder').addEventListener('click', e=>{
    e.preventDefault();
    if(e.target.tagName.toLowerCase()=== 'a'){
    	playing = e.target;
    	if (e.target.classList.contains('pauseIt')) {
    		pauseSong();
    	}else{
    		playSong(e.target.getAttribute('href'));
    	};
    }
  });
	
	$album.buildPlaylist(albums);
};

const playSong = cover =>{
	current = albums.find(function(item){
    	return item.cover === cover;
  	});
	
	$audio.setAttribute('src', `assets/snd/${cover}.mp3`);
	if($audio.play){
		playing.parentNode.parentNode.classList.add('isPlaying');
		playing.classList.remove('play');
		playing.classList.add('pause');
		if(playing.classList.contains('pause')){
			playing.classList.add('pauseIt');
		}
	}
}

const pauseSong = () =>{
	$audio.pause()
	playing.parentNode.parentNode.classList.remove('isPlaying');
	playing.classList.remove('pause', 'pauseIt');
	playing.classList.add('play');
};

const loadData = ()=>{
	$audio = document.querySelector('audio');
	$audio.addEventListener('timeupdate',e=>{
		let $target = e.currentTarget;
		time.timeUpdate(playing.parentNode, $target.currentTime, $target.duration);
	} );

	fetch('./assets/data/data.json')
		.then(r =>r.json())
		.then(({albums})=>init(albums));
};

loadData();