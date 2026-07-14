document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("applicationForm");

if (!form) return;


form.addEventListener("submit", function(event){

event.preventDefault();


const webhookURL = "https://discordapp.com/api/webhooks/1526393396778762310/FfWtw47GJg5NK5Smo3q3e5oX_j_2c2CwI-E1umRY3Jl_KXqugK84zqdXlx8yEzV1EAOW";


const formData = new FormData(form);


let type = formData.get("type") || "General";


let roleID = "";


if(type === "Sheriff"){
roleID = "1510682249782362334";
}

else if(type === "FHP"){
roleID = "1510682249782362336";
}

else if(type === "Police"){
roleID = "1510682249782362333";
}

else if(type === "Fire"){
roleID = "1510682249782362335";
}

else if(type === "EMS"){
roleID = "1510682249782362335";
}

else if(type === "Civilian"){
roleID = "1510682249828368476";
}



let answers = "";


formData.forEach((value,key)=>{

answers += `**${key}:** ${value}\n`;

});



fetch(webhookURL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

username:"Leon County RP Applications",

content:`<@&${roleID}> New ${type} Application Received!`,

allowed_mentions:{
roles:[roleID]
},


embeds:[{

title:`📋 New ${type} Application`,

description:answers,

color:10181046,


footer:{
text:"Leon County Roleplay Applications"
},

timestamp:new Date()

}]

})

})


.then(async response => {

    const text = await response.text();

    console.log("Discord Response:", text);

    if (response.ok) {

        alert("Application Submitted!");

        form.reset();

    } else {

        alert("Failed to send application.");

    }

})
  console.log(response);

}

})


.catch(error=>{

console.error(error);

alert("Webhook Error");

});


});


});
const bannerData = [

{
title:"🚔 Professional Departments",
text:"Join Police, Sheriff's Office, Florida Highway Patrol, Fire Rescue, EMS, and Civilian Operations."
},

{
title:"⭐ Realistic Roleplay",
text:"Experience immersive roleplay with active staff and realistic scenarios."
},

{
title:"🛒 Official Store",
text:"Purchase department packs, civilian packs, and support Leon County Roleplay."
},

{
title:"🛡️ Professional Staff Team",
text:"Our dedicated staff work hard to provide a fair, organized, and enjoyable experience."
}

];

const title = document.getElementById("bannerTitle");
const text = document.getElementById("bannerText");

if(title && text){

let current = 0;

setInterval(()=>{

current = (current + 1) % bannerData.length;

title.style.opacity = 0;
text.style.opacity = 0;

setTimeout(()=>{

title.textContent = bannerData[current].title;
text.textContent = bannerData[current].text;

title.style.opacity = 1;
text.style.opacity = 1;

},300);

},4000);

}
