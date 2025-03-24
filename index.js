<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Музичний плейлист</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #playlist {
            list-style-type: none;
            padding: 0;
        }
        #playlist li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        #totalTime {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Музичний плейлист</h1>
    <div>
        <input type="text" id="songName" placeholder="Назва пісні">
        <input type="number" id="songDuration" placeholder="Тривалість (хв)">
        <button id="addSongButton">Додати пісню</button>
    </div>
    <ul id="playlist"></ul>
    <div>
        <button id="sortByNameButton">Сортувати за назвою</button>
        <button id="sortByDurationButton">Сортувати за тривалістю</button>
        <button id="calculateTotalDurationButton">Підрахувати загальну тривалість</button>
    </div>
    <div id="totalTime"></div>

    <script>
        const BaseSong = {
            getInfo: function() {
                return `${this.name} - ${this.duration} хв`;
            }
        };

        function createSong(name, duration) {
            const song = Object.create(BaseSong);
            song.name = name;
            song.duration = duration;
            return song;
        }

        const playlist = [];

        function updatePlaylist() {
            const playlistElement = document.getElementById('playlist');
            playlistElement.innerHTML = '';
            playlist.forEach((song, index) => {
                const li = document.createElement('li');
                li.textContent = song.getInfo();
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Видалити';
                deleteButton.addEventListener('click', () => {
                    playlist.splice(index, 1);
                    updatePlaylist();
                });
                li.appendChild(deleteButton);
                playlistElement.appendChild(li);
            });
        }

        document.getElementById('addSongButton').addEventListener('click', () => {
            const name = document.getElementById('songName').value;
            const duration = parseInt(document.getElementById('songDuration').value);
            if (name && !isNaN(duration)) {
                const song = createSong(name, duration);
                playlist.push(song);
                updatePlaylist();
            } else {
                alert('Будь ласка, введіть коректні дані.');
            }
        });

        document.getElementById('sortByNameButton').addEventListener('click', () => {
            playlist.sort((a, b) => a.name.localeCompare(b.name));
            updatePlaylist();
        });

        document.getElementById('sortByDurationButton').addEventListener('click', () => {
            playlist.sort((a, b) => a.duration - b.duration);
            updatePlaylist();
        });

        document.getElementById('calculateTotalDurationButton').addEventListener('click', () => {
            const totalDuration = playlist.reduce((sum, song) => sum + song.duration, 0);
            document.getElementById('totalTime').textContent = `Загальна тривалість: ${totalDuration} хв`;
        });
    </script>
</body>
</html>
