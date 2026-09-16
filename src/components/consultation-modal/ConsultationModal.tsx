"use client";

import React, { useEffect, useState } from "react";
import "../modal/modal.css";
import "./ConsultationModal.css";
import { sendConsultation } from "../../utils/api/send-consultation";

interface ConsultationModalProps {
  onClose: () => void;
}

type Status = "idle" | "submitting" | "submitted";

const ConsultationModal: React.FC<ConsultationModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  // Honeypot — hidden from humans, so anything here means a bot filled it in.
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const isSubmitting = status === "submitting";

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStatus("submitting");
    setError(null);
    try {
      await sendConsultation({ name, phone, comment, website });
      setStatus("submitted");
    } catch (e) {
      console.log(e);
      debugger;
      const customError = e as Error;
      customError.message
        ? setError(customError.message)
        : setError("Не удалось отправить заявку. Попробуйте ещё раз.");
      setStatus("idle");
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Получить консультацию"
    >
      <div className="modal consult-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        {status === "submitted" ? (
          <div className="consult-modal-success">
            <span className="consult-modal-success-icon" aria-hidden="true">
              ✓
            </span>
            <h3 className="consult-modal-title">Спасибо за заявку!</h3>
            <p className="consult-modal-subtitle">
              Мы свяжемся с вами в ближайшее время.
            </p>
            <button
              type="button"
              className="modal-cta consult-modal-submit"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="consult-modal-title">Получить консультацию</h3>
            <p className="consult-modal-subtitle">
              Оставьте свои контакты — и мы поможем подобрать идеальный тур.
            </p>

            <form className="consult-modal-form" onSubmit={handleSubmit}>
              <label className="consult-modal-field">
                <span>Имя</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  maxLength={100}
                  disabled={isSubmitting}
                />
              </label>

              <label className="consult-modal-field">
                <span>Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+375 (__) ___-__-__"
                  maxLength={40}
                  disabled={isSubmitting}
                  required
                />
              </label>

              <label className="consult-modal-field">
                <span>Комментарий</span>
                <textarea
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Куда хотите поехать?"
                  maxLength={2000}
                  disabled={isSubmitting}
                  rows={3}
                />
              </label>

              {/* Honeypot. Hidden from people and from assistive tech, but a
                  bot filling every field will trip it. */}
              <input
                type="text"
                name="website"
                className="consult-modal-honeypot"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {error && (
                <p className="consult-modal-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="modal-cta consult-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправляем…" : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
