const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      rquired: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encripPasssword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = function (password) {
  return await bcrypt.compare(password, this.password);
};

model('User', UserSchema);
module.export = model;
