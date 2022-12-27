const cardWidth = 500,
      degIncrement = 6,
      card = document.getElementById("card");

const getRotatedeg = (input)=>{
    if(input < cardWidth * 0.33){
      return `-${degIncrement  * 3}deg`;
    } else if( input >= cardWidth * 0.33 && input < cardWidth * 0.66 ){
      return `-${degIncrement}deg`;
    }else if(input >= cardWidth * 0.66 && input < cardWidth * 0.5){
      return "0deg"
    }else if(input >= cardWidth * 0.5 && input < cardWidth * 0.33){
      return `${degIncrement}deg`
    }else{
      return `${degIncrement * 3}deg`;
    }
}

const onMouseMove = (event)=>{
  const {target} = event
  const rect  = target.getBoundingClientRect();
  const rotateX = getRotatedeg(event.clientY - rect.top);
  const rotateY = getRotatedeg(event.clientX - rect.left);
  card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
}

const onMouseLeave = (event) => {
card.style.transform = `none`;
}

const OnclickFn = (alert) =>{
  confirm(alert)
  if(confirm){
    card.style.backgroundColor = 'red';
    card.style.margin = 'auto'
  }else{
    card.style.backgroundColor = 'blue';
    card.style.margin = 'auto'
  }
}