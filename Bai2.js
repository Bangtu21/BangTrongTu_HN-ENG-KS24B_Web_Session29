let items = [];
let choice;

do{
    console.log("MENU");
    console.log("1. Thêm sản phẩm vào danh sách sản phẩm");
    console.log("2. Hiển thị tất cả sản phẩm");
    console.log("3. Hiển thị chi tiết sản phẩm theo id");
    console.log("4. Cập nhật thông tin Sản phẩm(name, price, category, quantity) theo id sản phẩm");
    console.log("5. Xóa sản phẩm theo id");
    console.log("6. Lọc sản phẩm theo khoảng giá");
    console.log("7. Thoát");

    choice = parseInt(prompt("Nhập lựa chọn của bạn"));
    
    switch (choice) {
        case 1:
            addIteam();
            break;
        case 2: 
            showItem();
            break;
        case 3:   
            showAllItem();
            break;
        case 4:
            updateItem();
            break;
        case 5:
            deleteItem();
            break;
        case 6:
            aboutPrice();
            break;
    
        default:
            console.log("Lựa chọn không hơp, hãy chọn lại");
            
    }
}while(choice!=7)

function addIteam(){
    let id = +prompt(`Nhập id sản phẩm`);
    let name = prompt(`Nhập tên sản phẩm`);
    let price = Number(prompt(`Nhập giá sản phẩm`));
    let category = prompt(`Nhập danh mục sản phẩm`);
    let quantity = Number(prompt(`Nhập số lượng sản phẩm`));
    items.push({id, name, price, category, quantity});
}

function showItem(){
    items.forEach((item) => {
        console.log(`Name: ${item.name}| Price: ${item.price}`);      
    })
}

function showAllItem(){
    items.forEach((item) => {
        console.log(`Id: ${item.id}| Name: ${item.name}| Price: ${item.price}| Category: ${item.category}| Quantity: ${item.quantity}`);      
    })
}

function updateItem(){
    let id = +prompt(`Nhập id muốn update`);
    items.forEach((item) => {
        if(item.id===id){
            item.name = prompt(`Nhập tên sản phẩm mới`);
            item.price = prompt(`Nhập giá sản phẩm mới`);
            item.category = prompt(`Nhập danh mục sản phẩm mới`);
            item.quantity = prompt(`Nhập số lượng sản phẩm mới`);
            console.log(`Cập nhật thành công`);
            
        }else{
            console.log(`Không tìm thấy id`);
            
        }
    })
}

function deleteItem(){
    let id = +prompt(`Nhập id muốn xóa`);
    items.forEach((item) => {
        if(item.id===id){
            let index = items.findIndex((item) => item.id === id);
            items.splice(index, 1);
            console.log(`Đã xóa`);
            
        }else{
            console.log(`Không tìm thấy id`);
            
        }
    })
}

function aboutPrice(){
    let minPrice = prompt(`Nhập giá thấp`);
    let maxPrice = prompt(`Nhập giá cao`);

    let filterPrice = items.filter((item)=> minPrice<=item.price && item.price <= maxPrice)
    if(filterPrice.length>0){
        console.log(`Danh sách sản phẩm trong khoảng giá ${minPrice}-${maxPrice}`);   
        filterPrice.forEach((item)=>{
            console.log(`Id: ${item.id}| Name: ${item.name}| Price: ${item.price}| Category: ${item.category}| Quantity: ${item.quantity}`);       
        })
    }else{
        console.log(`Không tìm thấy sản phẩm trong khoảng giá trên`);
        
    }
}