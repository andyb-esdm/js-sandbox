const controls = document.querySelectorAll('.control');

controls.forEach(control => {
    updateStatus(control);

    control.addEventListener('focus', (e) => {
        control.parentElement.classList.add('focus');
    });
    control.addEventListener('blur', (e) => {
        control.parentElement.classList.remove('focus');
    });
    control.addEventListener('input', function(e)  {
        updateStatus(this);
    });

    function updateStatus(control) {
        const length = control.value.length;
        const maxlength = control.getAttribute('maxlength');
        if (maxlength !== null && maxlength !== '') {
            control.nextElementSibling.innerHTML = `${length} / ${maxlength}`;
        } else {
            control.nextElementSibling.innerHTML = `${length}`;
        }
        
    }
    
})
