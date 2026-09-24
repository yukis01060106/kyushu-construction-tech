'use client';

import { useEffect, useState } from 'react';
import { LOADER_DONE_EVENT } from '@/components/home/Loader';
import { cn } from '@/lib/cn';

type Line = { kind: 'cmd' | 'out' | 'ok'; text: string };

/** ヒーロー右側のターミナル演出で流すスクリプト */
const script: Line[] = [
  { kind: 'cmd', text: 'kct analyze --target 業務フロー' },
  { kind: 'ok', text: '課題を 12 件検出 / 優先度を整理しました' },
  { kind: 'cmd', text: 'kct build --stack next,aws,kintone' },
  { kind: 'out', text: 'compiling  ████████████  100%' },
  { kind: 'ok', text: 'テスト 248 件 passed' },
  { kind: 'cmd', text: 'kct deploy --env construction-dx' },
  { kind: 'ok', text: '現場へのデプロイが完了しました' },
];

const TYPE_MS = 38;
const LINE_PAUSE_MS = 420;

/** コマンドが1文字ずつ打ち込まれていくターミナル風ウィンドウ（装飾） */
export function HeroTerminal({ className }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineIndex(script.length);
      return;
    }
    const start = () => setStarted(true);
    window.addEventListener(LOADER_DONE_EVENT, start);
    const fallback = window.setTimeout(start, 6000);
    return () => {
      window.removeEventListener(LOADER_DONE_EVENT, start);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!started || lineIndex >= script.length) return;
    const line = script[lineIndex];
    // 出力行は一度に表示し、コマンド行だけタイピングする
    if (line.kind !== 'cmd' || charIndex >= line.text.length) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, line.kind === 'cmd' ? LINE_PAUSE_MS : LINE_PAUSE_MS / 2);
      return () => clearTimeout(t);
    }
    const t = window.setTimeout(() => setCharIndex((c) => c + 1), TYPE_MS);
    return () => clearTimeout(t);
  }, [started, lineIndex, charIndex]);

  const done = lineIndex >= script.length;

  return (
    <div
      aria-hidden
      className={cn(
        'overflow-hidden rounded-lg border border-white/12 bg-[#0b1224]/80 font-mono text-[12.5px] leading-[1.9] shadow-[0_30px_80px_rgba(2,8,23,0.6),0_0_0_1px_rgba(34,211,238,0.08)] backdrop-blur-[14px]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/4 px-4 py-3">
        <span className="size-[10px] rounded-full bg-[#ff5f57]" />
        <span className="size-[10px] rounded-full bg-[#febc2e]" />
        <span className="size-[10px] rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] tracking-[0.06em] text-white/40">~/kyushu-construction-tech</span>
      </div>
      <div className="min-h-[268px] px-5 py-4">
        {script.slice(0, Math.min(lineIndex + 1, script.length)).map((line, i) => {
          const isCurrent = i === lineIndex && !done;
          if (line.kind === 'cmd') {
            const text = isCurrent ? line.text.slice(0, charIndex) : line.text;
            return (
              <p key={i} className="text-white/90">
                <span className="text-gold">$</span> {text}
                {isCurrent && <span className="ml-[1px] inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-pulse bg-gold" />}
              </p>
            );
          }
          if (isCurrent) return null;
          return (
            <p key={i} className={line.kind === 'ok' ? 'text-emerald-300/90' : 'text-sky-300/80'}>
              {line.kind === 'ok' ? '✓ ' : '  '}
              {line.text}
            </p>
          );
        })}
        {done && (
          <p className="text-white/90">
            <span className="text-gold">$</span>{' '}
            <span className="inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-pulse bg-gold" />
          </p>
        )}
      </div>
    </div>
  );
}
