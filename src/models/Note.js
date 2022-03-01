const { Schema, model } = require('mongoose');

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      rquired: true,
    },
  },
  {
    timestamps: true,
  }
);

model('Note', NoteSchema);
module.exports = model('Note', NoteSchema);
