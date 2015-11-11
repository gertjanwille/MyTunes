import 'whatwg-fetch';
import'es6-promise';

import $album from './modules/Export';
import cover from './modules/Functies';

let albums;

const init = data =>{
	albums = data;
	
	
	$album.buildPlaylist(albums);
};

const loadData = ()=>{
	fetch('./assets/data/data.json')
		.then(r =>r.json())
		.then(({albums})=>init(albums));
};

const mouseOver = e =>{
	console.log('hello world');
}
loadData();