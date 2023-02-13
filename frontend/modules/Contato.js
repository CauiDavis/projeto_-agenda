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

        if (!validator.isEmail(emailInput.value) && telefoneInput.value == '') {
            alert('Pelo menos um contato precisa ser enviado: email ou telefone');
            error = true;
        }
        if(nomeInput.value == ''){
            alert('Nome é um campo obrigatório');
            error = true;
        }
        if(!error) {
            el.submit();
        }
    }
}