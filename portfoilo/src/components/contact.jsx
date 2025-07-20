import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert("Message sent!"))
      .catch(err => alert("Error sending message."));
  };

  return (
    <section id="contact" className="px-10 py-16 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Contact</h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg">
        <input name="user_name" placeholder="Your Name" className="w-full p-2 border" required />
        <input name="user_email" placeholder="Your Email" className="w-full p-2 border" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 border" required />
        <button type="submit" className="bg-black text-white px-4 py-2">Send</button>
      </form>
    </section>
  );
}
