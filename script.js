document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("applicationForm");

    if (!form) return;


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // PUT YOUR NEW DISCORD WEBHOOK HERE
        const webhookURL = "YOUR_NEW_WEBHOOK_HERE";


        const formData = new FormData(form);


        let applicationAnswers = "";


        formData.forEach((value, key) => {

            applicationAnswers += `**${key}:** ${value}\n`;

        });



        const embed = {

            title: "📋 New Leon County RP Application",

            description: applicationAnswers,

            color: 10181046,

            footer: {

                text: "Leon County Roleplay Applications"

            },

            timestamp: new Date()

        };



        fetch(webhookURL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                username: "Leon County RP Applications",

                embeds: [embed]

            })

        })

        .then(response => {

            if (response.ok) {

                alert("Application Submitted!");

                form.reset();

            } else {

                alert("Failed to send application.");

            }

        })


        .catch(error => {

            console.error(error);

            alert("Error sending application.");

        });


    });


});
