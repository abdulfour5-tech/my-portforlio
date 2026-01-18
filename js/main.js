const items = document.querySelectorAll('.fade-up,.fade-in');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

items.forEach(i=>observer.observe(i));

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.onclick = ()=> menu.classList.toggle('show-menu');

// Close menu when clicking a link (mobile)
document.querySelectorAll('#menu a').forEach(link=>{
  link.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
  });
});


const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(!name || !email || !message){
    msg.innerText = "Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  msg.innerText = "Sending...";
  msg.style.color = "white";

  emailjs.send("service_tc2rlrq", "template_9xitu6x", {
    name: name,
    email: email,
    message: message
  })
  .then(function(response) {
     msg.innerText = "Message sent successfully!";
     msg.style.color = "#38bdf8";
     form.reset();
  }, function(error) {
     console.log("FAILED...", error);
     msg.innerText = "Failed to send message.";
     msg.style.color = "red";
  });
});






