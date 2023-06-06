const PostModel = require ('../models/post.model');

module.exports.getPosts = async (req, res) => {   
  const post= await  PostModel.find ()
   res.status(200).json(post)
};

module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
      return res.status(400).json({ message: "Merci d'ajouter un message"
      });
    }       
      console.log(req.body)
      const post= await  PostModel.create ({ 
      message: req.body.message,
      author:req.body.author})
    return res.status(200).json(post)
};

module.exports.editPosts = async (req,res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "Ce post n'exise pas" });
  }
  const updatePost = await PostModel.findByIdAndUpdate(
    post._id,
    req.body,
    {new: true}
  )
    res.status(200).json(updatePost);
};

module.exports.deletePost = async (req,res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "Ce post n'exise pas" });
  }
  await PostModel.findByIdAndDelete(post._id)
    res.status(200).json("Message supprimé identifiant : " + req.params.id);
};

module.exports.likePost = async (req, res) => {
  try {
   const data= await PostModel.findByIdAndUpdate(
        req.params.id,
      { $addToSet: { Likers: req.body.userId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};

module.exports.dislikePost = async (req, res) => {
  try {
   const data= await PostModel.findByIdAndUpdate(
        req.params.id,
      { $pull: { Likers: req.body.userId } },
      { new:true }
    )
    res.status(200).send(data)
  } 
  catch (err) {
    res.status(400).json(err);
  }
};