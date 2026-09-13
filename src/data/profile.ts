import profile_img from '../assets/images/personal/profile.png'


// import profile_img from '../assets/images/personal/profile_ninel.png'

const FOOTER_TEXT = {
    fall: '｀、ヽ(ノ＞＜)ノ ｀、ヽ｀☂ ',
    winter: '(｡•́ ︿ •̀｡) ｀、ヽ｀❄',
    spring: '✿ヽ(°▽°)ノ✿ °｡⋆⸜ 🌸⋆｡°',
    summer: '(；  ﾉД`) ﾉ  ☀️  '
}

function getCurrentSeason (){
    const month = new Date().getMonth() +1
    if(month >=3 && month <=5 ) return 'spring'
    else if (month >=6 && month <= 8) return 'summer'
    else if (month>=9 && month <=11) return 'fall'
    else return 'winter'
}
const currSeason = FOOTER_TEXT[getCurrentSeason()]

export const profile = {
    NICKNAME: "Кир",
    DESCRIPTION: "(( _ _ ))..zzzZ",
    IMAGE: profile_img,
    FOOTER: currSeason
}

//  \n [] <- ебейшая кириешка