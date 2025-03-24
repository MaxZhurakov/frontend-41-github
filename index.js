<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Прибульці передають повідомлення</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #messages {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            height: 200px;
            overflow-y: scroll;
        }
    </style>
</head>
<body>
    <h1>📡 Прибульці передають повідомлення!</h1>
    <div id="messages"></div>

    <script>
        const alienMessages = new Set([
            '🌌 Привіт, земляни! Ви нас чуєте?',
            '👾 Ми дружні! Хочемо дізнатися про ваш Wi-Fi!',
            '🚀 Летимо до вас на переговори!',
            '🌍 Чому ви називаєте себе Homo sapiens? 🤔',
            '🛸 Ми залишили слід у ваших полях... Вибачте! 🌾',
            '💡 Передайте нам вашу найкращу технологію!',
            '🔊 Земляни, ваші меми занадто складні! 😵',
            "🎶 Ми хочемо дізнатися про вашу музику! Що таке 'хардбас'?",
        ]);

        const aliens = new Map();

        function createAlien(name, customMessage = null) {
            if (customMessage && !alienMessages.has(customMessage)) {
                alienMessages.add(customMessage);
            }

            const message = customMessage || Array.from(alienMessages)[Math.floor(Math.random() * alienMessages.size)];
            aliens.set(name, message);

            setTimeout(() => {
                const messagesDiv = document.getElementById('messages');
                const messageElement = document.createElement('div');
                messageElement.textContent = `${name}: ${message}`;
                messagesDiv.appendChild(messageElement);
            }, 1000);
        }

        let alienCount = 0;
        const maxAliens = 5;

        setInterval(() => {
            if (alienCount < maxAliens) {
                createAlien(`Alien ${alienCount + 1}`);
                alienCount++;
            }
        }, 3000);
    </script>
</body>
</html>
