'use client';

import { useState, type FormEvent } from 'react';

/** お問い合わせフォームの送信先（public/contact.php をそのまま公開ディレクトリに配置する） */
export const CONTACT_ENDPOINT = '/contact.php';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/**
 * フォームの送信状態を管理する。
 * PHP（contact.php）に FormData を POST し、JSON で結果を受け取る。
 */
export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error ?? '送信に失敗しました。時間をおいて再度お試しください。');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : '送信に失敗しました。時間をおいて再度お試しください。',
      );
      setStatus('error');
    }
  }

  return { status, errorMessage, handleSubmit };
}
