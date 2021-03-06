const Recipe = require('../../models/recipe')
const User = require('../../models/user')

module.exports = {
    index,
    search,
    showOne,
    create,
    update,
    deleteRecipe,
    saveToList,
    createComment,
    deleteComment
};

function index(req, res) {
    Recipe.find({})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
)};

function search(req, res) {
    let search = req.query.tags;
    Recipe.find({tags: search})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => 
            res.status(500).json({ error: true })
)};

function showOne(req, res) {
    Recipe.findById(req.params.id)
        .then(function(recipe) {
            res.status(200).json(recipe);
        });
};

async function create(req, res) {
    try {
        const recipe = await Recipe.create(req.body);
        res.json(recipe);
        console.log(req.user);
    } catch (err) {
        res.json({err});
    }
}

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(function(recipe){
            res.status(200).json(recipe)
        });
};

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id, req.body)
    .then(function(recipe){
        res.status(200).json(recipe)
    });
};

function saveToList(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        User.findOne({userName: req.query.userName}, function(err, user){
            user.recipesSaved.push(recipe._id);
            user.save(function(err) {
                res.status(200).json(user);
            });
        });
    });
};

function createComment(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.json(recipe);
        });
    });
};

function deleteComment(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, recipe) {
        const commentSubdoc = recipe.comments.id(req.params.id);
        commentSubdoc.remove();
        recipe.save(function(err) {
            res.status(200).json(recipe);
        });
    });
};