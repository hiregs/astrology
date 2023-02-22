// Predictions 
const horoscope = [
    // PR1
    'Your energy and ambition are at an all-time high. Use this motivation to tackle new challenges and pursue your goals with confidence.',
    // PR2
    'It\'s time to slow down and take a breath. Focus on self-care and taking care of your mental and emotional wellbeing. Trust that the universe has a plan for you.',
    // PR3
    'This is a good time to focus on your home and family life, Cancer. Nurture your relationships with loved ones and create a cozy and comfortable environment for yourself.',
    // PR4
    'You may be feeling extra confident and charismatic this week. Use your natural charm to network and build new connections, but be careful not to come across as arrogant.',
    // PR5
    'Your attention to detail and analytical skills will be put to the test. Stay organized and focused, and trust in your abilities to handle any challenges that come your way.',
    // PR6 
    'Communication is key this week. Be honest and clear in your interactions with others, and avoid making assumptions or jumping to conclusions.']
const activity = ['Bunji-Jumping','Skating','Reading','Coding','Bouldering','Dancing']
// randomisers
let r1 = Math.floor(Math.random() * 6)
// starsigns
let starSign = {
    Aries:{birth: 'March 21 - April 19'},
    Taurus:{birth: 'April 20 - May 20'},
    Gemini:{birth: 'May 21 - June 20' }, 
    Cancer:{birth:'June 21 - July 22' }, 
    Leo:{birth:'July 23 - August 22' }, 
    Virgo:{birth:'August 23 - September 22' }, 
    Libra:{birth:'September 23 - October 22' }, 
    Scorpio:{birth:'October 23 - November 21' }, 
    Sagittarius:{birth:'November 22 - December 21' }, 
    Capricorn:{birth:'December 22 - January 19' }, 
    Aquarius:{birth:'January 20 - February 18' }, 
    Pisces:{birth:'February 19 - March 20' }}


const predict = sign => {
    return sign+', you were born '+starSign[sign]['birth']+". Your horoscope for today is: "+horoscope[r1]+'The new activity to try today is...'+activity[r1]+'.'
}

console.log(predict('Scorpio'))