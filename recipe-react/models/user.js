const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    photo: [String],
    email: String,
    password: String,
    socialLinks: [String],
    foodPreferences: [String],
    recipesSaved: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
},
    { timestamps: true, }
    );

UserSchema.set('toJSON', {
    transform: function(doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});
    
UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        // replace the user provided password with the hash
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' represents the document that you called comparePassword on
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

const User = mongoose.model('User', UserSchema);

module.exports = User;
