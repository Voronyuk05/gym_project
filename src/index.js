import testTpl from './test.handlebars';

document.body.insertAdjacentHTML(
    'beforeend', 
    testTpl({discription: 'This is my template'})
    )