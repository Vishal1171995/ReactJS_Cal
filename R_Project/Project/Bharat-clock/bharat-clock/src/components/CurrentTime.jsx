let CurrentTime=()=> {
  let d = new Date(); // for now
  return <p>This is the current date & time:{d.toLocaleDateString()} - {d.toLocaleTimeString()}</p>
};

export default CurrentTime;