const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}
const formatNextDate = unixTime => {
  let nowTime = new Date().getTime() + 1000 * 60 * 60 * 24
  unixTime = unixTime ? unixTime : nowTime
  let date = new Date(parseInt(unixTime))
  let year = date.getFullYear()
  let month = "0" + (date.getMonth() + 1)
  let day = "0" + date.getDate()
  return year + '-' + month.substring(month.length - 2, month.length) + '-' + day.substring(day.length - 2, day.length)
}

const formatEndDate = date => {
  date = new Date()
  const year = date.getFullYear()+2
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const deleteData = (item, data) => {
  data.forEach(function (value, index) {
    if (item.id == value.id) {
      data.splice(index, 1);
    }
  });
  return data
}

const addId = data => {
  data.forEach(function (value, index) {
    value.id = index;
  });
  return data
}
const matchBillCodeDtos = data => {
  data.forEach(function (value, index) {
    delete value.id;
  });
  return data
}

const includeTaxCosts = data => {
  let state = false;
  data.forEach(function (value, index) {
    if (value.includeTaxCosts>=10){
      state = true; 
    }
  });
  return state
}
const selectBankName = (msg,data) => {
  let resultData = [];
  data.forEach(function (value, index) {
    if (value.codeName.indexOf(msg)>-1) {
      resultData.push(value)
    }
  });
  return resultData
}

const selectBranchName = (msg, data) => {
  let resultData = [];
  data.forEach(function (value, index) {
    if (value.shortName.indexOf(msg) > -1) {
      console.log(msg)
      resultData.push(value)
    }
  });
  return resultData
}
module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatNextDate: formatNextDate,
  formatEndDate: formatEndDate,
  addId: addId,
  deleteData: deleteData,
  matchBillCodeDtos: matchBillCodeDtos,
  includeTaxCosts: includeTaxCosts,
  selectBankName: selectBankName,
  selectBranchName: selectBranchName
}



