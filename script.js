// // Scroll sections active link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         }
//     });

//     // Sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove toggle icon and navbar when click nav link (scroll)
//     let menuIcon = document.querySelector('#menu-icon');
//     let navbar = document.querySelector('.navbar');

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');


// };

// // Toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // scroll reveal

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal({
//     // reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// // typed js 

// const typed = new Typed('.multiple-text',{
//     strings: ['Data Science','Web Development','Python'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })

// document.querySelector("form").addEventListener("submit", async (e) => {
//     e.preventDefault();

// const name = document.querySelector("#name").value;
// const email = document.querySelector("#email").value;
// const phone = document.querySelector("#phone").value;
// const subject = document.querySelector("#subject").value;
// const message = document.querySelector("#message").value;

// const response = await fetch("http://localhost:5000/api/contact", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, phone, subject, message }),
// });

// if (response.ok) {
//     alert("Message sent successfully!");
// } else {
//     alert("Failed to send message.");
// }
// });


// // server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB URI (replace with your actual MongoDB Atlas URI)
// const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolioDB";

// // MongoDB Connection
// mongoose
//     .connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("✅ Connected to MongoDB"))
//     .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Mongoose Schema & Model
// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: String,
//     subject: String,
//     message: String,
// });

// const Contact = mongoose.model("Contact", contactSchema);

// // API Route to handle contact form submission
// app.post("/api/contact", async (req, res) => {
//     try {
//         const { name, email, phone, subject, message } = req.body;

//         if (!name || !email || !message) {
//             return res.status(400).json({ error: "Please fill all required fields." });
//         }

//         const newContact = new Contact({ name, email, phone, subject, message });
//         await newContact.save();

//         res.status(201).json({ message: "Message sent successfully!" });
//     } catch (err) {
//         console.error("❌ Error saving contact:", err);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });



// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click nav link (scroll)
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Data Science', 'Web Development', 'Python'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ✅ Contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const phone = document.querySelector("#phone").value;
            const subject = document.querySelector("#subject").value;
            const message = document.querySelector("#message").value;

            try {
                const response = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, phone, subject, message }),
                });

                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                } else {
                    alert("Failed to send message.");
                }
            } catch (error) {
                alert("Error sending message.");
                console.error(error);
            }
        });
    }
});
