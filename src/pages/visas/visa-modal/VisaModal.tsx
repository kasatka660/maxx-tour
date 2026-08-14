import React, { useContext, useEffect } from "react";
import "../../../components/modal/modal.css";
import "./VisaModal.css";
import type { Visa } from "../visa-card/VisaCard";
import { ConsultationModalContext } from "../../../utils/context/consultation-modal";

interface VisaModalProps {
  visa: Visa;
  onClose: () => void;
}

const VisaModal: React.FC<VisaModalProps> = ({ visa, onClose }) => {
  const modalContext = useContext(ConsultationModalContext);
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

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Виза — ${visa.country}`}
    >
      <div className="modal visa-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <div className="visa-modal-head">
          <span className="visa-modal-flag" aria-hidden="true">
            {visa.flag}
          </span>
          <div>
            <h3 className="visa-modal-title">{visa.country}</h3>
            <p className="visa-modal-subtitle">Оформление визы</p>
          </div>
          <span className="visa-modal-price">{visa.price}</span>
        </div>

        {visa.details ? (
          <>
            <h4 className="visa-modal-section-title">
              Информация о подаче документов
            </h4>
            <dl className="visa-modal-info">
              <div className="visa-modal-row">
                <dt>Города подачи</dt>
                <dd>{visa.details.cities.join(", ")}</dd>
              </div>
              <div className="visa-modal-row">
                <dt>Способ подачи</dt>
                <dd>{visa.details.submission}</dd>
              </div>
              <div className="visa-modal-row">
                <dt>Место рассмотрения</dt>
                <dd>{visa.details.reviewPlace}</dd>
              </div>
              <div className="visa-modal-row">
                <dt>Сроки рассмотрения</dt>
                <dd>{visa.details.reviewTerm}</dd>
              </div>
              <div className="visa-modal-row">
                <dt>Регистрация</dt>
                <dd>
                  <a
                    href={visa.details.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Записаться на подачу
                  </a>
                </dd>
              </div>
              <div className="visa-modal-row">
                <dt>Необходимые документы</dt>
                <dd>
                  <a
                    href={visa.details.documentsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Список документов
                  </a>
                </dd>
              </div>
            </dl>

            <div className="visa-modal-fees">
              <div className="visa-modal-fee">
                <span>Консульский сбор</span>
                <strong>{visa.details.consularFee}</strong>
              </div>
              <div className="visa-modal-fee">
                <span>Сервисный сбор</span>
                <strong>{visa.details.serviceFee}</strong>
              </div>
            </div>
            <p className="visa-modal-payment">{visa.details.payment}</p>
          </>
        ) : (
          /* TODO: добавьте детальную информацию для этой страны. */
          <p className="visa-modal-text">
            Поможем собрать документы, заполнить анкету и записаться в визовый
            центр. Оставьте заявку — и мы свяжемся с вами.
          </p>
        )}

        <button
          type="button"
          className="modal-cta visa-modal-cta"
          onClick={modalContext.open}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default VisaModal;
