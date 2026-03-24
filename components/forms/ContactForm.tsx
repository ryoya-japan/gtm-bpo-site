"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  website: string;
  country: string;
  industry: string;
  lookingFor: string;
  timeline: string;
  message: string;
};

const initialData: FormData = {
  fullName: "",
  company: "",
  email: "",
  website: "",
  country: "",
  industry: "",
  lookingFor: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.message.trim()) newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const body = new URLSearchParams();
      body.append("form-name", "contact");
      (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
        body.append(key, formData[key]);
      });
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(initialData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-dark corner-brackets-cyan rounded-xl p-8 text-center">
        <div
          className="w-12 h-12 border border-cyan/40 flex items-center justify-center mx-auto mb-4"
          style={{ borderRadius: "2px" }}
        >
          <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-white text-lg mb-2" style={{ letterSpacing: "-0.02em" }}>Message received</h3>
        <p className="text-[#a0aec0] text-sm">We&apos;ll be in touch within 1-2 business days.</p>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 text-sm border rounded-lg bg-surface text-white placeholder-[#a0aec0]/50 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/60 transition-all ${
      errors[field] ? "border-accent/60 bg-accent/5" : "border-[#1a2040]"
    }`;

  const labelClass = "block text-xs font-semibold text-[#a0aec0] mb-1.5 uppercase tracking-wider";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* Netlify Forms — hidden fields required for bot detection */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass("fullName")} placeholder="Jane Smith" />
          {errors.fullName && <p className="mt-1 text-xs text-accent">{errors.fullName}</p>}
        </div>
        <div>
          <label className={labelClass}>
            Company Name <span className="text-accent">*</span>
          </label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass("company")} placeholder="Acme Inc." />
          {errors.company && <p className="mt-1 text-xs text-accent">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            Work Email <span className="text-accent">*</span>
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass("email")} placeholder="jane@company.com" />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>Website</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} className={inputClass("website")} placeholder="https://yourcompany.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            Country / Region <span className="text-accent">*</span>
          </label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClass("country")} placeholder="United States" />
          {errors.country && <p className="mt-1 text-xs text-accent">{errors.country}</p>}
        </div>
        <div>
          <label className={labelClass}>Industry</label>
          <select name="industry" value={formData.industry} onChange={handleChange} className={inputClass("industry")}>
            <option value="">Select industry</option>
            <option value="saas">SaaS / Software</option>
            <option value="fintech">Fintech</option>
            <option value="consumer">Consumer Goods / D2C</option>
            <option value="marketplace">Marketplace / Platform</option>
            <option value="ai">AI / Technology</option>
            <option value="wellness">Health &amp; Wellness</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>What are you looking for?</label>
          <select name="lookingFor" value={formData.lookingFor} onChange={handleChange} className={inputClass("lookingFor")}>
            <option value="">Select primary need</option>
            <option value="market-research">Market Research / Validation</option>
            <option value="gtm-strategy">Go-to-Market Strategy</option>
            <option value="partnerships">Partnerships &amp; BD</option>
            <option value="localization">Localization</option>
            <option value="launch">Launch Execution</option>
            <option value="bpo">Operations / BPO</option>
            <option value="full-service">Full Market Entry Support</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Estimated Timeline</label>
          <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass("timeline")}>
            <option value="">Select timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">Within 1–3 months</option>
            <option value="3-6months">Within 3–6 months</option>
            <option value="6plus">6+ months / planning stage</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClass("message")}
          placeholder="Tell us about your business, your Japan goals, and any specific challenges you're facing."
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-accent bg-accent/5 border border-accent/30 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <Button type="submit" size="lg" variant="primary" disabled={status === "submitting"} className={`w-full sm:w-auto ${status !== "submitting" ? "btn-glow" : ""}`}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
