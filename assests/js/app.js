let ValidationForm = document.getElementById('login-regest');
let btnAllowed = document.getElementById('btn-allowed');
btnAllowed.addEventListener('click',(e) =>{
    e.preventDefault();
        //    preventDefault;
        ValidationForm.style.visibility ="hidden";
        checkIcon.style.visibility ="hidden";
        exclamIcon.style.visibility ="hidden";
        errorMassge.style.visibility ="hidden";
}    
);