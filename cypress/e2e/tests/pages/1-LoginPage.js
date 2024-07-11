const url = 'https://my.bizdev.vn/login'
const iframe = 'iframe[id="embed_login"]'
const email = 'input[name="account"]'
const continueBtn = '.btn-login'
const password = 'input[type="password"]'
const loginBtn = 'button'

export class LoginPage {
    get getUrl() {
        return url;
    }

    get getIframe() {
        return iframe;
    }
    get getEmail() {
        return email;
    }

    get getContinueBtn() {
        return continueBtn;
    }

    get getPassword() {
        return password;
    }

    get loginBtn() {
        return loginBtn;
    }
}