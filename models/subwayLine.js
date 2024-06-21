import mongoose from 'mongoose'

const Schema = mongoose.Schema

const subwayLineSchema = new Schema({
  name: String,
  catagory: String,
  stations: [{
    type: Schema.Types.ObjectId,
    ref: 'SubwayStation'
  }],
  serviceAlerts:[{type: String}],
},{
  timestamps: true,
})

const SubwayLine = mongoose.model('SubwayLine', subwayLineSchema)

export { SubwayLine }
