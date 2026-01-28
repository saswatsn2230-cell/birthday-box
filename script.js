// Your 24 quotes
const quotes = [
    [
        "You make my world softer just by existing.",
        "I never believed in “perfect” until I met you.",
        "My life got brighter the moment you walked into it.",
        "You’re the best part of every day I live."
    ],
    [
        "You’re the reason my heart beats a little faster.",
        "I wish you could see yourself the way I see you.",
        "Your smile is my daily source of happiness.",
        "I see the mother of my 2 children in you."
    ],
    [
        "You’re my favorite notification.",
        "I could look at you forever and still feel it’s not enough.",
        "You make distance feel small and love feel big.",
        "You’re the warmth in my cold days."
    ],
    [
        "Distance means nothing because you’re worth everything.",
        "Even far away, you’re the closest to my heart.",
        "Every mile between us is a reminder of how strong we are.",
        "I miss you in ways words can’t explain."
    ],
    [
        "You’re the poem my heart has been trying to write.",
        "You’re the peace in my chaos.",
        "Your love feels like a place I never want to leave.",
        "You’re the spark that makes my heart glow."
    ],
    [
        "You increase the opacity of my happiness by just existing.",
        "For you I can do multiple revisions to get life better.",
        "No transition could ever match how smoothly you entered my world.",
        "You turned my messy timeline into a beautifully edited story."
    ]
];

let currentLayer = -1;

document.body.addEventListener("click", () => {
    const audio = document.getElementById("bgMusic");
    if (audio.paused) audio.play();
}, { once: true });

showNextLayer();

// Load next layer
function showNextLayer() {
    currentLayer++;

    const container = document.getElementById("boxContainer");
    container.innerHTML = "";

    if (currentLayer === 6) {
        confetti();
        return;
    }

    const layer = document.createElement("div");
    layer.className = "layer";

    // Center box
    const center = document.createElement("div");
    center.className = "center-box";

    // Image
    const img = document.createElement("img");
    img.src = `assets/images/layer${currentLayer + 1}.jpg`;
    center.appendChild(img);

    // Button
    const btn = document.createElement("button");
    btn.className = "heart-btn";
    btn.textContent = currentLayer === 5 ? "Finish ❤️" : "Click Here";
    btn.onclick = openFlaps;
    center.appendChild(btn);

    // 4 flaps
    const flapTop = createFlap(quotes[currentLayer][0], "flap flap-top");
    const flapBottom = createFlap(quotes[currentLayer][1], "flap flap-bottom");
    const flapLeft = createFlap(quotes[currentLayer][2], "flap flap-left");
    const flapRight = createFlap(quotes[currentLayer][3], "flap flap-right");

    layer.appendChild(center);
    layer.appendChild(flapTop);
    layer.appendChild(flapBottom);
    layer.appendChild(flapLeft);
    layer.appendChild(flapRight);

    container.appendChild(layer);

    function openFlaps() {
        flapTop.classList.add("open");
        flapBottom.classList.add("open");
        flapLeft.classList.add("open");
        flapRight.classList.add("open");

        flapTop.style.transform = "rotateX(-90deg)";
        flapBottom.style.transform = "rotateX(90deg)";
        flapLeft.style.transform = "rotateY(-90deg)";
        flapRight.style.transform = "rotateY(90deg)";

        setTimeout(showNextLayer, 1000);
    }
}

function createFlap(text, className) {
    const d = document.createElement("div");
    d.className = className;
    d.textContent = text;
    return d;
}
