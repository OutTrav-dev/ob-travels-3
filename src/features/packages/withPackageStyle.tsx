import React from "react";

interface StyleOptions {
  variant?: "default" | "ticket" | "glass" | "classic";
}

export default function withPackageStyle<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function StyledComponent(
    props: P & { advanceStyle?: boolean; styleVariant?: StyleOptions["variant"] }
  ) {
    const { advanceStyle = false, styleVariant = "default", ...rest } = props;

    const styles: Record<string, string> = {
      default: `
        bg-white 
        rounded-xl shadow-md overflow-hidden
      `,

      ticket: `
        bg-white rounded-3xl border-2 border-emerald-300 
        shadow-xl overflow-hidden relative

        before:content-[''] before:absolute before:inset-0 
        before:bg-[url('/ticket-pattern.svg')] before:bg-cover 
        before:opacity-10 before:pointer-events-none
      `,

      glass: `
        bg-white/60 backdrop-blur-xl 
        border border-white/40 shadow-lg rounded-3xl overflow-hidden
      `,

      classic: `
        bg-gradient-to-br from-white via-[#f0fff7] to-emerald-50
        border border-emerald-200 rounded-3xl shadow-lg overflow-hidden
      `,
    };

    const className = advanceStyle ? styles[styleVariant] : styles.default;

    return (
      <div className={className}>
        <WrappedComponent {...(rest as P)} />
      </div>
    );
  };
}
