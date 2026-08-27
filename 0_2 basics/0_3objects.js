const Jsuser={
    name:"John",
    age:30,
    email:"john@example.com",
    city:"New York",
    isLoggedIn: true,
    lastLogin: "2023-06-01",
    lastLoginDays: ["Monday",'Tuesday']
}
console.log(Jsuser.lastLogin);
console.log(Jsuser.email);
function getUserInfo(user){
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, City: ${user.city}, Logged In: ${user.isLoggedIn}, Last Login: ${user.lastLogin}`;
}
console.log(getUserInfo(Jsuser));