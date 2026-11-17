// Lista ng mga kaibigan at ang kanilang mensahe
const friends = [
    {
        name: "Mark",
        image: "images/mark.png",
        message: "Mark, salamat sa lahat ng tawa at kulitan natin! Ikaw ang isa sa mga taong hindi ko makakalimutan. Stay awesome, pare!"
    },
    {
        name: "Jerome",
        image: "images/jerome.png",
        message: "Jerome, salamat sa pagiging mabuting kaibigan. Lagi kang nandiyan kapag kailangan kita. Ingat ka palagi!"
    },
    {
        name: "Rabas",
        image: "images/rabas.png",
        message: "Rabas, ang saya-saya nating magkasama! Salamat sa mga alaala na hindi ko makakalimutan. God bless!"
    },
    {
        name: "Sed",
        image: "images/sed.png",
        message: "Sed, ikaw ang pinaka-chill na kaibigan ko. Salamat sa lahat ng advice at support. Keep smiling!"
    },
    {
        name: "Raymond",
        image: "images/raymond.jpg",
        message: "Raymond, salamat sa pagiging totoo at matapat na kaibigan. Ang swerte ko na naging kaibigan kita!"
    },
    {
        name: "Rasul",
        image: "images/rasul.png",
        message: "Rasul, salamat sa lahat ng saya at adventure natin! Hanggang sa muli nating pagkikita, ingat ka palagi!"
    }
];

// Function para gumawa ng mga buttons
function renderButtons() {
    const grid = document.getElementById('friendsGrid');

    friends.forEach((friend, index) => {
        const btn = document.createElement('button');
        btn.className = 'friend-btn';
        btn.textContent = friend.name;
        btn.addEventListener('click', () => showMessage(index));
        grid.appendChild(btn);
    });
}

// Function para ipakita ang mensahe sa bagong page (using template)
function showMessage(index) {
    const friend = friends[index];

    // Gumawa ng bagong HTML content
    const newPage = `
        <!DOCTYPE html>
        <html lang="fil">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mensahe para kay ${friend.name}</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
                body {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                .card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px 30px;
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    text-align: center;
                    animation: fadeIn 0.6s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .profile-pic {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 5px solid #667eea;
                    margin-bottom: 20px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                }
                h1 {
                    color: #333;
                    margin-bottom: 20px;
                    font-size: 28px;
                }
                .message {
                    color: #555;
                    font-size: 17px;
                    line-height: 1.7;
                    background: #f5f5f5;
                    padding: 20px;
                    border-radius: 15px;
                    border-left: 5px solid #667eea;
                    text-align: left;
                    margin-bottom: 25px;
                }
                .back-btn {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    transition: all 0.3s ease;
                }
                .back-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(102,126,234,0.4);
                }
            </style>
        </head>
        <body>
            <div class="card">
                <img src="${friend.image}" alt="${friend.name}" class="profile-pic" 
                     onerror="this.src='https://via.placeholder.com/150/667eea/ffffff?text=${friend.name}'">
                <h1>Para kay ${friend.name} 💖</h1>
                <p class="message">${friend.message}</p>
                <a href="index.html" class="back-btn">← Bumalik</a>
            </div>
        </body>
        </html>
    `;

    // Buksan sa bagong tab
    const newWindow = window.open('', '_blank');
    newWindow.document.write(newPage);
    newWindow.document.close();
}

// I-load ang buttons kapag ready na ang page
document.addEventListener('DOMContentLoaded', renderButtons);