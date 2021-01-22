const date = require('../getDate.js');

exports.getMainPage = (req, res) => {
    let today = {
        date: date.getDate(),
        weekday: date.getWeekDay(),
    };
    res.render('index.ejs', { date: today });
};