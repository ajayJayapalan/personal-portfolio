import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";

const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS public key

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    if (!SERVICE_KEY || !TEMPLATE_KEY || !PUBLIC_KEY) {
      console.error("EmailJS keys are not set properly.");
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY); // Replace with your EmailJS public key

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_KEY, // Replace with your EmailJS service ID
        TEMPLATE_KEY, // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Your Name", // You can customize this
        }
      );

      console.log("Email sent successfully:", result.text);
      setStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ScrollReveal>
      <div className="glass rounded-3xl p-4 xs:p-6 sm:p-8 relative overflow-hidden group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity"></div>

        <div className="relative z-10">
          <div className="mb-4 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm sm:text-base text-white/70">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Status Message */}
          {status.type && (
            <div
              className={`mb-4 p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-500/20 border border-green-500/50 text-green-300"
                  : "bg-red-500/20 border border-red-500/50 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
              >
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                rows={6}
                className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400 resize-none"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-semibold neon-glow transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SendMessage;
