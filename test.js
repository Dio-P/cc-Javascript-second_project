const wikiData = {"_id":{"$oid":"622f73433f7890424e3d5786"},"result":"{\"conflict\":\"Battle of Adwalton Moor\",\"image\":\"Battle Plaque at Adwalton Moor - geograph.org.uk - 1069183.jpg\",\"image_size\":\"300\",\"caption\":\"West Yorkshire and Adwalton\",\"partof\":\"the First English Civil War\",\"date\":\"{{start date and age|1643|06|30|df=y}}\",\"place\":\"Adwalton, Yorkshire\",\"coordinates\":\"{{Coord|53.751|-1.664|type:event_region:GB|display=title}}\",\"result\":\"Royalist Victory\",\"combatant1\":\"{{flagicon image|Royal Standard of England (1603–1689).svg|size=22px}} Royalists\",\"combatant2\":\"22px Parliamentarians\",\"commander1\":\"Earl of Newcastle\",\"commander2\":\"Lord FairfaxSir Thomas FairfaxMajor General Gifford\",\"strength1\":\"4,000 foot soldiers{{sfn|MacKenzie|2020}}3,000 horse\",\"strength2\":\"6,000 foot soldiers{{sfn|MacKenzie|2020}}1,500 horseLocal countrymen\",\"casualties1\":\"200 killed{{sfn|MacKenzie|2020}}300 wounded\",\"casualties2\":\"500 killed{{sfn|MacKenzie|2020}}1,500 captured\",\"lat1_deg\":\"53.751\",\"lon1_deg\":\"-1.664\",\"position1\":\"right\",\"label1\":\"Adwalton\",\"lat2_deg\":\"53.8\",\"lon2_deg\":\"-1.75\",\"position2\":\"left\",\"label2\":\"Bradford\",\"lat3_deg\":\"53.799722\",\"lon3_deg\":\"-1.549167\",\"label3\":\"Leeds\",\"lat4_deg\":\"53.722642\",\"lon4_deg\":\"-1.614974\",\"position4\":\"right\",\"label4\":\"Batley\"}"}

const string = JSON.stringify(wikiData)
// console.log(string);
// const removeSlash = string.replace(/\\/g, '')
// do not remove slashes - needed for object

// const cleanString = removeSlash.substring(0, (removeSlash.length-1))
const finalObject = JSON.parse(string)
// slice

console.log(finalObject);


// const stringCleaner = (input) => { 
//     const i = input.length-1
//     input.replace(/\\/g, '')
//     .then (res => JSON.parse(res))
//     .then (res => res.slice(-1))
// return res}

// stringCleaner(wikiData)

//Tags:
// partof
// place

// _id
// :
// 6230749bea2337e623267fb4
// conflict
// :
// "Battle of Adwalton Moor"
// image
// :
// "Battle Plaque at Adwalton Moor - geograph.org.uk - 1069183.jpg"
// image_size
// :
// "300"
// caption
// :
// "West Yorkshire and Adwalton"
// partof
// :
// "the First English Civil War"
// date
// :
// "{{start date and age|1643|06|30|df=y}}"
// place
// :
// "Adwalton, Yorkshire"
// coordinates
// :
// "{{Coord|53.751|-1.664|type:event_region:GB|display=title}}"
// result
// :
// "Royalist Victory"
// combatant1
// :
// "{{flagicon image|Royal Standard of England (1603–1689).svg|size=22px}}..."
// combatant2
// :
// "22px Parliamentarians"
// commander1
// :
// "Earl of Newcastle"
// commander2
// :
// "Lord FairfaxSir Thomas FairfaxMajor General Gifford"
// strength1
// :
// "4,000 foot soldiers{{sfn|MacKenzie|2020}}3,000 horse"
// strength2
// :
// "6,000 foot soldiers{{sfn|MacKenzie|2020}}1,500 horseLocal countrymen"
// casualties1
// :
// "200 killed{{sfn|MacKenzie|2020}}300 wounded"
// casualties2
// :
// "500 killed{{sfn|MacKenzie|2020}}1,500 captured"
// lat1_deg
// :
// "53.751"
// lon1_deg
// :
// "-1.664"
// position1
// :
// "right"
// label1
// :
// "Adwalton"
// lat2_deg
// :
// "53.8"
// lon2_deg
// :
// "-1.75"
// position2
// :
// "left"
// label2
// :
// "Bradford"
// lat3_deg
// :
// "53.799722"
// lon3_deg
// :
// "-1.549167"
// label3
// :
// "Leeds"
// lat4_deg
// :
// "53.722642"
// lon4_deg
// :
// "-1.614974"
// position4
// :
// "right"
// label4
// :
// "Batley"