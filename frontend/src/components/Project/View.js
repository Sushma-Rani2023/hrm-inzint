import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../project page/Header";
import axios from "../../axios";
import Add_Role from "../role/Add_role";
import Add_Client from "../client page/Add_Client";

function View() {
  const location = useLocation();
  //const [data, setData]=useState(location.state.data);
  const data = location.state.data;
  console.log(data);
  const [role,setRole]=useState(false)
  const [task,setTask]=useState(false)
  const [team,setTeam]=useState(false)
  return (
    <>
    <div>
      <Header />

      <div>
        <h3>
          <Link to={"/"}>{data.Projectname}</Link>{" "}
        </h3>
      </div>
      <div  style={{marginTop:'20px',backgroundColor: "#f8f9fa" , height:'100px'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          
        }}
      >
        <div  style={{ marginTop: "15px" }}>
          <p><h6  style={{ color: "black" }}> Code </h6>
          </p>
          <p>{data.Projectcode}</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <p>
            {" "}
            <h6 style={{ color: "black" }}> Status </h6>
          </p>
          <p>{data.Projectstatus}</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <p>
            {" "}
            <h6 style={{ color: "black" }}>Manager</h6>
          </p>
          <p>{data.Projectmanager}</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <p>
            <h6 style={{ color: "black" }}>Start Date</h6>
          </p>
          <p>{data.ProjectStartDate}</p>
        </div>
        <div
          style={{
            marginTop: "15px",
            maxWidth: "300px",
            wordWrap: "break-word",
          }}
        >
          <p>
            <h6 style={{ color: "black" }}> Description </h6>
          </p>
          <p>{data.description}</p>
        </div>
      </div>

      <div style={{
        marginLeft:"10px",
          display: "flex",
          whiteSpace:'100px'
         }}>
      </div>
    </div>
    <div className="header ">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <button  className="btn btn-outline-primary" onClick={()=>{setTask((prev) => !prev) ; setRole(false) ; setTeam(false)} }>Task</button>
      <button style={{marginLeft:'10px'}} className="btn btn-outline-primary" onClick={()=>{setTeam((prev) => !prev); setRole(false);setTask(false)} }>Team Member</button>
        <button style={{marginLeft:'10px'}} className="btn btn-outline-primary" onClick={()=>{setRole((prev) => !prev); setTeam(false); setTask(false)}}>Role</button>
        
      </div>
    </div>
  </div>
</nav> 
</div>
    </div>
    {role &&
        <div style={{marginLeft:"20px"}}>
            <Add_Role/>
        </div>
    
    }

    {team &&
        <div style={{marginLeft:"20px"}}>
            <Add_Client/>
        </div>
    
    }
    </>
  );
}

export default View;
