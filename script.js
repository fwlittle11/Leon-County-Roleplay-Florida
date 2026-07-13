const webhookURL = "https://discordapp.com/api/webhooks/1526352379048497224/164kn1Z6Xp1gzMd6cvAY6PjYC7L7yLkyZIxtVLEjszu9RK6z8at4Wvmbi-4Z9FeXhEBz";


document.querySelector(".application-form").addEventListener("submit", function(e) {

    e.preventDefault();


    const formData = new FormData(this);

    let application = "";


    for (let [question, answer] of formData.entries()) {

        application += `**${question}:**\n${answer}\n\n`;

    }



    fetch(webhookURL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username: "Leon County RP Applications",

            embeds: [
                {
                    title: "📋 New Department Application",

                    description: application,

                    color: 10181046,

                    footer: {
                        text: "Leon County Roleplay"
                    },

                    timestamp: new Date()
                }
            ]

        })

    })

    .then(() => {

        alert("Application submitted successfully!");

        this.reset();

    })

    .catch(() => {

        alert("There was an error submitting your application.");

    });


});
