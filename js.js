const summaryBtn = document.querySelector('.summary__btn');
const summary = document.querySelector('.summary');
const skillsBtn = document.querySelector('.skills__btn');
const skills = document.querySelector('.skills');
const contactBtn = document.querySelector('.contact__btn');
const contact = document.querySelector('.contact');
const codeBtn = document.querySelector('.code__btn');
const code = document.querySelector('.code');
const coursesBtn = document.querySelector('.courses__btn');
const courses = document.querySelector('.courses');
const experienceBtn = document.querySelector('.experience__btn');
const experience = document.querySelector('.experience');
const educationBtn = document.querySelector('.education__btn');
const education = document.querySelector('.education');
const languagesBtn = document.querySelector('.languages__btn');
const languages = document.querySelector('.languages');


summaryBtn.addEventListener('click', function () {

   summary.classList.add('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

summary.addEventListener('mousemove', function () {

   summary.classList.add('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})


skillsBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.add('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

skills.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.add('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

contactBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.add('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})
contact.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.add('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

codeBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.add('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})
code.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.add('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

coursesBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.add('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})
courses.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.add('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

experienceBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.add('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})
experience.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.add('active');
   education.classList.remove('active');
   languages.classList.remove('active');

})

educationBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.add('active');
   languages.classList.remove('active');
})
education.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.add('active');
   languages.classList.remove('active');
})

languagesBtn.addEventListener('click', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.add('active');

})
languages.addEventListener('mousemove', function () {

   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.add('active');

})

