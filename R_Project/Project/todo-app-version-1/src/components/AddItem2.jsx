function AddItem2(){

  let item='Salt';
  let objTime='18/May/2023';
  return (
    <div className="row">
    <div className="col-6">
     {item}
    </div>
      <div className="col-4">
      {objTime}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default AddItem2;