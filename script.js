// ===============================
// LEON COUNTY ROLEPLAY SCRIPT
// ===============================

// ---------- HOMEPAGE SLIDER ----------

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (slides.length > 0) {

        let currentSlide = 0;

        function showSlide(index) {

            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            slides[index].classList.add("active");
            dots[index].classList.add("active");
        }

        setInterval(() => {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }, 4000);

    }

});


// ---------- APPLICATION FORM ----------

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("applicationForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(form);

        let applicationText = "";

        formData.forEach((value, key) => {

            applicationText += `${key}: ${value}\n`;

        });

        // ==========================================
        // PASTE YOUR NEW DISCORD WEBHOOK BELOW
        // ==========================================

        const webhookURL = "https://discordapp.com/api/webhooks/1526393396778762310/FfWtw47GJg5NK5Smo3q3e5oX_j_2c2CwI-E1umRY3Jl_KXqugK84zqdXlx8yEzV1EAOW";

        if (webhookURL === "https://discordapp.com/api/webhooks/1526393396778762310/FfWtw47GJg5NK5Smo3q3e5oX_j_2c2CwI-E1umRY3Jl_KXqugK84zqdXlx8yEzV1EAOW") {

            alert("Webhook has not been configured yet.");

            console.log(applicationText);

            return;

        }

        const payload = {

            username: "Leon County RP Applications",

            embeds: [

                {

                    title: "📋 New Department Application",

                    description: "A new application has been submitted.",

                    color: 8388736,

                    fields: [

                        {

                            name: "Application",

                            value: "```" + applicationText + "```"

                        }

                    ],

                    footer: {

                        text: "Leon County Roleplay"

                    },

                    timestamp: new Date().toISOString()

                }

            ]

        };

        try {

            const response = await fetch(webhookURL, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payload)

            });

            if (response.ok) {

                alert("Application submitted successfully!");

                form.reset();

            } else {

                alert("Failed to submit application.");

            }

        } catch (err) {

            console.error(err);

            alert("Unable to connect to Discord.");

        }

    });

});
