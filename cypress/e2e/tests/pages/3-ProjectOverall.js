const url = 'https://my.bizdev.vn/du-an/tong-quan/0ecb3d4f-872f-4020-a1e5-b6c693cd1c81'
const bizTicketArea = 'div[data-code="ticket"]'

export class ProjectOverall {
    get getUrl() {
        return url;
    }

    get getBizTicketArea() {
        return bizTicketArea;
    }
}