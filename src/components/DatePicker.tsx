"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./DatePicker.module.css";

type DatePickerProps = {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  name?: string;
};

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function formatDate(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function DatePicker({ label, value, onChange, minDate, name }: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value ? value.getFullYear() : today.getFullYear());
  const [viewMonth, setViewMonth] = useState(value ? value.getMonth() : today.getMonth());
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    onChange(date);
    setOpen(false);
  };

  const isDisabled = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    if (minDate) { const min = new Date(minDate); min.setHours(0,0,0,0); return date < min; }
    return date < today;
  };

  return (
    <div className={styles.wrap} ref={wrapRef} style={{ position: "relative" }}>
      <label className={styles.label}>{label}</label>

      {name && value && (
        <input type="hidden" name={name} value={value.toISOString().slice(0, 10)} />
      )}

      <button
        type="button"
        className={`${styles.trigger} ${open ? styles["trigger--open"] : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={`Select ${label}`}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Calendar size={16} className={styles.triggerIcon} aria-hidden="true" />
        <span className={`${styles.triggerText} ${!value ? styles["triggerText--placeholder"] : ""}`}>
          {value ? formatDate(value) : "Select date"}
        </span>
      </button>

      {open && (
        <div className={styles.popover} role="dialog" aria-label={`${label} calendar`}>
          <div className={styles.calHeader}>
            <button className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
              <ChevronLeft size={14} />
            </button>
            <span className={styles.calMonth}>{MONTHS[viewMonth]} {viewYear}</span>
            <button className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
              <ChevronRight size={14} />
            </button>
          </div>

          <div className={styles.dayNames} aria-hidden="true">
            {DAYS.map(d => <span key={d} className={styles.dayName}>{d}</span>)}
          </div>

          <div className={styles.days} role="grid" aria-label={`${MONTHS[viewMonth]} ${viewYear}`}>
            {Array.from({ length: firstDay }).map((_, i) => (
              <span key={`e${i}`} className={`${styles.day} ${styles["day--empty"]}`} aria-hidden="true" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(viewYear, viewMonth, day);
              const disabled = isDisabled(day);
              const selected = value ? isSameDay(date, value) : false;
              const isToday = isSameDay(date, today);

              return (
                <button
                  key={day}
                  type="button"
                  className={[
                    styles.day,
                    selected ? styles["day--selected"] : "",
                    isToday && !selected ? styles["day--today"] : "",
                    disabled ? styles["day--disabled"] : ""
                  ].filter(Boolean).join(" ")}
                  onClick={() => !disabled && selectDay(day)}
                  aria-label={`${day} ${MONTHS[viewMonth]} ${viewYear}`}
                  aria-selected={selected}
                  aria-disabled={disabled}
                  tabIndex={disabled ? -1 : 0}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {value && (
            <div className={styles.clearBtn}>
              <button type="button" className={styles.clearLink} onClick={() => { onChange(null as unknown as Date); setOpen(false); }}>
                Clear
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
