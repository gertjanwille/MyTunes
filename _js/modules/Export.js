import Functies from './Functies';
const buildPlaylist = albums =>{
	albums.forEach((item,i)=>{
		let el = Functies.html(`
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

export default{
	buildPlaylist
}