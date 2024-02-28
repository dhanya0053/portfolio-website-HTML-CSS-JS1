function typewriterEffect(phrases, elementId, sleepTime) {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const el = document.getElementById(elementId);
    let curPhraseIndex = 0;
    const writeLoop = async () => {
        while (true) {
            let curWord = phrases[curPhraseIndex];
            for (let i = 0; i < curWord.length; i++) {
                el.innerText = curWord.substring(0, i + 1);
                await sleep(sleepTime);
            }
            await sleep(sleepTime * 10);
            for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i - 1);
                await sleep(sleepTime);
            }
            await sleep(sleepTime * 5);
            curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
        }
    };
    writeLoop();
}
const phrases = ["Coder", "Student", "Web Programmer"];
const elementId = "auto-type";
const sleepTime = 100;
typewriterEffect(phrases, elementId, sleepTime);


$(function() {

    // Menu Responsive
    $(".menu-responsive").toggle();
  
    $(".menu-bars").on("click", function() {
        $(".menu-responsive").toggle("slow");
    });
  
  
    // Scroll click on menu
    $(".scroll").on("click", function() {
        $(this).each(function() {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });
  
    
    // Progress Bar Animate
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
       origin: "left",
       duration: 2000,
       distance: "100%"
    });
  
  
    // Contact Text Animate
    const sentences = ["web designer ?", "web developer ?"];
    let i = 0;
  
    setInterval(function() {
        $(".text-animate").fadeOut(function() {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    const botIcon = document.getElementById('bot-icon');
    const chatbox = document.getElementById('chatbox');
    const input = document.getElementById('input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chatbox visibility
    botIcon.addEventListener('click', function() {
        chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
    });

    // Welcome message
    addMessage("Welcome to my portfolio! How can I assist you today?");

    // Add message to chatbox
    function addMessage(message) {
        const p = document.createElement('p');
        p.textContent = message;
        chatMessages.appendChild(p);
    }

    // Handle user input
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userInput = input.value.trim();
            if (userInput !== '') {
                addMessage(`You: ${userInput}`);
                handleUserInput(userInput);
                input.value = '';
            }
        }
    });

    // Handle user input
    function handleUserInput(input) {
        const trimmedInput = input.trim().toLowerCase();

        // Simple responses based on user input
        switch (trimmedInput) {
            case 'hello':
            case 'hi':
                addMessage("Bot: Hello there! Feel free to explore my portfolio.");
                break;
            case 'portfolio':
                addMessage("Bot: You're already in my portfolio! Take a look around and let me know if you have any questions.");
                break;
            case 'projects':
                addMessage("Bot: You can check out my projects in the portfolio section. If you want more details about any project, just ask!");
                break;
            case 'contact':
                addMessage("Bot: You can find my contact information in the contact section. I'm always open to new opportunities and collaborations!");
                break;
            case 'about':
                addMessage("Bot: Sure! I'm a passionate developer with a focus on web development. I love creating engaging and user-friendly experiences.");
                break;
            case 'skills':
                addMessage("Bot: My skills include HTML, CSS, JavaScript, React, Node.js, and more. I'm always learning and improving!");
                break;
            default:
                addMessage("Bot: I'm sorry, I didn't understand that. Feel free to ask me about my portfolio, projects, skills, or anything else!");
        }
    }
});
