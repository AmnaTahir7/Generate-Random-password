let inputbox = document.getElementById("inputbutton");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";
const allchar = uppercase + lowercase + numbers + symbols;
const length = 16;
function generatepassword() {
    let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * uppercase.length)];
  password += symbols[Math.floor(Math.random() * uppercase.length)];
 
     while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];

     }
     inputbox.value = password;
}

function copypassword(){
   inputbox.select();
   document.execCommand("copy");
}