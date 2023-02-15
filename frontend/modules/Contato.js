import validator from "validator";

export default class Contato {
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
        const nomeInput = el.querySelector('input[name="nome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(emailInput.value == '' && telefoneInput.value == '') {
            document.getElementById('span4').style.display = 'block';
            document.getElementById('span3').style.display = 'block';
            document.getElementById('span1').style.display = 'none';
            error = true;
        }
        if(nomeInput.value == ''){
            document.getElementById('span4').style.display = 'none';
            document.getElementById('span3').style.display = 'none';
            document.getElementById('span1').style.display = 'block';
            error = true;
        }
        if(!error) {
            el.submit();
        }
    }
}