import mongoose from 'mongoose';
import LocalMongoose from 'passport-local-mongoose';
import uuid from 'uuid/v4';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  sid: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    trim: true,
    unique: true,
  },
  userType: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
});

usersSchema.plugin(LocalMongoose);

export default mongoose.model('Users', usersSchema);
