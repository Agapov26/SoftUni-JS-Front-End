document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
   const formEl = document.querySelector('#task-input');
   const contentEl = document.querySelector('#content');

   formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const sections = formEl.querySelector('input[type="text"]').value.split(', ');

      console.log(sections)

      sections.forEach(el => {

         const newDivEl = document.createElement('div')
         const newPeL = document.createElement('p');

         newPeL.textContent = el;
         newPeL.style.display = 'none';

         newDivEl.append(newPeL);
         newDivEl.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block';
         })
         contentEl.append(newDivEl);

      })
   });
}