'use client';

import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/components/ui/ModalProvider';
import { contactChannels } from '@/content/fr/contact';
import styles from './QuickContactModal.module.css';

// Modale Contact rapide (Lot D2) — déclenchée par le bouton discret du Header.
// 3 canaux directs + passerelle vers la modale formulaire.
export function QuickContactModal() {
  const { active, open, close } = useModal();
  return (
    <Modal
      isOpen={active === 'contact'}
      onClose={close}
      title="Nous contacter"
      size="sm"
    >
      <div className={styles.list}>
        {contactChannels.phones.map((phone) => (
          <a key={phone.href} href={phone.href} className={styles.channel}>
            {phone.label}
          </a>
        ))}
        <a
          href={contactChannels.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channel}
        >
          {contactChannels.whatsapp.label}
        </a>
        <a
          href={`mailto:${contactChannels.email}`}
          className={styles.channel}
        >
          {contactChannels.email}
        </a>
      </div>

      <button
        type="button"
        className={styles.formLink}
        onClick={() => open('project')}
      >
        Ou remplir le formulaire <span aria-hidden="true">→</span>
      </button>
    </Modal>
  );
}
