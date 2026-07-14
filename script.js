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

        formData.forEach((value, key) => {
            if(key !== "type"){
                answers += `**${key}:** ${value}\n`;
            }
        });

        fetch(webhookURL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                username: "Leon County RP Applications",

                content: `<@&${roleID}> New ${type} Application Received!`,

                allowed_mentions: {
                    roles: [roleID]
                },

                embeds: [{

                    title: `📨 ${type} Application Submitted`,

                    description: "A new application has been received and is awaiting review.",

                    color: 10181046,

                    fields: [

                        {
                            name: "📂 Department",
                            value: type,
                            inline: true
                        },

                        {
                            name: "👤 Applicant",
                            value: formData.get("Discord Username") || "Not Provided",
                            inline: true
                        },

                        {
                            name: "🎮 FiveM Username",
                            value: formData.get("FiveM Username") || "Not Provided",
                            inline: true
                        },

                        {
                            name: "📝 Application Responses",
                            value: answers.length > 1024
                                ? answers.substring(0, 1020) + "..."
                                : answers
                        }

                    ],

                    footer: {
                        text: "Leon County Roleplay Recruitment Division"
                    },

                    timestamp: new Date().toISOString()

                }]

            })

        })

        .then(async response => {

            const text = await response.text();

            console.log("Discord Response:", text);

            if(response.ok){

                alert("Application Submitted!");

                form.reset();

            } else {

                alert("Failed to send application.");

            }

        })

        .catch(error => {

            console.error(error);

            alert("Webhook Error");

        });

    });

});
