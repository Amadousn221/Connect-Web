'use client';

import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/components/ui/ModalProvider';
import { contactIntro } from '@/content/fr/contact';
import { ProjectForm } from './ProjectForm';
import styles from './ProjectModal.module.css';

// Modale Formulaire projet (Lot D2) — déclenchée par les CTA « Parlons de votre
// projet » du Header / drawer. Réutilise <ProjectForm />.
export function ProjectModal() {
  const { active, close } = useModal();
  return (
    <Modal
      isOpen={active === 'project'}
      onClose={close}
      title={contactIntro.title}
      size="md"
    >
      <p className={styles.intro}>{contactIntro.body}</p>
      <ProjectForm compact />
    </Modal>
  );
}
