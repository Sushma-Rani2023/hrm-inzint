const engineerroles = require('../models/engineerroles');

const engineercreate = (req,res) => {

  const Engineer = new engineerroles({
    Name:req.body.Name,
    Description:req.body.Description,
    Optional:req.body.Optional
  })
  
  Engineer.save()
  .then(result => {
    res.status(200).json({
        newEngineer : result
    })
  })
  .catch(err => {
    res.status(500).json({
        error:err
    })
  })
}


const getengineerinfo = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        engineerroles.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:'Engineer not found with id' + id})
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message:'Error occured'});
        })
    }
    else{
        engineerroles.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({message:'Error Occured',
        error: err
        })
        })
    }
}

const updateengineer = (req,res) =>{
    const { Name , Description, Optional} = req.body;
    const id = req.params.id;
    const newengineerinfo = engineerroles.findByIdAndUpdate(id);

    
    newengineerinfo.Name = Name|| newengineerinfo.Name;
    newengineerinfo.Description = Description|| newengineerinfo.Description;
    newengineerinfo.Optional = Optional|| newengineerinfo.Optional;

    newengineerinfo
    .save()
    .then(data => {
        res.json({
            message:'Engineer is updated',
            Updatedengineer:data
        })
    })
    .catch(err => {
        res.json({
            message:"Error Occured",
            error:err
        })
    })
}

module.exports = {engineercreate , getengineerinfo , updateengineer};