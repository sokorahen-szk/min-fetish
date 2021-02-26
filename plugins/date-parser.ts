import Vue from 'vue';
import moment from 'moment';

export const dateParser =  (date: Date, suffix: String = '') => {
    const d = moment(date);
    const n = moment();
    const days = n.diff(d, 'days');

    let text = null;

    if (days == 0){ text = '今日' }
    else if (days == 1) { text = '昨日' }
    else if (days < 365) { text = `${days}日 ${suffix}` }
    else if (days >= 366) { text = `${Math.ceil(days/365)}年${suffix}` };

    return text;
}

Vue.prototype.$dateParser = dateParser;