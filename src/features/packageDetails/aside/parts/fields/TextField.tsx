import React from "react";
export default function TextField({
  name,
  label,
  icon,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
        {icon}
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input input-bordered input-sm w-full"
      />
    </div>
  );
}