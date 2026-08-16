// State variables
let elements = [];
let selectedElement = null;
let currentGuess = "";
let gameState = "idle"; // idle, guessing, revealed
let currentLang = "en"; // en, de

// Score variables
let score = 0;
let rounds = 0;

const i18n = {
    de: {
        title: "LLM Token-Rate-Spiel",
        score: "Punkte",
        rounds: "Runden",
        accuracy: "Genauigkeit",
        restart: "Neu starten",
        subtitle: "Wähle ein Element aus, um sein Wort in Token zu zerlegen!",
        tableTitle: "Periodensystem der Elemente",
        // legend
        nonmetals: "Nichtmetalle",
        noblegases: "Edelgase",
        alkalimetals: "Alkalimetalle",
        alkalineearth: "Erdalkalimetalle",
        metalloids: "Halbmetalle",
        transitionmetals: "Übergangsmetalle",
        posttransition: "Nachübergangsmetalle",
        lanthanides: "Lanthanoide",
        actinides: "Actinoide",
        halogens: "Halogene",
        // empty state
        readyTitle: "Bereit zum Raten?",
        readyText: "Klicke auf ein chemisches Element im Periodensystem auf der linken Seite, um das Spiel zu starten.",
        // active game
        prompt: (word) => `Aus wie vielen <strong>Mistral-Tokens</strong> besteht das deutsche Wort <strong id="prompt-target-word">"${word}"</strong>?`,
        guessText: "Gib deinen Tipp ab!",
        volltreffer: "Volltreffer!",
        incorrectText: (correct) => `Falsch! Richtig wäre ${correct}`,
        correctHeadline: "Richtig!",
        incorrectHeadline: (correct) => `Nicht ganz! Korrekt ist: ${correct}`,
        visLabel: "Ergebnis-Zerlegung:",
        nextElement: "Nächstes Element",
        footerCredit: "Dieses kleine Spiel wurde von Adrian Ehrenhofer (mit Hilfe von Vibecoding-Tools) entwickelt, um Aspekte der Tokenisierung im Kontext der Materialinformatik zu veranschaulichen. Der wissenschaftliche Hintergrund ist in der Veröffentlichung <a href=‚https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adem.202501876‘>„What do LLMs know about materials?“</a> zu finden. Viel Spaß beim Spielen!",
        footerProject: "Ausgabe des Tokenizers von <strong>Mistral-7B-v0.1</strong>."
    },
    en: {
        title: "LLM Token Guessing Game",
        score: "Score",
        rounds: "Rounds",
        accuracy: "Accuracy",
        restart: "Restart",
        subtitle: "Select an element to decompose its name into tokens!",
        tableTitle: "Periodic Table of Elements",
        // legend
        nonmetals: "Nonmetals",
        noblegases: "Noble Gases",
        alkalimetals: "Alkali Metals",
        alkalineearth: "Alkaline Earth Metals",
        metalloids: "Metalloids",
        transitionmetals: "Transition Metals",
        posttransition: "Post-Transition Metals",
        lanthanides: "Lanthanides",
        actinides: "Actinides",
        halogens: "Halogens",
        // empty state
        readyTitle: "Ready to Guess?",
        readyText: "Click on a chemical element in the periodic table on the left to start the game.",
        // active game
        prompt: (word) => `How many <strong>Mistral tokens</strong> make up the English word <strong id="prompt-target-word">"${word}"</strong>?`,
        guessText: "Enter your guess!",
        volltreffer: "Direct hit!",
        incorrectText: (correct) => `Wrong! Correct is ${correct}`,
        correctHeadline: "Correct!",
        incorrectHeadline: (correct) => `Not quite! Correct is: ${correct}`,
        visLabel: "Decomposed Result:",
        nextElement: "Next Element",
        footerCredit: "This small game was developed by Adrian Ehrenhofer (with the help of vibecoding tools) to highlight aspects of tokenization in context of Materials Informatics. For the scientific background, refer to the publication <a href='https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adem.202501876'>'What do LLMs know about materials?'</a>. Meanwhile, enjoy the game!",
        footerProject: "Tokens according to the <strong>Mistral-7B-v0.1</strong> tokenizer."
    }
};

// Map chemical series from the Mendeleev Python package to CSS class names
function getSeriesClass(series) {
    if (!series) return "unknown";
    const mapping = {
        "Nonmetals": "nonmetals",
        "Noble gases": "noblegases",
        "Alkali metals": "alkalimetals",
        "Alkaline earth metals": "alkalineearth",
        "Metalloids": "metalloids",
        "Halogens": "halogens",
        "Post-transition metals": "posttransition",
        "Transition metals": "transitionmetals",
        "Lanthanides": "lanthanides",
        "Actinides": "actinides",
        "Poor metals": "posttransition"
    };
    return mapping[series] || "unknown";
}

// German/English names
function getSeriesName(series) {
    if (!series) return currentLang === "de" ? "Unbekannt" : "Unknown";

    const mappingDe = {
        "Nonmetals": "Nichtmetalle",
        "Noble gases": "Edelgase",
        "Alkali metals": "Alkalimetalle",
        "Alkaline earth metals": "Erdalkalimetalle",
        "Metalloids": "Halbmetalle",
        "Halogens": "Halogene",
        "Post-transition metals": "Nachübergangsmetalle",
        "Transition metals": "Übergangsmetalle",
        "Lanthanides": "Lanthanoide",
        "Actinides": "Actinoide",
        "Poor metals": "Nachübergangsmetalle"
    };

    const mappingEn = {
        "Poor metals": "Post-transition metals"
    };

    if (currentLang === "en") {
        return mappingEn[series] || series;
    }
    return mappingDe[series] || series;
}

// Load elements and set up the page directly from elementData
document.addEventListener("DOMContentLoaded", () => {
    if (typeof elementData !== 'undefined') {
        elements = elementData;
        initGame();
    } else {
        console.error("Error initializing: elementData is not defined.");
        document.getElementById("periodic-table").innerHTML =
            `<div style="grid-column: span 18; text-align: center; color: var(--color-error); padding: 2rem;">
                Error loading element data. Please ensure element_tokens.js is loaded.
             </div>`;
    }
});

function initGame() {
    renderPeriodicTable();
    setupKeypad();
    setupEventListeners();
    switchLanguage("en"); // Start in English
}

// Render the periodic table elements on the grid
function renderPeriodicTable() {
    const tableEl = document.getElementById("periodic-table");
    tableEl.innerHTML = ""; // Clear loader

    elements.forEach(el => {
        const cell = document.createElement("div");
        cell.className = `element-cell ${getSeriesClass(el.series)}`;
        cell.dataset.symbol = el.symbol;
        cell.id = `cell-${el.symbol}`;

        // Compute grid coordinates
        let row = el.period;
        let col = el.group;

        // Lanthanides placement (Atomic number 57-71) in Row 9, Columns 4-18
        if (el.atomic_number >= 57 && el.atomic_number <= 71) {
            row = 9;
            col = el.atomic_number - 57 + 4;
        }
        // Actinides placement (Atomic number 89-103) in Row 10, Columns 4-18
        else if (el.atomic_number >= 89 && el.atomic_number <= 103) {
            row = 10;
            col = el.atomic_number - 89 + 4;
        }

        // Set CSS Grid positions
        cell.style.gridRow = row;
        cell.style.gridColumn = col;

        // Cell Content
        const name = currentLang === "de" ? el.name_de : el.name_en;
        cell.innerHTML = `
            <span class="cell-number">${el.atomic_number}</span>
            <span class="cell-symbol">${el.symbol}</span>
            <span class="cell-name">${name}</span>
        `;

        cell.addEventListener("click", () => selectElement(el));
        tableEl.appendChild(cell);
    });
}

// Select an element to guess
function selectElement(el) {
    if (gameState === "revealed" && selectedElement && selectedElement.symbol === el.symbol) {
        return; // Already revealed this element, wait for next
    }

    // Manage grid selection highlights
    document.querySelectorAll(".element-cell").forEach(cell => {
        cell.classList.remove("selected");
    });
    const cellEl = document.getElementById(`cell-${el.symbol}`);
    if (cellEl) cellEl.classList.add("selected");

    // Set active element
    selectedElement = el;
    currentGuess = "";
    gameState = "guessing";

    // Update active game UI
    document.getElementById("panel-empty").classList.add("hidden");
    document.getElementById("panel-game").classList.remove("hidden");
    document.getElementById("reveal-panel").classList.add("hidden");

    // Set preview details
    const previewBadge = document.getElementById("preview-badge");
    previewBadge.className = `element-badge ${getSeriesClass(el.series)}`;
    document.getElementById("preview-number").textContent = el.atomic_number;
    document.getElementById("preview-symbol").textContent = el.symbol;

    updateActiveElementUI();

    // Reset display
    const displayEl = document.getElementById("input-display");
    displayEl.textContent = "?";
    displayEl.classList.remove("ready");

    const feedbackEl = document.getElementById("feedback-text");
    feedbackEl.textContent = i18n[currentLang].guessText;
    feedbackEl.className = "feedback-text";

    // Enable keypad
    document.querySelectorAll(".keypad button").forEach(btn => btn.disabled = false);
}

function updateActiveElementUI() {
    if (!selectedElement) return;
    const el = selectedElement;

    const name = currentLang === "de" ? el.name_de : el.name_en;
    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-series").textContent = getSeriesName(el.series);

    document.getElementById("guessing-prompt-box").innerHTML = `
        <p>${i18n[currentLang].prompt(name)}</p>
    `;
}

// Setup virtual keypad listeners
function setupKeypad() {
    document.querySelectorAll(".key-btn[data-val]").forEach(btn => {
        btn.addEventListener("click", () => {
            if (gameState !== "guessing") return;

            const digit = btn.getAttribute("data-val");

            // Limit to 2 digits
            if (currentGuess.length < 2) {
                currentGuess += digit;
                const displayEl = document.getElementById("input-display");
                displayEl.textContent = currentGuess;
                displayEl.classList.add("ready");
            }
        });
    });

    // Clear button
    document.getElementById("key-clear").addEventListener("click", () => {
        if (gameState !== "guessing") return;
        currentGuess = "";
        const displayEl = document.getElementById("input-display");
        displayEl.textContent = "?";
        displayEl.classList.remove("ready");
    });

    // Enter / OK button
    document.getElementById("key-enter").addEventListener("click", () => {
        if (gameState !== "guessing" || currentGuess === "") return;
        submitGuess();
    });
}

// Setup general click handlers
function setupEventListeners() {
    // Reset score board button
    document.getElementById("btn-reset").addEventListener("click", () => {
        score = 0;
        rounds = 0;
        updateStats();

        // Clear active element
        selectedElement = null;
        gameState = "idle";
        document.getElementById("panel-empty").classList.remove("hidden");
        document.getElementById("panel-game").classList.add("hidden");
        document.querySelectorAll(".element-cell").forEach(cell => cell.classList.remove("selected"));
    });

    // Next element button
    document.getElementById("btn-next").addEventListener("click", () => {
        // Clear select state and choose a random new one
        const unplayed = elements.filter(el => !selectedElement || el.symbol !== selectedElement.symbol);
        const randomEl = unplayed[Math.floor(Math.random() * unplayed.length)];
        selectElement(randomEl);
    });

    // Language switcher buttons
    document.getElementById("lang-de").addEventListener("click", () => {
        if (currentLang !== "de") {
            switchLanguage("de");
        }
    });
    document.getElementById("lang-en").addEventListener("click", () => {
        if (currentLang !== "en") {
            switchLanguage("en");
        }
    });
}

// Switch tool language
function switchLanguage(lang) {
    if (lang === currentLang) return;

    currentLang = lang;
    updateLanguageUI();

    if (selectedElement) {
        // Reset guessing state for the newly selected language
        currentGuess = "";
        gameState = "guessing";

        // Reset display
        const displayEl = document.getElementById("input-display");
        displayEl.textContent = "?";
        displayEl.classList.remove("ready");

        const feedbackEl = document.getElementById("feedback-text");
        feedbackEl.textContent = i18n[currentLang].guessText;
        feedbackEl.className = "feedback-text";

        // Hide reveal panel
        document.getElementById("reveal-panel").classList.add("hidden");

        // Enable keypad
        document.querySelectorAll(".keypad button").forEach(btn => btn.disabled = false);

        // Update active element details & prompt for the new language
        updateActiveElementUI();
    }
}


// Update all text nodes on the page based on currentLang
function updateLanguageUI() {
    // Manage switcher button states
    document.getElementById("lang-de").classList.toggle("active", currentLang === "de");
    document.getElementById("lang-en").classList.toggle("active", currentLang === "en");

    // Header & title
    document.getElementById("title-text").textContent = i18n[currentLang].title;
    document.getElementById("label-score").textContent = i18n[currentLang].score;
    document.getElementById("label-rounds").textContent = i18n[currentLang].rounds;
    document.getElementById("label-accuracy").textContent = i18n[currentLang].accuracy;
    document.getElementById("btn-reset").textContent = i18n[currentLang].restart;

    // Table Area
    document.getElementById("table-title").textContent = i18n[currentLang].tableTitle;
    document.getElementById("table-subtitle").textContent = i18n[currentLang].subtitle;

    // Legend labels
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    // Empty state
    document.getElementById("empty-title").textContent = i18n[currentLang].readyTitle;
    document.getElementById("empty-text").textContent = i18n[currentLang].readyText;

    // Reveal panel labels
    document.getElementById("vis-label").textContent = i18n[currentLang].visLabel;
    document.getElementById("btn-next").textContent = i18n[currentLang].nextElement;

    // Footer Credit
    document.getElementById("footer-credit").innerHTML = i18n[currentLang].footerCredit;
    document.getElementById("footer-project").innerHTML = i18n[currentLang].footerProject;

    // Refresh names displayed on the periodic table elements
    elements.forEach(el => {
        const cellNameEl = document.querySelector(`#cell-${el.symbol} .cell-name`);
        if (cellNameEl) {
            cellNameEl.textContent = currentLang === "de" ? el.name_de : el.name_en;
        }
    });
}

// Process guess submission
function submitGuess() {
    gameState = "revealed";

    // Disable keypad keys
    document.querySelectorAll(".keypad button").forEach(btn => {
        if (btn.id !== "key-enter") {
            btn.disabled = true;
        }
    });

    const guessVal = parseInt(currentGuess, 10);
    const correctVal = currentLang === "de" ? selectedElement.token_count_de : selectedElement.token_count_en;
    const isCorrect = (guessVal === correctVal);

    rounds++;
    if (isCorrect) {
        score++;
    }

    updateStats();

    // Display feedback & reveal details
    const displayEl = document.getElementById("input-display");
    const feedbackEl = document.getElementById("feedback-text");
    const resultHeadline = document.getElementById("result-headline");
    const panelGame = document.getElementById("panel-game");

    if (isCorrect) {
        feedbackEl.textContent = i18n[currentLang].volltreffer;
        feedbackEl.className = "feedback-text correct";
        resultHeadline.textContent = i18n[currentLang].correctHeadline;
        resultHeadline.className = "result-headline success";

        // Add green glow effect
        panelGame.classList.add("correct-glow");
        setTimeout(() => panelGame.classList.remove("correct-glow"), 500);
    } else {
        feedbackEl.textContent = i18n[currentLang].incorrectText(correctVal);
        feedbackEl.className = "feedback-text incorrect";
        resultHeadline.textContent = i18n[currentLang].incorrectHeadline(correctVal);
        resultHeadline.className = "result-headline failure";

        // Shake animation
        panelGame.classList.add("shake");
        setTimeout(() => panelGame.classList.remove("shake"), 350);
    }

    // Render token visualization
    renderTokens(selectedElement);

    // Show next steps
    document.getElementById("reveal-panel").classList.remove("hidden");
}

// Update stats bar
function updateStats() {
    document.getElementById("score-val").textContent = score;
    document.getElementById("rounds-val").textContent = rounds;
    const acc = rounds > 0 ? Math.round((score / rounds) * 100) : 0;
    document.getElementById("accuracy-val").textContent = `${acc}%`;
}

// Render token blocks visually
function renderTokens(el) {
    const container = document.getElementById("token-blocks");
    container.innerHTML = "";

    const tokens = currentLang === "de" ? el.tokens_de : el.tokens_en;

    tokens.forEach(token => {
        const block = document.createElement("span");

        // In SentencePiece/Llama tokenizers, words starting a sequence or space get prepended with U+2581 (lower 1/8 block)
        const hasSpacePrefix = token.startsWith("\u2581");

        // Clean representation for display
        let displayText = token;
        if (hasSpacePrefix) {
            displayText = token.substring(1); // strip the block character
            block.className = "token-block space-token";
            block.innerHTML = `<span style="font-size: 0.65rem; opacity: 0.6; margin-right: 4px;">␣</span>${escapeHtml(displayText)}`;
        } else {
            block.className = "token-block";
            block.textContent = displayText;
        }

        container.appendChild(block);
    });
}

// Escape HTML utility
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

