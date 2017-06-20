
const nombre =  'Luis Santago';
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Saturday",
  "Sunday"
]

function correr(){
  const min = 5;
  const max = 15;
  return Math.round(Math.random() * (max-min) + 5);
}

let totalKms  = 0;
for(var i = 0; i<days.length;i++){
  const kms = correr();
  totalKms += kms;
  console.log(`el dia ${days[i]} ${nombre} corrio ${kms}kms`);
}
