// Navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) {
      t.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
  // Auto switch every 8 seconds
  setInterval(nextTestimonial, 8000);
}

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

// Fade-in on scroll using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => observer.observe(el));

  // Initialize chat widget across pages
  initChat();
});

// Simple chat widget implementation
function initChat() {
  // Create chat button element
  const chatBtn = document.createElement('div');
  chatBtn.className = 'chat-button';
  chatBtn.innerHTML = '<i class="fas fa-comment-dots"></i>';
  document.body.appendChild(chatBtn);

  // Create chat box container
  const chatBox = document.createElement('div');
  chatBox.className = 'chat-box';
  chatBox.innerHTML = `
    <div class="chat-box-header">Chat with Us</div>
    <div class="chat-box-messages"></div>
    <div class="chat-box-input">
      <input type="text" placeholder="Type your message..." />
      <button>Send</button>
    </div>
  `;
  document.body.appendChild(chatBox);

  // Toggle chat visibility
  chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('active');
  });

  const messagesContainer = chatBox.querySelector('.chat-box-messages');
  const input = chatBox.querySelector('input');
  const sendBtn = chatBox.querySelector('button');

  // Helper to send a message
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    input.value = '';
    // Auto-response for demonstration
    setTimeout(() => {
      appendMessage('Thanks for reaching out! We will get back to you shortly.', 'bot');
    }, 500);
  }

  // Append message to chat window
  function appendMessage(text, type) {
    const msgEl = document.createElement('div');
    msgEl.classList.add('message');
    msgEl.classList.add(type === 'user' ? 'from-user' : 'from-us');
    msgEl.textContent = text;
    messagesContainer.appendChild(msgEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });
}