

const prompts = [
  'Create a futuristic landing page with neon vibes and smooth animations.',
  'Build a minimalist portfolio site using only CSS grid and flexbox.',
  'Design a dark mode toggle with smooth transitions and shadows.',
  'Generate a colorful gradient background with random angles.',
  'Create a chat app UI with message bubbles and timestamps.',
];

const promptText = document.getElementById('promptText');
const newPromptBtn = document.getElementById('newPromptBtn');
const copyBtn = document.getElementById('copyBtn');

newPromptBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  promptText.textContent = `"${prompts[randomIndex]}"`;
});

copyBtn.addEventListener('click', () => {
  const originalText = copyBtn.textContent;
  navigator.clipboard.writeText(originalText)
    .then(() => {
      copyBtn.textContent = "Copied! 🚀";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    })
    .catch(() => {
      copyBtn.textContent = "Copy failed 😕";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
});

