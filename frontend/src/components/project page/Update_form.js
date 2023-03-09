import {useNavigate} from 'react-router-dom'
import Header from './Header'
import {React ,useEffect, useState} from 'react' 
import axios from '../../axios'
import {useLocation} from 'react-router-dom'
function Update_form() {

  const location =useLocation()
  console.log(location.state.EditId)
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
   axios.put(`/project/updateproject/${location.state.EditId}`,project)
        .then(response => {console.log('Updated successful'
        )
        console.log(response,response.data,response.projectData)
        navigate("/")})
        .catch(error => {
            console.error('There was an error!', error);
  
   })
  
  }

    return (
        <div>

        <Header/>
        <div classNameName="row main-row_header" style={{fontSize:'1.5rem'}}>
     <p classNameName="col-md-12">Update the details of project</p>
   </div>

   <br/>

   <div>
   <div className="row" >
  <div className="col-md-12">

    <form className="form-horizontal" method="POST" action="/users/add/" id="add_new_user_form" onSubmit={handlesubmit}>
      <div className="form-group row ">
        <label for="projectname" className="col-md-3 control-label" >Project Name</label>
        <div className="col-md-3">
          <input className="form-control" id="projectname"  name="Projectname" onChange={handleform}  />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectcode" className="col-md-3 control-label">Project code</label>
        <div className="col-md-3">
          <input className="form-control" id="projectcode" name="Projectcode" onChange={handleform}  />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectmanager" className="col-md-3 control-label">Project Manager</label>
        <div className="col-md-3">
          <input className="form-control" id="projectmanager" name="Projectmanager" onChange={handleform}  />
        </div>
      </div>

      <div className="form-group row">
        <label for="projectstartdate" className="col-md-3 control-label">Project start date</label>
        <div className="col-md-3">
          <input  type='date' className="form-control" id="projectstartdate" name="ProjectStartDate" onChange={handleform}  />
        </div>
      </div>


      <div className="form-group row">
        <label for="projectstatus" className="col-md-3 control-label">Project Status</label>
        <div className="col-md-3">
          <input className="form-control" id="projectstatus" name="Projectstatus" onChange={handleform}  />
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
          <button type="submit" id="add_new_user_btn" className="btn btn-success pull-right single-click">Update project</button>
        </div>
      </div>
    </form>

  </div>
</div>

   </div>
</div>
    )
}

export default Update_form