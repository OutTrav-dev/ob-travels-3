import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useToast } from "../../context/ToastContext";

interface JobApplyModalProps {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplyModal: React.FC<JobApplyModalProps> = ({
  open,
  onClose,
  jobTitle,
}) => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    } else {
      setResumeFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate error for demonstration (replace with real validation)
    if (!form.email.includes("@")) {
      setLoading(false);
      const msg = "Please enter a valid email address.";
      showToast(msg, "error");
      return;
    }

    // Simulate API
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSent(true);
    showToast("Application sent successfully!", "success");
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1800);
  };

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md relative"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2rem",
        }}
      >
        <button
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-red-500"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-emerald-700 mb-2 text-center">
          Apply for {jobTitle}
        </h2>
        <form className="flex flex-col gap-4 mt-4 relative" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            className="input input-bordered w-full"
            value={form.phone}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <input
            name="experience"
            type="text"
            required
            placeholder="Years of Experience"
            className="input input-bordered w-full"
            value={form.experience}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <input
            name="linkedin"
            type="url"
            placeholder="LinkedIn Profile (optional)"
            className="input input-bordered w-full"
            value={form.linkedin}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <div className="grid grid-cols-1 gap-2">
            <input
              name="addressLine1"
              type="text"
              required
              placeholder="Address Line 1"
              className="input input-bordered w-full"
              value={form.addressLine1}
              onChange={handleChange}
              disabled={loading || sent}
            />
            <input
              name="addressLine2"
              type="text"
              placeholder="Address Line 2"
              className="input input-bordered w-full"
              value={form.addressLine2}
              onChange={handleChange}
              disabled={loading || sent}
            />
            <div className="flex gap-2">
              <input
                name="city"
                type="text"
                required
                placeholder="City"
                className="input input-bordered w-full"
                value={form.city}
                onChange={handleChange}
                disabled={loading || sent}
              />
              <input
                name="state"
                type="text"
                required
                placeholder="State"
                className="input input-bordered w-full"
                value={form.state}
                onChange={handleChange}
                disabled={loading || sent}
              />
            </div>
            <div className="flex gap-2">
              <input
                name="zip"
                type="text"
                required
                placeholder="ZIP/Postal Code"
                className="input input-bordered w-full"
                value={form.zip}
                onChange={handleChange}
                disabled={loading || sent}
              />
              <input
                name="country"
                type="text"
                required
                placeholder="Country"
                className="input input-bordered w-full"
                value={form.country}
                onChange={handleChange}
                disabled={loading || sent}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <input
              ref={fileInputRef}
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="file-input file-input-bordered w-full"
              onChange={handleFileChange}
              disabled={loading || sent}
            />
            {resumeFile && (
              <div className="text-xs text-gray-500 mt-1">
                Selected: {resumeFile.name}
              </div>
            )}
          </div>
          <textarea
            name="message"
            placeholder="Cover Letter / Message"
            className="textarea textarea-bordered w-full min-h-20"
            value={form.message}
            onChange={handleChange}
            disabled={loading || sent}
          />
          <button
            type="submit"
            className="btn bg-emerald-500 text-white hover:bg-emerald-600 font-bold"
            disabled={loading || sent}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm text-white"></span>
            ) : (
              "Submit Application"
            )}
          </button>
          {/* Sent Overlay */}
          {sent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20 animate-fade-in">
              <svg
                className="mb-2"
                width={56}
                height={56}
                fill="none"
                viewBox="0 0 56 56"
              >
                <circle cx="28" cy="28" r="28" fill="#10b981" />
                <path
                  d="M18 29.5l7 7 13-13"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-emerald-700 font-bold text-lg mb-1">Application Sent!</div>
              <div className="text-gray-600 text-sm">Thank you for applying. We’ll get back to you soon.</div>
            </div>
          )}
        </form>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.4s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98);}
            to { opacity: 1; transform: scale(1);}
          }
        `}</style>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;
  const portalRoot = document.getElementById("modal-root") || document.body;
  return createPortal(modalContent, portalRoot);
};

export default JobApplyModal;
