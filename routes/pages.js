var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {});
});

router.get('/classrooms', function (req, res, next) {
    res.render('classrooms', {});
});

router.get('/about-us', function (req, res, next) {
    res.render('about-us', {});
});

router.get('/faq', function (req, res, next) {
    res.render('faq', {
        faqs: [
            {
                question: 'How long has Care-A-Lot been in operation?',
                answer: 'Care-A-Lot Early Learning Centers has been family owned and operated for over 20 years, under the same owner, established 1986.'
            },
            {
                question: 'What is the teacher/student ratio?',
                answer: 'Our teacher/student ratios are as follows:  Toddlers: 1 to 5; Preschool: 1 to 8; Pre-Kindergarten: 1 to 10.'
            },
            {
                question: 'What kind of meals are available to the children at Care-A-Lot?',
                answer: 'All of our meals are prepared on site.  Every day the children will enjoy breakfast (served until 8:30am), a morning snack, a hot lunch, and an afternoon snack.  All menus are approved by the Chicago Department of Health, and all meals are kid friendly and healthy!'
            },
            {
                question: 'What is the experience level of the teachers at Care-A-Lot?',
                answer: 'On average, our teachers have 8 years of experience teaching, and we work through a robust selection process with each of our teachers to ensure they are able to meet our standards.'
            },
            {
                question: 'What kind of certifications do your teachers have?',
                answer: 'Our teachers are certified in First Aid, CPR, Food and Sanitation, and Mildly Infectious Disease.'
            }
        ]
    });
});

router.get('/virtual-tour', function (req, res, next) {
    res.render('virtual-tour', {});
});

router.get('/margaret', function (req, res, next) {
    res.render('index_secret', {});
});

module.exports = router;