import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静的HTMLを out/ に書き出す（SSG）。レンタルサーバーへFTPアップロードする前提。
  output: 'export',
  // /about/ のようにディレクトリ + index.html で出力する。
  // Apache/Nginx の静的配信でリライト設定なしにそのまま動く形。
  trailingSlash: true,
  images: {
    // output: 'export' では画像最適化サーバーが使えないため無効化。
    unoptimized: true,
  },
  // next dev が AGENTS.md / CLAUDE.md を自動生成するのを止める
  agentRules: false,
};

export default nextConfig;
