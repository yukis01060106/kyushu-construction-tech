/** クラス名を連結する小さなヘルパー（falsy は除外） */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
