const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

// Set up snowflake array
const snowflakes = [];

// Set up max number of snowflakes
const maxSnowflakes = 100;

// Set up snowflake object
function Snowflake(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
}

// Function to generate snowflakes
function generateSnowflakes() {
    for (let i = 0; i < maxSnowflakes; i++) {
        // Generate random x and y coordinates
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Generate random radius and speed
        const radius = Math.random() * 3 + 1;
        const speed = Math.random() * 1 + 0.5;

        // Push new snowflake to array
        snowflakes.push(new Snowflake(x, y, radius, speed));
    }
}

// Function to draw snowflakes
function drawSnowflakes() {
    // Loop through snowflake array
    for (let i = 0; i < snowflakes.length; i++) {
        // Set up snowflake object
        const snowflake = snowflakes[i];

        // Set up canvas context
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

// Function to animate snowflakes
function animateSnowflakes() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through snowflake array
    for (let i = 0; i < snowflakes.length; i++) {
        // Set up snowflake object
        const snowflake = snowflakes[i];

        // Update snowflake position
        snowflake.x += snowflake.speed;
        snowflake.y += snowflake.speed;

        // If snowflake goes off screen, reset its position
        if (snowflake.x > canvas.width) {
            snowflake.x = 0;
        }
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
        }
    }

    // Draw snowflakes
    drawSnowflakes();

    // Repeat animation
    requestAnimationFrame(animateSnowflakes);
}

// Generate initial snowflakes
generateSnowflakes();

// Start animation
animateSnowflakes();


// GSAP for moving deers 

gsap.to(".deers", {
    x: 320,
    scale: 0,
    opacity: 0.9,
    duration: 6,
    ease: "none",
  repeat: -1
});

