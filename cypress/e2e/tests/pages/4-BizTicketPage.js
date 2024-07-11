const url = 'https://ticket.bizdev.vn/?project_token=0ecb3d4f-872f-4020-a1e5-b6c693cd1c81'
const createTicketBtn = '.wrap_head ul div:last-child li:last-child'
const createTicketWindow = '#modalCreateTicket .modal-content'
//thuoc nhom cong viec
const bizIdBtn = 'input[name="business_id"]'
const bizIdDropdown = 'div[class="dropdown-menu show"]'
const bizIdSearchBar = 'div[class="dropdown-menu show"] input[placeholder="Tìm kiếm"]'
const bizIdList = 'div[class="dropdown-menu show"] .list-group'
const currentSelectedBizId = 'div[class="dropdown-menu show"] .list-group > div:first-child'
const otherBizId = 'div[class="dropdown-menu show"] .list-group > div:first-child'
const targetBizId = 'div[class="dropdown-menu show"] .list-group > div:last-child .list'
//loai ticket
const typeTicketBtn = 'input[name="type_ticket"]'
const typeTicketSearchBar = 'input[name="type_ticket"] input[placeholder="Tìm kiếm"]'
const typeTicketDropdown = 'div[class="dropdown-menu show"]'
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
const uploadBtn = '#modalUploadFile3 div[class="modal-body"] input'
const uploadedFileName = '.list-file-selected div[class="d-flex justify-content-between w-100"] > div[class="name"]'
const totalFileUploaded = '.title .count-select'
const selectedFileList = 'div[class="row list-select"]'
const deletedBtn = 'a[class="btn-remove d-flex"]'
const confirmUploadBtn = 'button[class="btn btn-bg-b btn-bizfly btn-submit-add-file"]'
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
const reminderTimeList = ''





