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
            },
            {
                question: 'How will will I know what my child\'s day was like?',
                answer: 'Teachers link parents with what their children are doing through weekly and monthly newsletters, and daily information sheets.  We are always available to discuss any concerns that parents may have.'
            },
            {
                question: 'Can I visit my child at school?',
                answer: 'Yes!  Care-A-Lot has an open door policy, and parents are welcome to drop in, unannounced, at any time.'
            },
            {
                question: 'What is the Care-A-Lot curriculum like?',
                answer: 'Our curriculum will be comprised of activities highlighting the following areas:  Language Arts, Creative Art, Mathematics, Science, Music, Sensory Education, Computer Learning, Large Motor Skills, Small Motor Skills, and Pre-Reading.  For more details about our curriculum, please view our Education Model.'
            },
            {
                question: 'How does Care-A-Lot feel about the way children grow and develop?',
                answer: 'At Care-A-Lot we know how important your child\'s early years are.  In Care-A-Lot\'s home-like environment, children feel free to reach out to the people around them.  Please view our Educational Philosophy for further information.'
            },
            {
                question: 'How are the age groups divided in the Care-A-Lot educational program?',
                answer: 'The Care-A-Lot educational program will be divided into 4 separate age and developmental groups.  Please see our Educational Program for further information.'
            },
            {
                question: 'What hours of the day does Care-A-Lot operate?',
                answer: 'We are open and operating Monday through Friday from 7:00am to 6:00pm'
            },
            {
                question: 'How can I get more information?',
                answer: 'Feel free to contact us with any questions!'
            },
            {
                question: 'What have other parents said about Care-A-Lot?',
                answer: 'Please see the testimonials section of our webpage for real parent reviews.'
            }
        ]
    });
});

router.get('/virtual-tour', function (req, res, next) {
    res.render('virtual-tour', {});
});

router.get('/enrollment', function (req, res, next) {
    res.render('enrollment', {});
});

router.get('/contact-us', function (req, res, next) {
    res.render('contact-us', {});
});

module.exports = router;