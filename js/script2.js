'use strict';

(() => {
    const dataItems = localStorage.getItem('formData');
    const formDataObj = JSON.parse(dataItems);
    const formDataItems = Object.entries(formDataObj);

    if(formDataItems.length === 0) {
        const ul = document.querySelector('.ul-form');
        const li = document.createElement('li');
        ul.append(li.innerText = 'There is no information');

    } else {
        const ul = document.querySelector('.ul-form');

        for(let i = 0; i < formDataItems.length; i += 1) {
            const li = document.createElement('li');
            li.innerHTML = `${formDataItems[i][0]}` + ' : ' + `${formDataItems[i][1]}`;
            ul.append(li);
        }
    }
})();