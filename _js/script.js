import 'whatwg-fetch';
import'es6-promise';

import functies from './modules/functies';

let albums;

const init = data =>{
	albums = data;
	
	buildPlaylist(albums);
};

const loadData = ()=>{
	fetch('./assets/data/data.json')
		.then(r =>r.json())
		.then(({albums})=>init(albums));
};

const buildPlaylist = albums =>{
	albums.forEach((item,i)=>{
		let el = functies.html(`
			<article class="album">
				<figure>
					<div class="cover-container">
						<img class='cover effect' src="assets/img/covers/${item.cover}.jpg" width="250" height="250">
						<section class='player hide'>
							<a class="icon play" href="${item.cover}"></a>
							<div class="time"></div>
							<a class="icon buy" href="#"></a>
						</section>
					</div>
					<figcaption>${item.title}</figcaption>
				</figure>
			</article>
			`);

		document.querySelector('.holder').appendChild(el);
	});
};

loadData();