"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">Send us a Message</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="textarea textarea-bordered w-full min-h-[100px]"
          value={form.message}
          onChange={handleChange}
          disabled={loading}
        />
        <button
          type="submit"
          className="btn bg-emerald-500 text-white hover:bg-emerald-600 font-bold"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm text-white"></span>
          ) : (
            "Send Message"
          )}
        </button>
        {sent && (
          <div className="text-emerald-600 text-center font-semibold mt-2">
            Thank you! We’ll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;