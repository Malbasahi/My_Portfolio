document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'marwa.albasuhai';  // Replace with your actual EmailJS service ID
    const templateID = 'template_4mrf3fn';  // Replace with your actual EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});

// JavaScript for smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for the navbar height
            behavior: 'smooth'
        });

        document.querySelector('.nav-links').classList.remove('active');
    });
});

// JavaScript for the menu icon (responsive menu)
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript for fade-in effect on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});


sections.forEach(section => {
    observer.observe(section);
});

//experience section 
function openGithub(repo) {
    window.open(`https://github.com/Malbasahi/${repo}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});


// JavaScript for dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIconLight = document.getElementById('dark-mode-icon-light');
const darkModeIconDark = document.getElementById('dark-mode-icon-dark');
const body = document.body;

// Function to update the dark mode icons
function updateDarkModeIcons(isDarkMode) {
    if (isDarkMode) {
        darkModeIconLight.style.display = 'inline';
        darkModeIconDark.style.display = 'none';
    } else {
        darkModeIconLight.style.display = 'none';
        darkModeIconDark.style.display = 'inline';
    }
}

// Function to set the color scheme based on dark mode preference
function setColorScheme(isDarkMode) {
    const particlesColor = isDarkMode ? "#ffffff" : "#333333";
    const lineColor = isDarkMode ? "#ffffff" : "#333333";

    pJSDom[0].pJS.particles.color.value = particlesColor;
    pJSDom[0].pJS.particles.line_linked.color = lineColor;
    pJSDom[0].pJS.fn.particlesRefresh();
}

// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    updateDarkModeIcons(darkMode);
    setColorScheme(darkMode); // Set initial color scheme
});

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeIcons(isDarkMode);
    setColorScheme(isDarkMode); // Update color scheme on toggle
});




// email validation 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const emailInput = form.querySelector('input[name="email"]');
    const emailError = document.getElementById('email-error');

    emailInput.addEventListener('input', function() {
        if (emailInput.validity.valid) {
            emailError.textContent = '';
            emailError.style.display = 'none';
        } else {
            showError();
        }
    });

    form.addEventListener('submit', function(event) {
        if (!emailInput.validity.valid) {
            showError();
            event.preventDefault();
        }
    });

    function showError() {
        if (emailInput.validity.valueMissing) {
            emailError.textContent = 'You need to enter an email address.';
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Entered value needs to be an email address.';
        }
        emailError.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

//typing effect on the about me section
const text = "Artificial Intelligence graduate";
                let index = 0;
                const typingSpeed = 100; // Adjust the typing speed (in milliseconds) here
            
                function type() {
                    if (index < text.length) {
                        document.getElementById("typing-text").innerHTML += text.charAt(index);
                        index++;
                        setTimeout(type, typingSpeed);
                    } else {
                        // Clear the typed text and reset index when it reaches the end of the text
                        index = 0;
                        document.getElementById("typing-text").innerHTML = '';
                        setTimeout(type, typingSpeed);
                    }
                }
            
                // Start typing when the page loads
                window.onload = function() {
                    type();
                };




// ParticleJS configuration
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Default color for light mode
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff", // Default color for light mode
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Function to set the color scheme based on the mode
function setColorScheme(isDarkMode) {
    const particlesColor = isDarkMode ? "#ffffff" : "#333333";
    const lineColor = isDarkMode ? "#ffffff" : "#333333";

    pJSDom[0].pJS.particles.color.value = particlesColor;
    pJSDom[0].pJS.particles.line_linked.color = lineColor;
    pJSDom[0].pJS.fn.particlesRefresh();
}

// Function to detect and handle color scheme changes
function handleColorSchemeChange(e) {
    setColorScheme(e.matches);
}

// Initial check
handleColorSchemeChange(mediaQuery);

// Listen for changes
mediaQuery.addListener(handleColorSchemeChange);
