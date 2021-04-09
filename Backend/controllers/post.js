const fs = require('fs');
const { render, post } = require('../app');

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  const post = new Post({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
  .then(post => res.status(200).json(post))
  .catch(error => res.status(404).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
    {
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Votre post est modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Votre post est supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
  .then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res) => {
  switch (req.body.like) {
    case 0:
      Post.findOne({ _id: req.params.id })
        .then((post) => {
          if (post.usersLiked.find( user => user === req.body.userId)) {
            Post.updateOne({ _id: req.params.id }, {
              $inc: { likes: -1 },
              $pull: { usersLiked: req.body.userId }
            })
            .then(() => res.status(201).json({ message: "Vôtre vote est enregistré !" }))
            .catch(() => res.status(400).json({ error }));
          }
          if (post.usersDisliked.find( user => user === req.body.userId)) {
            Post.updateOne({ _id: req.params.id }, {
              $inc: { dislikes: -1 },
              $pull: { usersDisliked: req.body.userId }
            })
            .then(() => res.status(201).json({ message: "Vôtre vote est enregistré !" }))
            .catch(() => res.status(400).json({ error }));
          }
        })
        .catch(() => res.status(404).json({ error }));
      break;

    case 1:
      Post.updateOne({ _id: req.params.id }, {
        $inc: { likes: 1 },
        $push: { usersLiked: req.body.userId }
      })
      .then(() => res.status(201).json({ message: "Vôtre vote est enregistré !"}))
      .catch(() => res.status(400).json({ error }));
      break;

    case -1:
      Post.updateOne({ _id: req.params.id }, {
        $inc: { dislikes: 1 },
        $push: { usersDisliked: req.body.userId }
      })
      .then(() => res.status(200).json({ message: "Vôtre vote est enregistré !"}))
      .catch(() => res.status(400).json({ error }));
      break;
    default:
      console.error("mauvaise requête");
  }
};


