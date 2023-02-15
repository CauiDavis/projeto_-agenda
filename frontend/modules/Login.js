import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        
    }
    
    init() {
        this.events();
    }
    
    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            document.getElementById('span5').style.display = 'block';
            document.getElementById('span7').style.display = 'block';
            document.getElementById('span6').style.display = 'none';
            document.getElementById('span8').style.display = 'none';
            error = true;
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            document.getElementById('span5').style.display = 'none';
            document.getElementById('span7').style.display = 'none';
            document.getElementById('span6').style.display = 'block';
            document.getElementById('span8').style.display = 'block';
            error = true;
        }
        if(!error) {
            el.submit();
        }
    }
}