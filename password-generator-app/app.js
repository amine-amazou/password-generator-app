new Vue({
    el: '#my-app',
    data: {
        password: "",
    },
    methods: {
        generatePassword: function() {
            let characters = '1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN-@#/*_=:;$';
            this.password = ''
            for(let i=0; i <= 7; i++) {
                this.password += characters[Math.floor(Math.random() * 62)]
            }
        }
    }
});