import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../project page/Header";
import axios from "../../axios";
function Add_Client() {
  const navigate = useNavigate();
  const [data , setData] = useState([]);
  const getAds = async () => {
    const res = await axios.get('/client/Clientdetails')
    setData(res.data.ClientData)
   
    console.log(data)
  }

  useEffect(() => {
    getAds()
  }, [])

  function Delete (editId){
    axios.delete(`/client/deleted/${editId}`)
        .then(response => console.log('Delete successful'))
        .catch(error => {
            console.error('There was an error!', error);
        });
    const updated_data=data.filter((item)=>item._id!==editId)
    setData(updated_data)

    
};
  
  return (
    <div>
      <Header />

      <div className="row form_container">
        <div className="col-md-3 lead " style={{ fontSize: "1.5rem" }}>
          Inzint's Client 
        </div>
        <div className="col-md-3 col-md-offset-6 pull-right-12" style={{display:'right'}}>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/client/add");
            }}
          >
            Add Client
          </button>
        </div>
      </div>
      <div className="col-md-9" style={{width:'100%',marginTop:'45px'}}>
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Client Name</th>
        <th>Client Code</th>
        <th>Client Manager</th>
        <th>Currency Selector</th>
        <th>Billing</th>
        <th>Optional</th>
        <th>Client Action</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((data,index) => {
         return (<tr key={index}>
        <td>{data.Clientname}</td>
        <td>{data.Clientcode}</td>
        <td>{data.Clientmanager}</td>
        <td>{data.Currencyselector}</td>
        <td>{data.Billing}</td>
        <td style={{maxWidth:'200px',height:'60px',wordWrap:'break-word'}}>{data.Optional}</td>
        <td> <button className="btn btn-outline-secondary" size="xs" onClick={() => {
              navigate("/Client/update",{state:{data:data}});
            }} >Edit</button>
        <button className="btn btn-outline-secondary" size="xs" onClick={()=>Delete(data._id)} >Del</button></td>
        </tr>)
 
      }
      )
    } 
    </tbody>
  </table>
</div>
    </div>
  );
}
export default Add_Client;
