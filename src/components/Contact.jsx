import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

// Set these in .env.local for local dev, and in the Netlify dashboard's environment
// variables for production — see .env.example. Never commit real values.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY, limitRate: { throttle: 10000 } });
}

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState("idle"); // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (form.website.value) return; // honeypot
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim().slice(0, 2000);
    if (!name || !email || !message) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS env vars are not set — see .env.example");
      setFormState("error");
      return;
    }

    setFormState("sending");
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: name, from_email: email, message })
      .then(() => {
        setFormState("success");
        form.reset();
        setTimeout(() => setFormState("idle"), 60000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setFormState("error");
      });
  }

  return (
    <section id="contact" className="pt-24 pb-8 md:pt-[120px]">
      <Container>
        <Reveal as="h2" className="mb-10 font-serif text-[clamp(40px,9vw,130px)] font-normal leading-[0.9] tracking-[-0.03em] md:mb-[60px]">
          Let's Build <em className="italic text-accent">Something</em>!
        </Reveal>

        <Reveal delay={0.1} as="form" ref={formRef} onSubmit={handleSubmit} className="mb-16 max-w-xl md:mb-20" noValidate>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.06em] text-muted">Name</span>
              <input
                type="text"
                name="from_name"
                required
                maxLength={100}
                placeholder="Your name"
                className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-text outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.06em] text-muted">Email</span>
              <input
                type="email"
                name="from_email"
                required
                maxLength={200}
                placeholder="your@email.com"
                className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-text outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent"
              />
            </label>
          </div>

          <label className="mt-6 block">
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted">Message</span>
            <textarea
              name="message"
              required
              maxLength={2000}
              rows={4}
              placeholder="What's on your mind?"
              className="mt-2 w-full resize-y border-b border-line bg-transparent py-2 text-[15px] text-text outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={formState === "sending" || formState === "success"}
            className="group relative mt-8 cursor-pointer font-mono text-[13px] tracking-[0.08em] text-text disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="relative">
              {formState === "idle" && "Send message"}
              {formState === "sending" && "Sending…"}
              {formState === "success" && "Message sent"}
              {formState === "error" && "Try again"}
              <span className="absolute -bottom-1 left-0 right-full h-px bg-accent transition-[right] duration-[350ms] ease-out group-hover:right-0" />
            </span>
          </button>

          {formState === "error" && (
            <p className="mt-3 text-sm text-text-2">Something went wrong, try again or email me directly.</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
