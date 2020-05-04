const Users = require('../../models/user')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    index,
    showOne,
    create,
    myRecipes,
    savedRecipes
};

async function signup(req, res) {
    const user = new Users(req.body);
    try {
      await user.save();
      // Be sure to first delete data that should not be in the token
      const token = createJWT(user);
      res.json({ token });
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


/*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
  }