 
import {useNavigate} from 'react-router-dom'
import Header from './Header'
import {React , useState} from 'react' 

import axios from '../../axios'

function Add_client() {
  const navigate= useNavigate();

  const [project, setProject] = useState({});

  const handleform = (e) => {
    
     setProject({
      ...project ,
      [e.target.name] : e.target.value 
     })
  }

  const handlesubmit = async (e) => {
   e.preventDefault();
   axios.post('/project/createproject',project)
   .then( (response) => {
      console.log(response.data)
      navigate("/")
   })
  // const response = await fetch('http://localhost:8080/project/createproject',{
  // method:'POST',
  // body:JSON.stringify(project),
  // headers:{
  //    'Content-Type':'application/json'
  //  }
  // })
  // const data = await response.json();
  // console.log(data);
  }

    return (
        <div>

        <Header/>
        <div className="row main-row_header" style={{fontSize:'1.5rem'}}>
     <p className="col-md-12">Details of new project</p>
   </div>

   
   <br/>

   <div>
   <div className="row" >
  <div className="col-md-12">

    <form className="form-horizontal" method="POST" action="/users/add/" id="add_new_user_form" onSubmit={handlesubmit}>
     
      <div className="form-group row ">
        <label for="projectname" className="col-md-3 control-label" >Project Name</label>
        <div className="col-md-3">
          <input className="form-control" id="projectname" name="Projectname" onChange={handleform} required />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectcode" className="col-md-3 control-label">Project code</label>
        <div className="col-md-3">
          <input className="form-control" id="projectcode" name="Projectcode" onChange={handleform} required />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectmanager" className="col-md-3 control-label">Project Manager</label>
        <div className="col-md-3">
          <input className="form-control" id="projectmanager" name="Projectmanager" onChange={handleform} required />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectstartdate" className="col-md-3 control-label">Project start date</label>
        <div className="col-md-3">
          <input  type='date' className="form-control" id="projectstartdate" name="ProjectStartDate" onChange={handleform} required />
        </div>
      </div>


      <div className="form-group row">
        <label for="projectstatus" className="col-md-3 control-label">Project Status</label>
        <div className="col-md-3">
          <input className="form-control" id="projectstatus" name="Projectstatus" onChange={handleform} required />
        </div>
      </div>
 
      <div className="form-group row">
        <label for="projectdescription" className="col-md-3 control-label">Project Description</label>
        <div className="col-md-10">
          <textarea className="form-control" id="projectdescription" rows={3} name="description" onChange={handleform}/>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-md-offset-3 col-md-3">
          <button type="submit" id="add_new_user_btn" className="btn btn-success pull-right single-click" >Add new project</button>
        </div>
      </div>
    </form>

  </div>
</div>

   </div>
</div>



    )
}

export default Add_form