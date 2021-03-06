var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// 제목, 간단한 설명, 도시, 주소, 숙소 요금, 편의시설, 이용 규칙
// 변수 모아 놓은 것
// attender = 예약요청한사람
var schema = new Schema({
  //추가
//  city : {type: Schema.Types.ObjectId},
  user : {type: Schema.Types.ObjectId},
  post : {type: Schema.Types.ObjectId},
  postTitle: {type: String},
  numberOfPerson : {type: Number},
  attender: {type: Schema.Types.ObjectId},
  attenderName: {type: String},
  attenderEmail: {type: String},
  checkIn: {type: String},
  checkOut: {type: String}
},{
  toJSON: { virtually: true},
  toObject: {virtually: true}
});

var Reserve = mongoose.model('Reserve', schema);

module.exports = Reserve;
