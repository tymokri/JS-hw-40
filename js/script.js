'use strict';

(() => {
    document
        .querySelector('#form')
        .addEventListener(
            'submit',
            (event) => {
                event.preventDefault();
                const {target: form} = event;
                const inputs = form.querySelectorAll('input, select, textarea');
                const formData = {};

                for(let input of inputs) {
                    const {name, value} = input;
                    formData[name] = value;
                }
                localStorage.setItem('formData', JSON.stringify(formData));
            }
        )
})();