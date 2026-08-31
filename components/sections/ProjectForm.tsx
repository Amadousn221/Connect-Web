'use client';

import {
  useId,
  useState,
  type FocusEvent,
  type FormEvent,
} from 'react';
import { projectTypes, formCopy } from '@/content/fr/contact';
import styles from './ProjectForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'projectType' | 'message';
type Errors = Partial<Record<FieldName, string>>;

const REQUIRED: FieldName[] = ['name', 'email', 'projectType', 'message'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: FieldName, value: string): string | undefined {
  const v = value.trim();
  if (name === 'name' && !v) return 'Votre nom est requis.';
  if (name === 'email') {
    if (!v) return 'Votre email est requis.';
    if (!EMAIL_RE.test(v)) return 'Cet email ne semble pas valide.';
  }
  if (name === 'projectType' && !v) return 'Choisissez un type de projet.';
  if (name === 'message' && !v) return 'Décrivez votre besoin en quelques mots.';
  return undefined;
}

export function ProjectForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const uid = useId();
  const errId = (name: string) => `${uid}-err-${name}`;

  const onBlur = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name as FieldName;
    if (!REQUIRED.includes(name)) return;
    const msg = validate(name, e.target.value);
    setErrors((prev): Errors => ({ ...prev, [name]: msg }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get('_gotcha') ?? '').trim() !== '') return; // honeypot

    const next: Errors = {};
    for (const k of REQUIRED) {
      const err = validate(k, String(data.get(k) ?? ''));
      if (err) next[k] = err;
    }
    setErrors(next);
    const firstBad = REQUIRED.find((k) => next[k]);
    if (firstBad) {
      form.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error('bad status');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className={styles.success} role="status">
        {formCopy.successTitle}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {status === 'error' ? (
        <p className={styles.error} role="alert">
          {formCopy.errorTitle}
        </p>
      ) : null}

      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className={styles.hp}
      />

      <div className={styles.row}>
        <TextField label="Nom complet" name="name" required error={errors.name} errId={errId('name')} onBlur={onBlur} autoComplete="name" />
        <TextField label="Organisation" name="organisation" onBlur={onBlur} autoComplete="organization" />
      </div>

      <div className={styles.row}>
        <TextField label="Email" name="email" type="email" required error={errors.email} errId={errId('email')} onBlur={onBlur} autoComplete="email" />
        <TextField label="Téléphone" name="phone" type="tel" onBlur={onBlur} autoComplete="tel" />
      </div>

      <label className={styles.field}>
        <span className={styles.labelText}>
          Type de projet <em aria-hidden="true">*</em>
        </span>
        <select
          name="projectType"
          defaultValue=""
          onBlur={onBlur}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? errId('projectType') : undefined}
        >
          <option value="" disabled>
            Choisir…
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <span id={errId('projectType')} className={styles.fieldError}>
            {errors.projectType}
          </span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span className={styles.labelText}>
          Message <em aria-hidden="true">*</em>
        </span>
        <textarea
          name="message"
          rows={compact ? 3 : 5}
          onBlur={onBlur}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errId('message') : undefined}
        />
        {errors.message ? (
          <span id={errId('message')} className={styles.fieldError}>
            {errors.message}
          </span>
        ) : null}
      </label>

      <div aria-live="polite" className={styles.srOnly}>
        {status === 'submitting' ? formCopy.sendingLabel : ''}
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? formCopy.sendingLabel : formCopy.submitLabel}
      </button>
    </form>
  );
}

function TextField({
  label,
  name,
  type = 'text',
  required,
  error,
  errId,
  onBlur,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  errId?: string;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.labelText}>
        {label} {required ? <em aria-hidden="true">*</em> : null}
      </span>
      <input
        type={type}
        name={name}
        onBlur={onBlur}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error && errId ? errId : undefined}
      />
      {error && errId ? (
        <span id={errId} className={styles.fieldError}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
