
// let jocks = [
//     {
//         "joke": "थप्पड मारने पर नाराज वाईफ से हसबंड बोला:  ...आदमी उसी को मारता है जिससे वो प्यार करता है.   ..वाईफ ने हसबंड को 2 थप्पड मारे और बोली  ...आप क्या समझते है मै                          आपसे प्यार नही करती ... 😆🤣😋😉",
//     },
//     {
//         "joke": "पत्नी के जन्मदिन पर पति ने पूछा: तुम्हें क्या गिफ्ट चाहिए? पत्नी की इच्छा नई कार लेने की थी। उसने इशारों में कहा: मुझे ऐसी चीज लेकर दो जिस पर मेरे सवार होते ही वो 2 सेकेंड में 0 से 80 पर पहुंच जाए। शाम को पति ने उसे वजन कांटा लाकर दे दिया। पत्नी अभी भी बेहोश है।"
//     },
//     {
//         "joke":  "शादी के दो दिन बाद दूल्हा उस ब्यूटी पार्लर में गया जहां से उसकी बीवी ने शादी के लिए मेकअप करवाया था उसने पार्लर वाली मैडम को आईफोन 7 गिफ्ट किया और थैंक्यू बोलकर चला                         आया मैडम ने खुशी खुशी आईफोन का डब्बा खोला तो उसमें नोकिया 1100 पड़ा था साथ में एक पर्ची भी थी जिस पर लिखा था मुझे भी ऐसा ही महसूस हुआ था😆🤣😋😉 ",
//     },
//     {
//         "joke": "लड़की वालें लड़का देखनें गये...\nलड़की वालें: हमें ऐसा लड़का चाहिए जो,\nकुछ खाता पीता ना हो\nऔर कुछ गलत काम ना करता हो।।\nपंडित जी: फिर तो आपको ऐसा लड़का,\nअस्पताल के ICU वार्ड में मिलेंगा।।"
//     },

//     {
//         "joke": "थप्पड मारने पर नाराज वाईफ से हसबंड बोला:  ...आदमी उसी को मारता है जिससे वो प्यार करता है.   ..वाईफ ने हसबंड को 2 थप्पड मारे और बोली  ...आप क्या समझते है मै                          आपसे प्यार नही करती ... 😆🤣😋😉",
//     },
// ]


// console.log(jocks.length);
// let fun = () => {
//     let a = Math.floor(Math.random() *(jocks.length-1));
//     document.getElementById('jocks').innerHTML=jocks[a].joke;
// }



const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=30';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dfdf202c8emsh74e867fef15dae7p1b8474jsn9bf2f2822963',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
};

let getJokes = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let number=Math.floor(Math.random()*25);
        document.getElementById('jocks').innerHTML=result[number].joke;
    } catch (error) {
        console.error(error);
    }
}