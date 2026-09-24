/**
 * 写真素材のパスをここに集約している。
 * - 人物・オフィス写真: おしごとピクチャーズ（https://free-images.jp/）からダウンロードして
 *   public/images/ に配置（商用利用可・クレジット不要。素材自体の再配布は禁止）
 * - 建設・一部の街並み写真: Unsplash の CDN を参照（Unsplash ライセンス）
 * 本番写真に差し替えるときは、このファイルの値を変更すればサイト全体に反映される。
 */

const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&fit=crop`;

/** public/images/ 配下の写真 */
const local = {
  teamLaptopCafe: '/images/team-laptop-cafe.jpg', // カフェ風オフィスでノートPCを囲む男女
  womenLaptop: '/images/women-laptop.jpg', // ノートPCで作業する女性2人
  womenStudy: '/images/women-study.jpg', // メモを取りながら作業する女性2人
  engineerGlasses: '/images/engineer-glasses.jpg', // メガネのエンジニア
  engineerSmile: '/images/engineer-smile.jpg', // 笑顔でPC作業するエンジニア
  casualTalk: '/images/casual-talk.jpg', // オフィスでの打ち合わせ
  analystMonitors: '/images/analyst-monitors.jpg', // デュアルモニターでデータを見る女性
  officeMonitors: '/images/office-monitors.jpg', // モニターに向かう社員
  pairMonitor: '/images/pair-monitor.jpg', // モニターを見ながら話す男女
  teamMeeting: '/images/team-meeting.jpg', // ノートPCを囲むミーティング
  meetingRoom: '/images/meeting-room.jpg', // 会議室でのミーティング
  teamPortrait: '/images/team-portrait.jpg', // 社員4人の集合写真
  presentation: '/images/presentation.jpg', // ホワイトボード前での発表
  documentReview: '/images/document-review.jpg', // 資料を確認する男女
  businessmanCity: '/images/businessman-city.jpg', // ビル街に立つビジネスマン
  businessDistrict: '/images/business-district.jpg', // オフィス街を歩く人々
  datacenter: '/images/datacenter.jpg', // データセンターの女性
  datacenterAisle: '/images/datacenter-aisle.jpg', // データセンターの通路
  officeInterior: '/images/office-interior.jpg', // 明るいオフィス
  cityAvenue: '/images/city-avenue.jpg', // ビル街の大通り
  officeAvenue: '/images/office-avenue.jpg', // オフィスビルが並ぶ通り
} as const;

/** Unsplash の素材ID */
const ids = {
  blueprint: '1581092160562-40aa08e78837', // 図面を広げた作業
  aerialSite: '1504307651254-35680f356dfd', // 建設現場の空撮
  building: '1486325212027-8081e485255e', // 建築
  pipes: '1541888946425-d81bb19240f5', // 現場
  safety: '1531834685032-c34bf0d84c77', // 現場の作業員
} as const;

export const photos = {
  /** トップのヒーロー画像 */
  heroHome: local.teamLaptopCafe,

  /** 下層ページのヒーロー画像 */
  heroAbout: local.officeAvenue,
  heroServices: local.analystMonitors,
  heroConstructionDx: unsplash(ids.aerialSite, 1920, 85),
  heroWorks: local.officeMonitors,
  heroRecruit: local.teamPortrait,
  heroNews: local.cityAvenue,
  heroContact: local.casualTalk,

  /** セクション背景 */
  strengthsBg: local.businessDistrict,
  focusBg: unsplash(ids.aerialSite, 1920),
  worksCtaBg: local.datacenter,
  messageBg: local.businessmanCity,
  contactBg: local.officeInterior,

  /** ABOUT セクション */
  aboutMain: local.womenLaptop,
  aboutSub: unsplash(ids.pipes, 600, 85),

  /** RECRUIT セクション */
  recruitMain: local.engineerSmile,
  recruitMessage: local.engineerGlasses,

  /** サービスカード */
  srvConsulting: local.meetingRoom,
  srvDevelopment: local.engineerGlasses,
  srvSes: local.pairMonitor,

  /** サービス詳細（大きめ） */
  srvDetailConsulting: local.teamMeeting,
  srvDetailDevelopment: local.engineerSmile,
  srvDetailSes: local.pairMonitor,
  srvDetailConstructionDx: unsplash(ids.blueprint, 900),

  /** 施工管理DXページ */
  cdxField: unsplash(ids.safety, 900),
  cdxTech: local.analystMonitors,

  /** 事例カード */
  workBusinessFlow: local.presentation,
  workSaas: local.womenStudy,
  workWebApp: local.engineerGlasses,
  workLegacy: local.officeMonitors,
  workDevTeam: local.pairMonitor,
  workInfra: local.datacenterAisle,
  workPmo: local.meetingRoom,
  workSitePhoto: unsplash(ids.building, 800),
  workSiteReport: unsplash(ids.pipes, 800),
  workSiteDocs: unsplash(ids.blueprint, 800),

  /** ギャラリー（会社概要） */
  gallery: [
    local.womenLaptop,
    local.teamMeeting,
    local.teamPortrait,
    local.presentation,
    local.analystMonitors,
    local.officeAvenue,
  ],

  /** 職場環境（採用） */
  workplace: [
    local.officeInterior,
    local.engineerGlasses,
    local.womenStudy,
    local.casualTalk,
    local.documentReview,
  ],
} as const;
