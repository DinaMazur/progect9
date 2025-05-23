const keys = ["O", "I", "D", "T", "Q", "H", "Y", "K", "L", "U"];
let currentKeyIndex = 0, keyElement = document.getElementById("key"), statusElement = document.getElementById("status");

document.getElementById("new-game").addEventListener("click", startNewGame);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keypress", (e) => e.preventDefault());

function updateKey() { keyElement.textContent = keys[currentKeyIndex]; }


function startNewGame() {
    currentKeyIndex = 0;
    updateKey();
    statusElement.textContent = "Гра розпочалась!";
    PNotify.success({ text: "Нова гра розпочалась!" });
}

function handleKeydown(event) {
    if (event.key.toUpperCase() === keys[currentKeyIndex]) {
        if (++currentKeyIndex < keys.length) {
            updateKey();
        } else {
            
            statusElement.textContent = "Ви виграли!";
        }
    } else {
        statusElement.textContent = "Ви програли!"; 
    }
}
updateKey();



const ctx = document.getElementById('sales-chart').getContext('2d');

const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            borderColor: "#2196f3",
            borderWidth: 2,
            tension: 0.4,
        },
    ],
};

new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: false, 
        maintainAspectRatio: false, 
    },
});



