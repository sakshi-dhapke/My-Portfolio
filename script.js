function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Portfolio Message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  window.location.href = `mailto:sakshidhapke4@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}