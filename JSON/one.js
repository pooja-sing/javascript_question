const str='[{"name":"pooja","birth":"1986-12-14","age":20,"city":"allahabad"}]'
const data=JSON.parse(str)
str.birth = new Date(str.birth);
console.log(data)
