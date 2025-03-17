let users=[];
let choice;

do{
    console.log(`Đăng ký`);
    console.log(`Đăng nhập`);
    
    choice = +prompt(`Lựa chọn của bạn`);

    switch (choice) {
        case 1:
            signUp();
            break;
        case 2:
            login();
            break;
    
        default:
            console.log(`Lựa chọn không hợp lệ`);
            
    }
}while(choice != 3)

function signUp(){
    let name = prompt(`Nhập tên của bạn`);
    let email = prompt(`Bạn hãy điền tên email`);
    if(!email.includes("@") || (!email.includes(".com") && !email.includes(".vn"))){
        console.log(`Email không hợp lệ`);
        return;
    }
    users.forEach((user)=>{
        if(user.email === email){
            console.log(`Email đã tồn tại`);
            return;           
        }

    })
    let password = prompt(`Nhập mật khẩu của bạn`);
    if(password.length<6){
        console.log(`Độ dài mật khẩu không được nhỏ hơn 6`);
        return;
    }
    if(!/[A-Z]/.test(password) && !/[!@#$%^&*]/.test(password)){
        console.log("Mật khẩu phải có ít nhất một chữ hoa và một ký tự đặc biệt!");
        return;
    }

    users.push({name, email, password});
    console.log(`Đăng ký thành công`);
    
}

function login(){
    let check = false;
    let email = prompt(`Nhập email`);
    let password = prompt(`Nhập password`);
    users.forEach((user)=>{
        if(user.email === email && user.password === password){
            console.log(`Đăng nhập thành công`);  
            check=true;         
        }
    })
    if(!check){
        console.log(`Email hoặc mật khẩu không chính xác`);
        
    }
}