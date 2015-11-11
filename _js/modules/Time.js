const timeUpdate = ($player, current, total) =>{
  if(!current || !total) return;

    current = parseTime(current);
    total = parseTime(total);

  $player.querySelector('.time').innerText = `${current} / ${total}`;
}
const parseTime = time =>{
  time = Math.round(time);

    let minutes = paddingZeroes(Math.floor(time / 60));
    let seconds = paddingZeroes((time - minutes * 60));

    return `${minutes}:${seconds}`;
}

const paddingZeroes = data => data < 10 ? `0${data}` : data;

export default{
	timeUpdate,
  	parseTime,
  	paddingZeroes
}