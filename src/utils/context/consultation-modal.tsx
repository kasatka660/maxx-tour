import React, { createContext, useCallback, useState } from "react";
import GetConsultationModal from "../../components/get-consultation-modal/GetConsultationModal";

interface ConsultationModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const initialContextValue: ConsultationModalContextValue = {
  isOpen: false,
  open: () => {},
  close: () => {},
};
export const ConsultationModalContext =
  createContext<ConsultationModalContextValue>(initialContextValue);

/**
 * Wraps the app and owns the "Получить консультацию" modal state, so any
 * component can open/close it via `useConsultationModal()`.
 */
export const ConsultationModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ConsultationModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && <GetConsultationModal onClose={close} />}
    </ConsultationModalContext.Provider>
  );
};
