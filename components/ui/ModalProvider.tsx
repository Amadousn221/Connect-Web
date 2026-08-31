'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type ModalName = 'project' | 'contact';

interface ModalCtx {
  active: ModalName | null;
  open: (name: ModalName) => void;
  close: () => void;
}

const Context = createContext<ModalCtx | null>(null);

// Provider monté dans le layout : gère l'ouverture d'une modale à la fois
// (formulaire projet / contact rapide) depuis n'importe quel composant client.
export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ModalName | null>(null);
  const open = useCallback((name: ModalName) => setActive(name), []);
  const close = useCallback(() => setActive(null), []);
  return (
    <Context.Provider value={{ active, open, close }}>
      {children}
    </Context.Provider>
  );
}

export function useModal(): ModalCtx {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('useModal doit être utilisé dans <ModalProvider>');
  return ctx;
}
