const section = document.querySelector('.section');

const summaryBtn = document.querySelector('.summary__btn');
const summaryArea = document.querySelector('#summary');
const summary = document.querySelector('.summary');

const skillsBtn = document.querySelector('.skills__btn');
const skills = document.querySelector('.skills');
const skillsArea = document.querySelector('#skills');

const contactBtn = document.querySelector('.contact__btn');
const contact = document.querySelector('.contact');
const contactArea = document.querySelector('#contacts');

const codeBtn = document.querySelector('.code__btn');
const code = document.querySelector('.code');
const codeArea = document.querySelector('#code');

const coursesBtn = document.querySelector('.courses__btn');
const courses = document.querySelector('.courses');
const coursesArea = document.querySelector('#courses');

const experienceBtn = document.querySelector('.experience__btn');
const experience = document.querySelector('.experience');
const experienceArea = document.querySelector('#projects');

const educationBtn = document.querySelector('.education__btn');
const education = document.querySelector('.education');
const educationArea = document.querySelector('#education');

const languagesBtn = document.querySelector('.languages__btn');
const languages = document.querySelector('.languages');
const languagesArea = document.querySelector('#languages');


function start() {
   summary.classList.remove('active');
   skills.classList.remove('active');
   contact.classList.remove('active');
   code.classList.remove('active');
   courses.classList.remove('active');
   experience.classList.remove('active');
   education.classList.remove('active');
   languages.classList.remove('active');
}

function addRemove(a) {
   start();
   a.classList.add('active');
   a.scrollIntoView({ block: "center", behavior: "smooth" });
   // Метод Element.scrollIntoView() интерфейса Element прокручивает контейнер родителя элемента так, чтобы элемент, на котором был вызван scrollIntoView(), стал виден пользователю.
}

section.addEventListener('mousemove', function () {
   start();
});


summaryBtn.addEventListener('click', () => addRemove(summary));
summaryArea.addEventListener('click', () => addRemove(summary));

skillsBtn.addEventListener('click', () => addRemove(skills));
skillsArea.addEventListener('click', () => addRemove(skills));

contactBtn.addEventListener('click', () => addRemove(contact));
contactArea.addEventListener('click', () => addRemove(contact));

codeBtn.addEventListener('click', () => addRemove(code));
codeArea.addEventListener('click', () => addRemove(code));

coursesBtn.addEventListener('click', () => addRemove(courses));
coursesArea.addEventListener('click', () => addRemove(courses));

experienceBtn.addEventListener('click', () => addRemove(experience));
experienceArea.addEventListener('click', () => addRemove(experience));

educationBtn.addEventListener('click', () => addRemove(education));
educationArea.addEventListener('click', () => addRemove(education));

languagesBtn.addEventListener('click', () => addRemove(languages));
languagesArea.addEventListener('click', () => addRemove(languages));











