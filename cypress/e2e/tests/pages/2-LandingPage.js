const url = 'https://my.bizdev.vn/'
const chooseProjBtn = '#dropdownChooseProject'
const dropdownLst = '.list_project'
const myProj = '.list_project li[data-name="hieubh"]'

export class LandingPage {
    get getUrl() {
        return url;
    }
    get getChooseProjBtn() {
        return chooseProjBtn;
    }

    get getDropdownLst() {
        return dropdownLst;
    }

    get getMyProj() {
        return myProj;
    }
}