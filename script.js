// Quotes for each layer (4 quotes per layer)
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

const layerBox = document.getElementById("layerBox");
let currentLayer = 0;

// Create a layer
function createLayer(index) {
    const box = document.createElement("div");
    box.className = "box";

    // 4 side quotes
    quotes[index].forEach((q, i) => {
        let side = document.createElement("div");
        side.className = "side";
        side.textContent = q;

        let angle = i * 90;
        side.style.transform = `rotateY(${angle}deg) translateZ(150px)`;
        box.appendChild(side);
    });

    // Center content: image + button
    let center = document.createElement("div");
    center.className = "center-content";

    let img = document.createElement("img");
    img.src = `assets/images/layer${index + 1}.jpg`;
    center.appendChild(img);

    let btn = document.createElement("button");
    btn.className = "heart-btn";
    btn.textContent = index === 5 ? "Finish ❤️" : "Click Here";

    btn.onclick = () => {
        if (index === 5) triggerConfetti();
        nextLayer();
    };

    center.appendChild(btn);
    box.appendChild(center);

    return box;
}

// Show a specific layer
function showLayer(index) {
    layerBox.innerHTML = "";
    const layer = createLayer(index);
    layerBox.appendChild(layer);
}

// Go to next layer
function nextLayer() {
    currentLayer++;
    if (currentLayer < 6) {
        showLayer(currentLayer);
    }
}

// Confetti effect for final layer
function triggerConfetti() {
    confetti();
}

// Play music on first click
document.body.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music.paused) music.play();
}, { once: true });

// Load first layer
showLayer(0);
