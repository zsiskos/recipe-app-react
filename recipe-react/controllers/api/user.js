const Users = require('../../models/user')

module.exports = {
    signup,
    index,
    showOne,
    create,
    myRecipes,
    savedRecipes
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      // TODO: Send back a JWT instead of the user
      res.json(user);
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  }

function index(req, res) {
    Users.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function showOne(req, res) {
    Users.findOne({userName: req.params.userName})
        .then(function(user) {
            res.status(200).json(user);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function create(req, res) {
    Users.create(req.body)
        .then(user => {
                res.json(user);
            })
            .catch(err => {
                if (err) return res.redirect('api/users');
            res.redirect(`api/${user.name}`)
        });
};

function myRecipes(req, res) {
    console.log('myRecipe');
};

function savedRecipes(req, res) {
    console.log('savedrecipe');
};