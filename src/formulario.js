class FormSubmit{
    constructor(configuracoes){
        this.configuracoes = configuracoes;
        this.form = document.querySelector(configuracoes.form);
        this.formButton = document.querySelector(configuracoes.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess(){
        this.form.innerHTML = this.configuracoes.success;
    }
    displayError(){
        this.form.innerHTML = this.configuracoes.error;
    }

    init(){
        if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Inscrição Enviada!<h1>",
    error: "<h1 class='error'> Não foi possível realizar sua inscrição.<h1>",
});
formSubmit.init();