<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання 1-3</title>
    <style>
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .item button {
            margin-left: 10px;
        }
    </style>
</head>
<body>
//1 
</body>    <p id="text">Привіт, світ!</p>
    <button onclick="changeText()">Змінити текст</button>

    <hr>

    //2
    <input type="text" id="itemInput" placeholder="Введіть елемент списку">
    <button onclick="addItem()">Додати елемент</button>
    <ul id="itemList"></ul>

    <hr>

    //3 

    <img id="image" src="initial-image.jpg" alt="Initial Image" width="200">
    <button onclick="changeImage()">Змінити зображення</button>

    <script>
        // Завдання 1: Зміна тексту елементу
        function changeText() {
            document.getElementById('text').innerText = 'Змінений текст';
        }

        // Завдання 2: Створення динамічного списку
        function addItem() {
            const input = document.getElementById('itemInput');
            const itemText = input.value.trim();

            if (itemText !== '') {
                const ul = document.getElementById('itemList');
                const li = document.createElement('li');
                li.className = 'item';
                li.innerText = itemText;

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Видалити';
                deleteButton.onclick = function() {
                    ul.removeChild(li);
                };

                li.appendChild(deleteButton);
                ul.appendChild(li);

                input.value = '';
            }
        }
        function changeImage() {
            const image = document.getElementById('image');
            image.src = 'new-image.jpg';
        }
    </script>
</body>
</html>
