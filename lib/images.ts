/**
 * 写真素材（Unsplash）のURLをここに集約している。
 * 本番写真に差し替えるときは、このファイルの値を
 * `/images/xxx.jpg` のようなローカルパスへ変更すればサイト全体に反映される。
 */

const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&fit=crop`;

/** 素材ID（同じ写真を複数箇所で使い回している） */
const ids = {
  aerialSite: '1504307651254-35680f356dfd', // 建設現場の空撮
  meeting: '1503387762-592deb58ef4e', // 設計打ち合わせ
  team: '1516216628859-9bccecab13ca', // 現場チーム / 土木
  building: '1486325212027-8081e485255e', // 建築
  electric: '1565008576549-57569a49371d', // 電気設備
  pipes: '1541888946425-d81bb19240f5', // 管工事 / 現場
  safety: '1531834685032-c34bf0d84c77', // 安全管理
  bridge: '1686358244616-aed9e9a1d827', // 橋梁・インフラ
  worker: '1508450859948-4e04fabaa4ea', // 作業員
  solar: '1497440001374-f26997328c1b', // 太陽光発電
} as const;

export const photos = {
  /** トップのヒーロー画像 */
  heroHome: unsplash(ids.aerialSite, 1920, 85),

  /** 下層ページのヒーロー画像 */
  heroAbout: unsplash(ids.pipes, 1920, 85),
  heroServices: unsplash(ids.bridge, 1920, 85),
  heroWorks: unsplash(ids.aerialSite, 1920, 85),
  heroRecruit: `${unsplash(ids.worker, 1920, 85)}&crop=center`,
  heroNews: unsplash(ids.meeting, 1920, 85),
  heroContact: unsplash(ids.building, 1920, 85),

  /** セクション背景 */
  strengthsBg: unsplash(ids.pipes, 1920),
  worksCtaBg: unsplash(ids.bridge, 1920),
  messageBg: unsplash(ids.pipes, 1920),
  contactBg: unsplash(ids.worker, 1920, 75),

  /** ABOUT セクション */
  aboutMain: unsplash(ids.meeting, 900, 85),
  aboutSub: unsplash(ids.team, 600, 85),

  /** RECRUIT セクション */
  recruitMain: `${unsplash(ids.aerialSite, 900)}&crop=center`,
  recruitMessage: unsplash(ids.aerialSite, 900),

  /** サービスカード */
  srvArchitecture: unsplash(ids.building, 800),
  srvCivil: unsplash(ids.team, 800),
  srvElectric: unsplash(ids.electric, 800),
  srvPipe: unsplash(ids.pipes, 800),
  srvQuality: unsplash(ids.aerialSite, 800),
  srvSafety: unsplash(ids.safety, 800),

  /** サービス詳細（大きめ） */
  srvDetailArchitecture: unsplash(ids.building, 900),
  srvDetailCivil: unsplash(ids.team, 900),
  srvDetailElectric: unsplash(ids.electric, 900),
  srvDetailPipe: unsplash(ids.pipes, 900),
  srvDetailQuality: unsplash(ids.meeting, 900),
  srvDetailSafety: unsplash(ids.safety, 900),

  /** 対応事例カード */
  workCommercial: unsplash(ids.building, 800),
  workRoad: unsplash(ids.team, 800),
  workOfficeElectric: unsplash(ids.electric, 800),
  workHospital: unsplash(ids.pipes, 800),
  workBridge: unsplash(ids.bridge, 800),
  workMansion: unsplash(ids.meeting, 800),
  workFactory: unsplash(ids.aerialSite, 800),
  workRiver: unsplash(ids.bridge, 800),
  workSolar: unsplash(ids.solar, 800),
  workHotel: unsplash(ids.meeting, 800),
  workSchool: unsplash(ids.pipes, 800),
  workPort: unsplash(ids.team, 800),

  /** ギャラリー（会社概要） */
  gallery: [
    unsplash(ids.aerialSite, 800),
    unsplash(ids.meeting, 800),
    unsplash(ids.worker, 800),
    unsplash(ids.bridge, 800),
    unsplash(ids.team, 800),
    unsplash(ids.building, 800),
  ],

  /** 職場環境（採用） */
  workplace: [
    unsplash(ids.aerialSite, 800),
    unsplash(ids.meeting, 700),
    unsplash(ids.building, 700),
    unsplash(ids.bridge, 700),
    unsplash(ids.pipes, 700),
  ],
} as const;
