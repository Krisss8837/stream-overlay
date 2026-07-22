let followers = 0;

setInterval(()=>{
    followers++;
    document.getElementById("counter").innerHTML =
    "Followers: " + followers;
},3000);