const UserModel = require ('../models/user.model');

module.exports.getUser = async (req, res) => {   
    const user= await  UserModel.find ()
     res.status(200).json(user)
  };
  
  module.exports.setUser = async (req, res) => {
      if (!req.body.name) {
        return res.status(400).json({ message: "Merci d'ajouter un nom"
        });
      }       
        // console.log(req.body)
        const user= await  UserModel.create ({ 
        name:req.body.name,
        email:req.body.email,
        password:req.body.password})
     return res.status(200).json(user)
  };
  
  module.exports.editUser = async (req,res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      res.status(400).json({ message: "Ce user n'exise pas" });
    }
    const updateUser = await UserModel.findByIdAndUpdate(
      user._id,
      req.body,
      {new: true}
    )
      res.status(200).json(updateUser);
  };
  
  module.exports.deleteUser = async (req,res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      res.status(400).json({ message: "Ce user n'exise pas" });
    }
    await UserModel.findByIdAndDelete(user._id)
      res.status(200).json("Message supprimé identifiant : " + req.params.id);
  };
  
  module.exports.AgenUser = async (req, res) => {
    try {
     const data= await UserModel.findByIdAndUpdate(
          req.params.id,
        { $addToSet: { Agen: req.body.agenId } },
        { new:true }
      )
      res.status(200).send(data)
    } 
    catch (err) {
      res.status(400).json(err);
    }
  };
  
  module.exports.disAgenUser = async (req, res) => {
    try {
     const data= await UserModel.findByIdAndUpdate(
          req.params.id,
        { $pull: { Agen: req.body.agenId } },
        { new:true }
      )
      res.status(200).send(data)
    } 
    catch (err) {
      res.status(400).json(err);
    }
  };