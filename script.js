function registerfn()
{   console.log("hello")
    acc={
    accountno:accno.value,
    username:username.value,
    password:pass.value,
    balance:0
}
    if(acc.accountno==""||acc.username==""||acc.password=="")
    {
        alert("Fill all details")
    }
     else if(acc.accountno in localStorage)
    {
        alert("Account Number Already Exists")

    }
    else{
             
      localStorage.setItem(acc.accountno,JSON.stringify(acc))
      alert("Account Registered")
      window.location="./login.html"
    }
}

function loginfn()
{  
    var data=JSON.parse(localStorage.getItem(accnolog.value))
    
    
    if(accnolog.value==""||accnolog.value=="")
    {
        alert("Fill all details")
    }
    
    else if (!(accnolog.value in localStorage ))
    {
    alert("Account Doesn't Exist")
    
    }
    else if(data['password']===passlog.value)
    {   
        alert("Login Successfull")
        localStorage.setItem("currentuser",accnolog.value)
        window.location="./dashboard.html"
        
        welcomeuser.innerHTML=`Welcome ${JSON.parse(localStorage.getItem(accnolog)).username}`

    }
    else
    {
        alert("Incorrect Password")
    }
}

function logoutfn()
{
    localStorage.removeItem('currentuser')
    window.location='./index.html'
}


var usrid=localStorage.getItem('currentuser')
var usr=JSON.parse(localStorage.getItem(usrid))
var usrname=usr.username
welcomeuser.innerHTML=`Welcome ${usrname}`


function depositfn()
{   
    if(depoamt.value==""||depoacc.value=="")
{
    alert("Enter full details")

}
else if(depoacc.value==usrid)
{   
    var depoacco=JSON.parse(localStorage.getItem(depoacc.value))
    console.log(depoacco)
    console.log("hello")
    alert(`Old Account Balance: ${depoacco.balance}`)
    depoacco.balance=Number(depoacco.balance)+Number(depoamt.value);
    localStorage.setItem(depoacco.accountno,JSON.stringify(depoacco))
    alert(`Amount Added: ${depoamt.value}`)
    alert(`New Account Balance: ${depoacco.balance}`)


} 
else {
    alert("Enter your account number")
}



}
function withdrawfn()
{   
    if(withamt.value==""||withacc.value=="")
{
    alert("Enter full details")

}
else if(withacc.value==usrid)
{   
    var withacco=JSON.parse(localStorage.getItem(withacc.value))
    console.log(withacco)
    
    alert(`Old Account Balance: ${withacco.balance}`)
    withacco.balance=Number(withacco.balance)-Number(withamt.value);
    localStorage.setItem(withacco.accountno,JSON.stringify(withacco))
    alert(`Amount Withdrawn: ${withamt.value}`)
    alert(`New Account Balance: ${withacco.balance}`)


} 
else {
    alert("Enter your account number")
}



}


