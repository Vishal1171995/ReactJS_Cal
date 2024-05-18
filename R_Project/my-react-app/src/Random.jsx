
function Random(){
let number=Math.random()*1000;

  return <h2 style={{'backgroundColor':'#756688'}}>Random number is: {Math.round(number)}</h2>
}

export default Random;