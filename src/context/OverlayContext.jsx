'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ThankYouOverlay from '@/components/ThankYouOverlay';

const OverlayContext = createContext({ showOverlay: () => {} });
const DISPLAY_DURATION_MS = 4000;
const EXIT_DURATION_MS = 300;

export function OverlayProvider({ children }) {
  const [overlayConfig, setOverlayConfig] = useState({
    heading: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const removeTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
  }, []);

  const hideOverlay = useCallback(() => {
    setIsClosing(true);
    clearTimers();

    removeTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setOverlayConfig({ heading: '', message: '' });
    }, EXIT_DURATION_MS);
  }, [clearTimers]);

  const showOverlay = useCallback(
    (config) => {
      clearTimers();
      setOverlayConfig(config);
      setIsVisible(true);
      setIsClosing(false);
      closeTimerRef.current = setTimeout(hideOverlay, DISPLAY_DURATION_MS);
    },
    [clearTimers, hideOverlay]
  );

  useEffect(() => clearTimers, [clearTimers]);

  return (
    <OverlayContext.Provider value={{ showOverlay }}>
      {children}
      {isVisible && (
        <ThankYouOverlay
          heading={overlayConfig.heading}
          message={overlayConfig.message}
          isClosing={isClosing}
          onClose={hideOverlay}
        />
      )}
    </OverlayContext.Provider>
  );
}

export const useOverlay = () => useContext(OverlayContext);
