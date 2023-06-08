const AssureModel = require ('../models/Assure.model');

module.exports.getAssure = async (req, res) => {   
  const Assure= await  AssureModel.find ()
   res.status(200).json(Assure)
};


module.exports.setAssure = async (req, res) => {
  if (!req.body.Nom) {
    return res.status(400).json({ message: "Merci d'ajouter un nom"
    });
  }       
    // console.log(req.body)
    const Assure= await  AssureModel.create ({ 
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Age: req.body.Age,
      NumPermis: req.body.NumPermis,
      NumIdn: req.body.NumIdn,
      Tel: req.body.Tel})
 return res.status(200).json(Assure)
};

module.exports.editAssure = async (req,res) => {
  const Assure = await AssureModel.findById(req.params.id);
  if (!Assure) {
    res.status(400).json({ message: "Ce Assure n'exise pas" });
  }
  const updateAssure = await AssureModel.findByIdAndUpdate(
    Assure._id,
    req.body,
    {new: true}
  )
    res.status(200).json(updateAssure);
};

module.exports.deleteAssure = async (req,res) => {
  const Assure = await AssureModel.findById(req.params.id);
  if (!Assure) {
    res.status(400).json({ message: "Ce Assure n'exise pas" });
  }
  await AssureModel.findByIdAndDelete(Assure._id)
    res.status(200).json("Message supprimé identifiant : " + req.params.id);
};

module.exports.TelAssure = async (req, res) => {
  try {
   const data= await AssureModel.findByIdAndUpdate(
        req.params.id,
      { $addToSet: { Tel: req.body.TelId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};

module.exports.disTelAssure = async (req, res) => {
  try {
   const data= await AssureModel.findByIdAndUpdate(
        req.params.id,
      { $pull: { Tel: req.body.TelId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};