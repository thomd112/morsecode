document.addEventListener("DOMContentLoaded", function() {
    const letterGrid = document.getElementById('letter-grid');
    const soundPlayer = document.getElementById('morse_code_audios');
    const phraseDisplay = document.getElementById('phrase-display');

    const letters = [
        {
            "alphabet": "A",
            "morsecode": ".-",
            "phrase": "a <em>part</em>",
            "sound": "A_morse_code.ogg",
            "id": 1
        },
        {
            "alphabet": "B",
            "morsecode": "-...",
            "phrase": "<em>bob</em> <strong>is the man</strong>",
            "sound": "B_morse_code.ogg",
            "id": 2
        },
        {
            "alphabet": "C",
            "morsecode": "-.-.",
            "phrase": "<em>co</em> ca <em>co</em> la",
            "sound": "C_morse_code.ogg",
            "id": 3
        },
        {
            "alphabet": "D",
            "morsecode": "-..",
            "phrase": "<em>dog</em> did it",
            "sound": "D_morse_code.ogg",
            "id": 4
        },
        {
            "alphabet": "E",
            "morsecode": ".",
            "phrase": "eh",
            "sound": "E_morse_code.ogg",
            "id": 5
        },
        {
            "alphabet": "F",
            "morsecode": "..-.",
            "phrase": " fetch a   <em>fire</em> man",
            "sound": "F_morse_code.ogg",
            "id": 6
        },
        {
            "alphabet": "G",
            "morsecode": "--.",
            "phrase": "<em>good</em> <em> grav</em> y",
            "sound": "G_morse_code.ogg",
            "id": 7
        },
        {
            "alphabet": "H",
            "morsecode": "....",
            "phrase": "hip pit ty hop",
            "sound": "H_morse_code.ogg",
            "id": 8
        },
        {
            "alphabet": "I",
            "morsecode": "..",
            "phrase": "i bid",
            "sound": "I_morse_code.ogg",
            "id": 9
        },
        {
            "alphabet": "J",
            "morsecode": ".---",
            "phrase": "in <em>jaws jaws jaws </em>",
            "sound": "J_morse_code.ogg",
            "id": 10
        },
        {
            "alphabet": "K",
            "morsecode": "-.-",
            "phrase": "<em>kang</em> a <em>roo</em>",
            "sound": "K_morse_code.ogg",
            "id": 11
        },
        {
            "alphabet": "L",
            "morsecode": ".-..",
            "phrase": "los <em>an</em> ge les",
            "sound": "L_morse_code.ogg",
            "id": 12
        },
        {
            "alphabet": "M",
            "morsecode": "−−",
            "phrase": "<em>mmm mmm</em>",
            "sound": "M_morse_code.ogg",
            "id": 13
        },
        {
            "alphabet": "N",
            "morsecode": "-.",
            "phrase": "<em>no</em> way",
            "sound": "N_morse_code.ogg",
            "id": 14
        },
        {
            "alphabet": "O",
            "morsecode": "---",
            "phrase": "<em>oh my god</em>",
            "sound": "O_morse_code.ogg",
            "id": 15
        },
        {
            "alphabet": "P",
            "morsecode": ".--.",
            "phrase": "a <em>poo</em> <em>py</em> smell",
            "sound": "P_morse_code.ogg",
            "id": 16
        },
        {
            "alphabet": "Q",
            "morsecode": "--.-",
            "phrase": "<em>god</em> <em>save</em>  the <em>queen</em>",
            "sound": "Q_morse_code.ogg",
            "id": 17
        },
        {
            "alphabet": "R",
            "morsecode": ".-.",
            "phrase": "ro <em>ta</em> tion",
            "sound": "R_morse_code.ogg",
            "id": 18
        },
        {
            "alphabet": "S",
            "morsecode": "...",
            "phrase": "si si si",
            "sound": "S_morse_code.ogg",
            "id": 19
        },
        {
            "alphabet": "T",
            "morsecode": "-",
            "phrase": "<em>tall</em>",
            "sound": "T_morse_code.ogg",
            "id": 20
        },
        {
            "alphabet": "U",
            "morsecode": "..-",
            "phrase": "u ni <em>form</em>",
            "sound": "U_morse_code.ogg",
            "id": 21
        },
        {
            "alphabet": "V",
            "morsecode": "...-",
            "phrase": "vic to ry <em>thee</em>",
            "sound": "V_morse_code.ogg",
            "id": 22
        },
        {
            "alphabet": "W",
            "morsecode": ".--",
            "phrase": "the <em>world</em> <em>war</em>",
            "sound": "W_morse_code.ogg",
            "id": 23
        },
        {
            "alphabet": "X",
            "morsecode": "-..-",
            "phrase": "<em>x</em> marks the <em>spot</em>",
            "sound": "X_morse_code.ogg",
            "id": 24
        },
        {
            "alphabet": "Y",
            "morsecode": "-.--",
            "phrase": "<em>you're</em> a <em>cool</em> <em>dude</em> ",
            "sound": "Y_morse_code.ogg",
            "id": 25
        },
        {
            "alphabet": "Z",
            "morsecode": "--..",
            "phrase": "<em>zinc</em> <em>zoo</em>  kee per",
            "sound": "Z_morse_code.ogg",
            "id": 26
        }
    ];

    // Function to create audio elements and handle click events
    function setupGridItems() {
        letters.forEach(letter => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = letter.alphabet;

            // Create audio element for each letter
            const audio = new Audio(letter.sound);

            // Click event to play audio and display phrase
            gridItem.addEventListener('click', function() {
                audio.currentTime = 0; // Rewind to the beginning
                audio.play();
                phraseDisplay.innerHTML = letter.phrase;
            });

            letterGrid.appendChild(gridItem);
        });
    }

    // Initialize grid items
    setupGridItems();
});
