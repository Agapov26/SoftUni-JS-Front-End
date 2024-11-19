function extractText() {

    const listElements = document.querySelectorAll('ul li')
    const textAreaElement = document.querySelector('#result')

    console.log();

    textAreaElement.value = [...listElements].map(el => el.textContent.trim()).join('\n').trim();
}