
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const {actionssdk} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('<speak> ' +
    ' अपना नाम और अपने क्रश का पहला नाम कहें!।.</speak>');
});

app.intent('actions.intent.TEXT', (conv, input) => {
var L=7,O=1,V=9,E=3,com=1;
var rawInput = input ;
var p = rawInput.toString().split(' और ');
if (input ==='अलविदा') {
  return conv.close('अलविद');
}
  if(typeof(p[1])==="undefined")
  {
    p = rawInput.split(' ');
  }
  if(typeof(p[1])==="undefined")
  {
    return conv.ask('<speak>दो नाम दर्ज करें, हालांकि हम जानते हैं कि आप अपने लिए सर्वश्रेष्ठ हैं !.</speak>');
  }

    if(typeof(p[3])!=="undefined")
    {
      conv.ask('<speak>सही नाम बताओ.</speak>');
    }
  for(var j=0;j<p[0].length;j++)
  {
    if(p[0][j]==='l')
    L++;
    if(p[0][j]==='o')
    O++;
    if(p[0][j]==='v')
    V++;
    if(p[0][j]==='e')
    E++;
  }
for( j=0;j<p[1].length;j++)
{
  if(p[1][j]==='l')
  L++;
  if(p[1][j]==='o')
  O++;
  if(p[1][j]==='v')
  V++;
  if(p[1][j]==='e')
  E++;
}
for(var i=0;i<p[0].length;i++){
  for( j=0;j<p[1].length;j++){
    if(p[1][j]===p[0][i])
    com++;
  }
}
var ans=((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E)+com+L+O+V+E)%100
if(ans<50)
ans=ans*2;
if(ans<20)
ans=ans*2;
if(ans>42&&ans<47)
ans=ans+40;
if(p[1]==='अर्पित'||p[0]==='अर्पित')
ans=100;
if(ans<20)
  return  conv.ask('<speak>आपका स्कोर है ' +
    ans +' प्रतिशत। वैसे आपको यह पक्का है क्योंकि ऐसा लग रहा है कि आप दोनों के बीच कुछ गायब है। आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
if(ans<40)
  return  conv.ask('<speak>आपका स्कोर है ' +
    ans +' प्रतिशत।. प्रतिशत कम लगता है, लेकिन मुझे पता है कि आप हमें गलत साबित करेंगे! आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
if(ans<60)
  return  conv.ask('<speak>आपका स्कोर है' +
    ans +' प्रतिशत।. मुझे लगता है कि यह आपकी तरफ से एकदम सही है, लेकिन दूसरे छोर से बहुत अच्छा नहीं लग रहा है। आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
if(ans<70)
      return  conv.ask('<speak>आपका स्कोर है ' +
        ans +' प्रतिशत।. चिंता मत करो अपने उपनाम का इस्तेमाल करें स्कोर में वृद्धि हो सकती है कोशिश करो!. आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
if(ans<88)
  return  conv.ask('<speak>आपका स्कोर है' +
    ans +' प्रतिशत। यह अच्छा है, अपने बच्चों का नामकरण शुरू करें। आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
if(ans<100)
  return  conv.ask('<speak> आपका स्कोर है' +
    ans +'प्रतिशत। मुझे लगता है कि यह कहना गलत नहीं होगा कि आप दोनों एक दूसरे के लिए परफेक्ट हैं।. आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें। </speak>');
if(ans===100)
      return  conv.ask('<speak>आपका स्कोर है 100 प्रतिशत। या तो आप दोनों एक दूसरे के लिए बने हैं या आप डेवलपर से प्यार करते हैं !!. आप अन्य नामों की कोशिश कर सकते हैं, हम किसी को नहीं बताएंगे! लेकिन अगर आप छोड़ना चाहते हैं तो उसके लिए अलविदा कहें।</speak>');
});

exports.myfunctionhindi = functions.https.onRequest(app);
