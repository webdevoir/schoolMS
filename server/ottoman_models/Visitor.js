import Ottoman from 'ottoman';
import uuid from 'uuid/v4';

let visitorModel = Ottoman.model('Visitor',{
  sid: {
    type: String,
    unique: true,
    default: uuid,
  },
  visitorName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  schoolId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  visiting: {
    type: String,
    required: true,
    trim: true,
  },
  timeIn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  timeOut: {
    type: Date,
  },
});

export default mongoose.model('Visitor', visitorSchema);
