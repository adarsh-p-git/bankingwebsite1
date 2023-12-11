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
     else if(acc.accougntno in localStorage)
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
document.getElementById('balancedisp').innerHTML=`Account Balance: ${usr.balance}`
var withaccoo=JSON.parse(localStorage.getItem(withacc.value))


function depositfn()
{   
    if(depoamt.value==""||depoacc.value=="")
{
    alert("Enter full details")

}
else if(depoacc.value  in localStorage)
{   
    var depoacco=JSON.parse(localStorage.getItem(depoacc.value))
    console.log(depoacco)
    console.log("hello")

    depoacco.balance=Number(depoacco.balance)+Number(depoamt.value);
    localStorage.setItem(depoacco.accountno,JSON.stringify(depoacco))
    alert(`Amount ${depoamt.value} Added Successfully`)
    var usrid=localStorage.getItem('currentuser')
    var usr=JSON.parse(localStorage.getItem(usrid))
    document.getElementById('balancedisp').innerHTML=`Account Balance: ${usr.balance}`




} 
else {
    alert("Account number doesn't exist")
}



}
function withdrawfn()
{   var usrid=localStorage.getItem('currentuser')
var usr=JSON.parse(localStorage.getItem(usrid))
    if(withamt.value==""||withacc.value=="")
{
    alert("Enter full details")

}

else if (Number(usr.balance)-Number(withamt.value)<0)
{
    alert("Insufficient Balance")

}
else if(withacc.value==usrid)
{   
    
    console.log(withacco)
    
    var withacco=JSON.parse(localStorage.getItem(withacc.value))
    withacco.balance=Number(withacco.balance)-Number(withamt.value);
    localStorage.setItem(withacco.accountno,JSON.stringify(withacco))
    alert(`Amount Withdrawn: ${withamt.value}`)
    
    balancedisp.innerHTML=`Account Balance: ${withacco.balance}`



} 
else {
    alert("Enter your account number")
}}


