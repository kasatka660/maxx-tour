import React, { useEffect, useState } from "react";
import "./ConsultationModal.css";

interface ConsultationModalProps {
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  onClose,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: отправить заявку на backend / в мессенджер.
    console.log("Consultation request:", { name, phone, comment });
    setSubmitted(true);
  };

  return (
    <div
      className="consult-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Получить консультацию"
    >
      <div className="consult-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="consult-modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        {submitted ? (
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
              className="consult-modal-submit"
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
                  required
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
                  rows={3}
                />
              </label>

              <button type="submit" className="consult-modal-submit">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
