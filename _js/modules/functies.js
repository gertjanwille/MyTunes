const html = (strings, ...values) => {

  let str = '';

  if(Array.isArray(strings)){
    for(let i = 0; i < strings.length; i++){
      if(strings[i]) str += strings[i];
      if(values[i]) str += values[i];
    }
  }else{
    str = strings;
  }

  let doc = new DOMParser().parseFromString(str.trim(), 'text/html');

  return doc.body.firstChild;

};

const effect = ($cover) => {
  $cover.classList.add('effect');
};

const noEffect = ($cover) => {
  $cover.classList.remove('effect');
};

export default{
  html,
  effect,
  noEffect
}