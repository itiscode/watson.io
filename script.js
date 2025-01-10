function showPopup(message, nextQuestionId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').innerHTML = message;
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById(nextQuestionId).style.display = 'block';
    }, 2000);
}

function showFinalMessage() {
    document.getElementById('final-message').style.display = 'block';
    document.getElementById('final-message').innerHTML += '<p>Explore more resources here: <a href="https://drive.google.com/drive/folders/1Q5ZKsBZxPD78fg3zkUatGQ3V1C4sv1Sl?usp=sharing" class="link" target="_blank">Everything is possible</a>.</p>';
    document.getElementById('final-message').innerHTML += '<p style="font-style: italic; font-size: 1.5rem; color: #333; animation: fadeIn 2s ease-in-out;">✨🖤 𝑀𝑠. 𝑉𝑖𝑐… 𝐼𝑡’𝑠 𝑝𝑜𝑠𝑠𝑖𝑏𝑙𝑒. 𝐸𝑣𝑒𝑟𝑦𝑡ℎ𝑖𝑛𝑔 𝑖𝑠 𝑝𝑜𝑠𝑠𝑖𝑏𝑙𝑒. 🤍✨</p>';
}

// Show first question immediately
document.getElementById('question-1').style.display = 'block';
