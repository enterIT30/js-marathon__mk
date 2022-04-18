let getTime = () => {
  let appendZero = (time) => time < 10 ? `0${time}` : time;

  const date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  //let day = date.getDate();
  //let month = date.getMonth() +1;
  //let year = date.getFullYear();

  return `${appendZero(hours)}:${appendZero(min)}:${appendZero(sec)}`;   /* ${day}.${month}.${year}*/
};

export {getTime};