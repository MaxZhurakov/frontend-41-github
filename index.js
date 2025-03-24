<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Карти передбачень</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        #predictionContainer {
            text-align: center;
            font-size: 1.2em;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }
        .positive {
            color: green;
        }
        .neutral {
            color: blue;
        }
        .mysterious {
            color: purple;
        }
    </style>
</head>
<body>
    <h1>🔮 Карти передбачень</h1>
    <div id="predictionContainer">
        <p id="predictionText"></p>
        <p id="predictionDate"></p>
    </div>
    <button id="getPredictionButton">Отримати передбачення</button>

    <script>
        const predictions = [
            { text: "Сьогодні вас чекає успіх!", type: "positive" },
            { text: "Будьте обережні з новими знайомими.", type: "neutral" },
            { text: "Вас чекає несподівана зустріч.", type: "mysterious" },
            { text: "День пройде спокійно, без несподіванок.", type: "neutral" },
            { text: "Ваші мрії можуть здійснитися!", type: "positive" },
            { text: "Сьогодні вирішуйте фінансові питання.", type: "neutral" },
            { text: "Вас чекає приємна новина.", type: "positive" },
            { text: "Будьте готові до змін.", type: "mysterious" },
            { text: "День ідеально підходить для нових починань.", type: "positive" },
            { text: "Сьогодні краще залишитися вдома.", type: "neutral" },
            { text: "Ваша інтуїція вас не підведе.", type: "mysterious" },
            { text: "День принесе багато радості.", type: "positive" },
            { text: "Будьте уважні до дрібниць.", type: "neutral" },
            { text: "Вас чекає цікава подорож.", type: "mysterious" },
            { text: "Сьогодні ви зможете вирішити давню проблему.", type: "positive" }
        ];

        document.getElementById('getPredictionButton').addEventListener('click', () => {
            const predictionContainer = document.getElementById('predictionContainer');
            const predictionText = document.getElementById('predictionText');
            const predictionDate = document.getElementById('predictionDate');

            const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
            predictionText.textContent = randomPrediction.text;
            predictionText.className = randomPrediction.type;

            const currentDate = new Date();
            predictionDate.textContent = `Сьогодні: ${currentDate.toLocaleDateString()}`;

            predictionContainer.style.opacity = 0;
            setTimeout(() => {
                predictionContainer.style.opacity = 1;
            }, 100);
        });
    </script>
</body>
</html>
