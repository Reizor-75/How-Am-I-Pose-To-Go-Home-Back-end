import mongoose from 'mongoose'

const Schema = mongoose.Schema

const subwayStationSchema = new Schema({
  name: String,
  location: {
    type: String,
    coordinates : [Number],
  },
  transfers: [{
    type: Schema.Types.ObjectId,
    ref: 'SubwayLines'
  }],
  acessible : {
    type: Boolean,
    default: false,
  },
},{
  timestamps: true,
})

const subwayStation = mongoose.model('SubwayStation', subwayStationSchema)

export { subwayStation }
