document.addEventListener("DOMContentLoaded", function() {
    const letterGrid = document.getElementById('letter-grid');

    const letters = [
        { "alphabet": "A.-", "phrase": "a <em>part</em>", "sound": "A_morse_code.ogg", "id": 1 },
        { "alphabet": "B -...", "phrase": "<em>bob</em> <strong>is the man</strong>", "sound": "B_morse_code.ogg", "id": 2 },
        { "alphabet": "C-.-.", "phrase": "<em>co</em> ca <em>co</em> la", "sound": "C_morse_code.ogg", "id": 3 },
        { "alphabet": "D-..", "phrase": "<em>dog</em> did it", "sound": "D_morse_code.ogg", "id": 4 },
        { "alphabet": "E .", "phrase": "eh", "sound": "E_morse_code.ogg", "id": 5 },
        { "alphabet": "F ..-.", "phrase": "fetch a <em>fire</em> man", "sound": "F_morse_code.ogg", "id": 6 },
        { "alphabet": "G --.", "phrase": "<em>good</em> <em>grav</em> y", "sound": "G_morse_code.ogg", "id": 7 },
        { "alphabet": "H....", "phrase": "hip pit ty hop", "sound": "H_morse_code.ogg", "id": 8 },
        { "alphabet": "I..", "phrase": "i bid", "sound": "I_morse_code.ogg", "id": 9 },
        { "alphabet": "J.---", "phrase": "in <em>jaws jaws jaws</em>", "sound": "J_morse_code.ogg", "id": 10 },
        { "alphabet": "K-.-", "phrase": "<em>kang</em> a <em>roo</em>", "sound": "K_morse_code.ogg", "id": 11 },
        { "alphabet": "L.-..", "phrase": "los <em>an</em> ge les", "sound": "L_morse_code.ogg", "id": 12 },
        { "alphabet": "M--", "phrase": "<em>mmm mmm</em>", "sound": "M_morse_code.ogg", "id": 13 },
        { "alphabet": "N-.", "phrase": "<em>no</em> way", "sound": "N_morse_code.ogg", "id": 14 },
        { "alphabet": "O---", "phrase": "<em>oh my god</em>", "sound": "O_morse_code.ogg", "id": 15 },
        { "alphabet": "P.--.", "phrase": "a <em>poo</em> <em>py</em> smell", "sound": "P_morse_code.ogg", "id": 16 },
        { "alphabet": "Q--.-", "phrase": "<em>god</em> <em>save</em> the <em>queen</em>", "sound": "Q_morse_code.ogg", "id": 17 },
        { "alphabet": "R.-.", "phrase": "ro <em>ta</em> tion", "sound": "R_morse_code.ogg", "id": 18 },
        { "alphabet": "S...", "phrase": "si si si", "sound": "S_morse_code.ogg", "id": 19 },
        { "alphabet": "T-", "phrase": "<em>tall</em>", "sound": "T_morse_code.ogg", "id": 20 },
        { "alphabet": "U..-", "phrase": "u ni <em>form</em>", "sound": "U_morse_code.ogg", "id": 21 },
        { "alphabet": "V...-", "phrase": "vic to ry <em>thee</em>", "sound": "V_morse_code.ogg", "id": 22 },
        { "alphabet": "W.--", "phrase": "the <em>world</em> <em>war</em>", "sound": "W_morse_code.ogg", "id": 23 },
        { "alphabet": "X-..-", "phrase": "<em>x</em> marks the <em>spot</em>", "sound": "X_morse_code.ogg", "id": 24 },
        { "alphabet": "Y-.--", "phrase": "<em>you're</em> a <em>cool</em> <em>dude</em>", "sound": "Y_morse_code.ogg", "id": 25 },
        { "alphabet": "Z--..", "phrase": "<em>zinc</em> <em>zoo</em> kee per", "sound": "Z_morse_code.ogg", "id": 26 }
    ];

    function setupGridItems() {
        letters.forEach(letter => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = letter.alphabet;

            const phraseElement = document.createElement('div');
            phraseElement.classList.add('phrase');
            phraseElement.innerHTML = letter.phrase;
            gridItem.appendChild(phraseElement);

            // Click event to play sound and display phrase
            gridItem.addEventListener('click', function() {
                const audio = new Audio(letter.sound);
                audio.play();
                document.querySelectorAll('.grid-item').forEach(item => {
                    item.classList.remove('show-phrase');
                });
                gridItem.classList.add('show-phrase');
            });

            letterGrid.appendChild(gridItem);
        });
    }

    // Initialize grid items
    setupGridItems();
});
