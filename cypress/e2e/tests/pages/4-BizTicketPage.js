const url = 'https://ticket.bizdev.vn/?project_token=0ecb3d4f-872f-4020-a1e5-b6c693cd1c81'
const createTicketBtn = '.wrap_head ul div:last-child li:last-child'
const createTicketWindow = '#modalCreateTicket .modal-content'
//thuoc nhom cong viec
const bizIdBtn = 'input[name="business_id"]'
const bizIdDropdown = 'div[class="dropdown-menu show"]'
const bizIdSearchBar = 'div[class="dropdown-menu show"] input[placeholder="Tìm kiếm"]'
const bizIdList = 'div[class="dropdown-menu show"] .list-group'
// const currentSelectedBizId = 'div[class="dropdown-menu show"] .list-group > div:first-child'
const otherBizId = 'div[class="dropdown-menu show"] .list-group > div:first-child'
const targetBizId = 'div[class="dropdown-menu show"] .list-group > div:last-child .list'
//loai ticket
const typeTicketBtn = 'input[name="type_ticket"]'
const typeTicketDropdown = 'div[class="dropdown-menu show"]'
const typeTicketSearchBar = 'div[class="dropdown-menu show"] input[placeholder="Tìm kiếm"]'
const typeTicketList = 'div[class="dropdown-menu show"] .list-type'
const recommendedTypeTicket = 'div[class="dropdown-menu show"] .list-type > div:first-child'
const otherTypeTicket = 'div[class="dropdown-menu show"] .list-type > div:last-child'
const targetTypeTicket = 'div[data-name="test"]'
//ten ticket
const ticketName = 'input[name="name_ticket"]'
//mo ta
const iframe = 'iframe[title="Bộ soạn thảo văn bản có định dạng, editor"]'
//file dinh kem
const attachBtn = 'a[class="btn-add-file d-inline-flex flex-column align-items-center btn-open-upload-file2"]'
//xuat hien man upload file
const attachWindow = '#modalUploadFile3 div[class="modal-content"]'
const uploadBtn = '#modalUploadFile3 div[class="modal-body"] label img'
const uploadInput = '#modalUploadFile3 div[class="modal-body"] label input'
const uploadedFileName = '.list-file-selected div[class="d-flex justify-content-between w-100"] > div[class="name"]'
const totalFileUploaded = '.title .count-select'
const selectedFileList = 'div[class="row list-select"]'
const deletedBtn = 'a[class="btn-remove d-flex"]'
const confirmUploadBtn = 'button[class="btn btn-bg-b btn-bizfly btn-submit-add-file "]'
const cancelUploadBtn = 'button[class="btn btn-bg-w btn-bizfly closeFileHeader"]'
//quay tro lai man tao ticket moi
const attachedFileName = 'div[class="list-file-0 full list-file-upload   row"] div[class="name"]'
const removeBtn = 'div[class="list-file-0 full list-file-upload   row"] div[class="btn-remove-attach d-flex"]'
//xet duyet link/text
const addLinkTextBtn = 'a[class="btn-add-link"]'
const inputField = 'div[class="bl-create-approval-link mb-3"] input[type="text"]'
const saveBtn = 'a[class="btn-bg-b btn-bizfly btn-submit mr-3"]'
const cancelAddLinkTextBtn = 'a[class="btn-bg-w btn-bizfly btn-cancel-link_text"]'
//nguoi xu ly
const handlerListBtn = 'span[data-select2-id="select2-data-33-nz9n"] span[class="select2-selection select2-selection--multiple bizfly-member-selection"]'
const handlertList = '.select2-results'
const userSelectOption = '#select2--result-je7f-629ebe65b7255e632546480b'
const emailOfSelectedUser = '#select2--result-je7f-629ebe65b7255e632546480b .text-result-2'
const emailDisplayAfterSelected = '.select2-selection__choice__display .text-select'
//ngay het han
const expireDateInput = 'input[name="expire_time_ticket"]'
const expireDateWindow = '#modalCalendarTimeExpiredHandleNomal .modal-content'
const selectedExpireDate = 'input[class="input-bizfly form-control input-date-expired-handle-nomal bl-tt-created-date-expired-choose flatpickr-input"]'
const selectTimeBox = 'div[class="boxCalendarExpiredHandleNomal d-flex justify-content-center"] ~ div[class="d-flex mx-3"] .parent-input-time'
const selectHrBox = 'div[class="flatpickr-calendar hasTime noCalendar animate arrowTop arrowRight open"] input[class="numInput flatpickr-hour"]'
const selectMinBox = 'div[class="flatpickr-calendar hasTime noCalendar animate arrowTop arrowRight open"] input[class="numInput flatpickr-minute"]'
const reminderTimeTickBox = 'input[id="ckb25311_0"]'
const reminderTimeField = 'div[class="parent-input pl-4 ml-2 mt-2 time2T"] span[class="select2-selection select2-selection--multiple bizfly-multiple-selection"]'
const reminderTimeList = '.select2-results'
const reminderTimeOptions = '.select2-results > li'
const remiderProgressTickBox = 'input[id="ckb25321_0"]'
const reminderProgressField = 'div[class="parent-input pl-4 ml-2 mt-2 time2T"] span[class="select2-selection select2-selection--multiple bizfly-multiple-selection"]'
const reminderProgressList = '#select2--results'
const reminderProgressOptions = '#select2--results > li'
const expireDateCancelBtn = 'div[class="d-flex justify-content-end my-3"] a[class="btn-bg-w btn-bizfly mr-3 bl-cancel-choose-end-date-create-ticket"]'
const expireDateSaveBtn = 'div[class="d-flex justify-content-end my-3"] a[class="btn-bg-w btn-bizfly mr-3 bl-cancel-choose-end-date-create-ticket"] ~ a'
//quay tro lai man tao ticket moi 
const expireDateField = 'input[name="expire_time_ticket"]'
const priorityField = 'div[class="form-group do_uu_tien"] span[class="select2-selection select2-selection--single bizfly-single-selection"]'
const priorityList = '#select2-priority_ticket-results'
const priortiyOptions = '#select2-priority_ticket-results > li'
const createNewTicketBtn = 'button[class="btn btn-bizfly btn-create-business createdTicket"]'
const cancelCreateNewTicketBtn = 'button[class="btn btn-bizfly btn-close mr-3 cancelCreatedTicket"]'

export class BizTicketPage {
    get getUrl() {
        return url
    }

    get getCreateTicketBtn() {
        return createTicketBtn;
    }

    get getCreateTicketWindow() {
        return createTicketWindow
    }

    get getBizIdBtn() {
        return bizIdBtn
    }

    get getBizIdDropdown() {
        return bizIdDropdown
    }

    get getBizIdSearchBar() {
        return bizIdSearchBar
    }

    get getBizIdList() {
        return bizIdList;
    }

    get getCurrentSelectedBizId() {
        return currentSelectedBizId
    }

    get getOtherBizId() {
        return otherBizId
    }

    get getTargetBizId() {
        return targetBizId
    }

    get getTypeTicketBtn() {
        return typeTicketBtn
    }

    get getTypeTicketSearchBar() {
        return typeTicketSearchBar
    }

    get getTypeTicketDropdown() {
        return typeTicketDropdown
    }

    get getTypeTicketList() {
        return typeTicketList
    }

    get getRecommendedTypeTicket() {
        return recommendedTypeTicket
    }

    get getOtherTypeTicket() {
        return otherTypeTicket
    }

    get getTargetTypeTicket() {
        return targetTypeTicket
    }

    get getTicketName() {
        return ticketName
    }

    get getIframe() {
        return iframe
    }

    get getIFrameTextField() {
        return iFrameTextField
    }

    get getAttachBtn() {
        return attachBtn
    }

    get getAttachWindow() {
        return attachWindow
    }

    get getUploadBtn() {
        return uploadBtn
    }

    get getUploadInput() {
        return uploadInput
    }

    get getUploadedFileName() {
        return uploadedFileName
    }
    get getTotalFileUploaded() {
        return totalFileUploaded
    }
    get getSelectedFileList() {
        return selectedFileList
    }
    get getDeleteBtn() {
        return deletedBtn
    }
    get getConfirmUploadBtn() {
        return confirmUploadBtn
    }
    get getCancelUploadBtn() {
        return cancelUploadBtn
    }
    get getAttachedFileName() {
        return attachedFileName
    }
    get getRemoveBtn() {
        return removeBtn
    }
    get getAddLinkTextBtn() {
        return addLinkTextBtn
    }
    get getInputField() {
        return inputField
    }
    get getSaveBtn() {
        return saveBtn
    }
    get getCancelAddLinkTextBtn() {
        return cancelAddLinkTextBtn
    }
    get getHandlerListBtn() {
        return handlerListBtn
    }
    get getHandlerList() {
        return handlertList
    }
    get getUserSelectOption() {
        return userSelectOption
    }
    get getEmailOfSelectedUser() {
        return emailOfSelectedUser
    }

    get getEmailDisplayAfterSelected() {
        return emailDisplayAfterSelected
    }

    get getExpireDateInput() {
        return expireDateInput
    }
    get getExpireDateWindow() {
        return expireDateWindow
    }
    get getSelectedExpireDate() {
        return selectedExpireDate
    }
    get getSelectTimeBox() {
        return selectTimeBox
    }
    get getSelectHrBox() {
        return selectHrBox
    }
    get getSelectMinBox() {
        return selectMinBox
    }
    get getReminderTimeTickBox() {
        return reminderTimeTickBox
    }
    get getReminderTimeField() {
        return reminderTimeField
    }
    get getReminderTimeLiist() {
        return reminderTimeList
    }
    get getReminderTimeOptions() {
        return reminderTimeOptions
    }
    get reminderProgressTickBox() {
        return remiderProgressTickBox
    }
    get getReminderProgressField() {
        return reminderProgressField
    }
    get getReminderProgressList() {
        return reminderProgressList
    }
    get getReminderProgressOptions() {
        return reminderProgressOptions
    }
    get getExpireDateCancelBtn() {
        return expireDateCancelBtn
    }
    get getExpireDateSaveBtn() {
        return expireDateSaveBtn
    }
    get getExpireDateField() {
        return expireDateField
    }
    get getPriorityField() {
        return priorityField
    }
    get getPriorityList() {
        return priorityList
    }
    get getPriortiyOptions() {
        return priortiyOptions
    }
    get getCreateNewTicketBtn() {
        return createNewTicketBtn
    }
    get getCancelCreateNewTicketBtn() {
        return cancelCreateNewTicketBtn
    }
}





