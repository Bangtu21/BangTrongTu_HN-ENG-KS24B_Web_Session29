let contacts =[];
let choice;
do{
    console.log("MENU");
    console.log("1. Thêm đối tượng Contact vào danh sách liên hệ");
    console.log("2. Hiển thị danh sách danh bạ");
    console.log("3. Tìm kiếm thông tin Contact theo số điện thoại");
    console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id");
    console.log("5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id");
    console.log("6. Thoát");

    choice = parseInt(prompt("Nhập lựa chọn của bạn"));
    
    switch (choice) {
        case 1:
            addContact();           
            break;
        case 2: 
            showContact();       
            break;
        case 3:   
            searchPhone();        
            break;
        case 4:
            updateContact()           
            break;
        case 5:
            deleteContact()           
            break;
    
        default:
            console.log("Lựa chọn không hơp, hãy chọn lại");
            
    }
}while(choice!=6)

function addContact(){
    let id = +prompt(`Nhập id`);
    let name = prompt(`Nhập tên`);
    let email = prompt(`Nhập email`);
    let phone = Number(prompt(`Nhập số điện thoại`));
    contacts.push({id, name, email, phone});
}

function showContact(){
    contacts.forEach((contact) => {
        console.log(`Id: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);      
    })
}

function searchPhone(){
    let phone = Number(prompt(`Nhập số điện thoại cần tìm`));
    let check = contacts.filter((contact) => contact.phone===phone)
    check.forEach((contact)=>{
        console.log(`Đã tìm thấy: Id: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        
    })
}

function updateContact(){
    let id = +prompt(`Nhập id muốn update`);
    contacts.forEach((contact) => {
        if(contact.id===id){
            contact.name = prompt(`Nhập tên mới`);
            contact.email = prompt(`Nhập email mới`);
            contact.phone = prompt(`Nhập số điện thoại mới`);
            console.log(`Cập nhật thành công`);
            
        }else{
            console.log(`Không tìm thấy id`);
            
        }
    })
}

function deleteContact(){
    let id = +prompt(`Nhập id muốn xóa`);
    contacts.forEach((contact) => {
        if(contact.id===id){
            let index = contacts.findIndex((contact) => contact.id === id);
            contacts.splice(index, 1);
            console.log(`Đã xóa`);
            
        }else{
            console.log(`Không tìm thấy id`);
            
        }
    })
}


