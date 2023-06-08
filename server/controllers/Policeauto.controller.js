const PoliceautoModel = require ('../models/Policeauto.model');

module.exports.getPoliceauto = async (req, res) => {   
  const Policeauto= await  PoliceautoModel.find ()
   res.status(200).json(Policeauto)
};


module.exports.setPoliceauto = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Merci d'ajouter name"
    });
  }       
    console.log(req.body)
    const Policeauto= await  PoliceautoModel.create ({ 
      NumPol: req.body.NumPol,
      ModelAuto: req.body.ModelAuto,
      DateEffet: req.body.DateEffet,
      DateEcheance: req.body.DateEcheance })
 return res.status(200).json(Policeauto)
};

module.exports.editPoliceauto = async (req,res) => {
  const Policeauto = await PoliceautoModel.findById(req.params.id);
  if (!Policeauto) {
    res.status(400).json({ message: "Cette Policeauto n'existe pas" });
  }
  const updatePoliceauto = await PoliceautoModel.findByIdAndUpdate(
    Policeauto._id,
    req.body,
    {new: true}
  )
    res.status(200).json(updatePoliceauto);
};

module.exports.deletePoliceauto = async (req,res) => {
  const Policeauto = await PoliceautoModel.findById(req.params.id);
  if (!Policeauto) {
    res.status(400).json({ message: "Ce Policeauto n'exise pas" });
  }
  await PoliceautoModel.findByIdAndDelete(Policeauto._id)
    res.status(200).json("Message supprimé identifiant : " + req.params.id);
};

module.exports.PartPoliceauto = async (req, res) => {
  try {
   const data= await PoliceautoModel.findByIdAndUpdate(
        req.params.id,
      { $addToSet: { AutoPart: req.body.PartId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};

module.exports.disPartPoliceauto = async (req, res) => {
  try {
   const data= await PoliceautoModel.findByIdAndUpdate(
        req.params.id,
      { $pull: { AutoPart: req.body.PartId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};