import 'whatwg-fetch';
import'es6-promise';

import htmlExport from './modules/Export';

let albums;

const init = data =>{
	albums = data;

	
	htmlExport.buildPlaylist(albums);
};

const loadData = ()=>{
	fetch('./assets/data/data.json')
		.then(r =>r.json())
		.then(({albums})=>init(albums));
};

loadData();