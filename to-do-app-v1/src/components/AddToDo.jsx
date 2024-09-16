export function AddToDO()
{
    const clickHandler=(a)=>{
        alert(a);
    }
    return(
    <div className="row">
        <div className="col-md-4">
        <input type="text" placeholder="enter item" className='form-control' />
        </div>
        <div className="col-md-4">
        <input type="date" className='form-control' id="" />
        </div>
        <div className="col-md-3">
        <button className='btn btn-success' data-id="12" onClick={()=>{ clickHandler('something')}}>ADD</button>
        
        </div>
    </div>
   )
}

export function ShowToDO(props)
{
    const {name,date}=props;

    return(
    <div className="row mt-3">
        <div className="col-md-4">
        { name ? name : "Rice"}
        </div>
        <div className="col-md-4">
        { date ? data : "12/12/2023"}
        </div>
        <div className="col-md-3">
        <button className='btn btn-danger'>Delete</button>
        </div>
    </div>
)
}