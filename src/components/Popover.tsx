"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Align = "start" | "center" | "end";
type Side = "bottom" | "top";

export interface PopoverProps {
  trigger: (props: {
    ref: React.Ref<HTMLButtonElement>;
    onClick: () => void;
    "aria-expanded": boolean;
  }) => React.ReactNode;
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
  side?: Side;
  align?: Align;
  matchTriggerWidth?: boolean;
  maxHeight?: number;
  className?: string;
  zIndex?: number;
  onOpenChange?: (open: boolean) => void;
}

export default function Popover({
  trigger,
  children,
  side = "bottom",
  align = "start",
  matchTriggerWidth = false,
  maxHeight = 480,
  className = "",
  zIndex = 100000,
  onOpenChange,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const toggle = useCallback(() => {
    const next = !open;
    setOpen(next);
    onOpenChange?.(next);
  }, [open, onOpenChange]);

  const updatePosition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const content = contentRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const contentW = content?.offsetWidth ?? 0;
    const contentH = content?.offsetHeight ?? 0;

    let left = rect.left;
    if (align === "center") {
      left = rect.left + rect.width / 2 - (matchTriggerWidth ? rect.width : contentW) / 2;
    }
    if (align === "end") {
      left = rect.right - (matchTriggerWidth ? rect.width : contentW);
    }
    left = Math.max(8, Math.min(left, vw - (matchTriggerWidth ? rect.width : contentW) - 8));

    let top = side === "bottom" ? rect.bottom + 8 : rect.top - contentH - 8;
    if (top + contentH > vh) top = Math.max(8, vh - contentH - 8);
    if (top < 0) top = 8;

    setPos({ top, left, width: rect.width });
  }, [align, matchTriggerWidth, side]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    const onClickAway = (e: MouseEvent) => {
      if (!contentRef.current || !triggerRef.current) return;
      const target = e.target as Node;
      if (!contentRef.current.contains(target) && !triggerRef.current.contains(target)) {
        close();
      }
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [open, close, updatePosition]);

  return (
    <>
      {trigger({ ref: triggerRef, onClick: toggle, "aria-expanded": open })}
      {open &&
        createPortal(
          <div
            ref={contentRef}
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              width: matchTriggerWidth ? pos.width : undefined,
              maxHeight,
              zIndex,
            }}
            className={`overflow-auto rounded-lg bg-white p-3 shadow-lg ring-1 ring-slate-200 ${className || ""}`}
          >
            {typeof children === "function" ? (children as (c: () => void) => React.ReactNode)(close) : children}
          </div>,
          document.body
        )}
    </>
  );
}