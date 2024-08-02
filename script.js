const menuBtn = document.getElementById('menu-btn');
        const nav = document.getElementById('navbar');
        const toggleDarkmode = document.getElementById('toggle-dark-mode');

        // Toggle navigation menu on small screens
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            if (nav.classList.contains('show')) {
                menuBtn.innerHTML = '&times;'; // Change to times icon
            } else {
                menuBtn.innerHTML = '&#9776;'; // Change back to hamburger icon
            }
        });

        // Toggle dark mode
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
            
        document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

        // Simple typewriter effect
        const textElement = document.getElementById('typing-text');
        const texts = [
            "Welcome to Dr.Wamilimo DEV Roadmap😂",
            "Step 1: Learn HTML & CSS 🖥️",
            "Step 2: Master JavaScript 📝",
            "Step 3: Dive into Frontend Frameworks 🚀",
            "Step 4: Explore Backend Development 🗄️",
            "Step 5: Understand Databases 🗃️",
            "Step 6: Get Familiar with Version Control 🧩",
            "Step 7: Build Projects and Portfolio 🏗️💪",
            "Step 8: Learn Deployment & DevOps 🌐",
            "Step 9: Stay Updated with Industry Trends 📈",
            "Step 10: Collaborate and Contribute to Open Source 🤝",
            "Step 11: Master AI and the Internet 🤖🌐",
            "Step 12: Get a Client or Get Employed 💼",
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        const typingSpeed = 80; // typing speed in milliseconds
        const erasingSpeed = 20; // erasing speed in milliseconds
        const delayBetweenTexts = 2000; // delay between texts in milliseconds

        function type() {
            if (charIndex < texts[textIndex].length) {
                textElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, delayBetweenTexts);
            }
        }

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, typingSpeed);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(type, typingSpeed);
        });

        // Array containing the paths to the images
        const images = ["images/elephants.jpg.png.jpg", "images/class1.jpg", "images/class2.jpg","images/zebra.jpg " , "images/pool1.jpg ", "images/js.png"]; // Add more image paths as needed
        // Variable to keep track of the current image index
        let currentIndex = 0;

        // Function to update the image source to the next image in the array
        function nextImage() {
            const imgElement = document.getElementById('image'); // Get the image element by its ID
            currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around using modulus
            imgElement.src = images[currentIndex]; // Set the src attribute of the image element to the new image path
        }

        // Function to update the image source to the previous image in the array
        function prevImage() {
            const imgElement = document.getElementById('image'); // Get the image element by its ID
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index and wrap around using modulus
            imgElement.src = images[currentIndex]; // Set the src attribute of the image element to the new image path
        }