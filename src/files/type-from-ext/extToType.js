/**
 * @type {Record<string, string>}
 */
const extToType = {
  wav: 'audio',
  bwf: 'audio',
  aiff: 'audio',
  flac: 'audio',
  m4a: 'audio',
  pac: 'audio',
  tta: 'audio',
  wv: 'audio',
  aac: 'audio',
  mp2: 'audio',
  mp3: 'audio',
  amr: 'audio',
  s3m: 'audio',
  '3gp': 'audio',
  au: 'audio',
  dct: 'audio',
  dss: 'audio',
  gsm: 'audio',
  m4p: 'audio',
  mmf: 'audio',
  mpc: 'audio',
  ogg: 'audio',
  oga: 'audio',
  opus: 'audio',
  ra: 'audio',
  sln: 'audio',
  vox: 'audio',
  '3g2': 'video',
  aaf: 'video',
  asf: 'video',
  avchd: 'video',
  avi: 'video',
  drc: 'video',
  flv: 'video',
  m2v: 'video',
  m4v: 'video',
  mkv: 'video',
  mng: 'video',
  mov: 'video',
  mp4: 'video',
  mpe: 'video',
  mpeg: 'video',
  mpg: 'video',
  mpv: 'video',
  mxf: 'video',
  nsv: 'video',
  ogv: 'video',
  qt: 'video',
  rm: 'video',
  rmvb: 'video',
  roq: 'video',
  svi: 'video',
  vob: 'video',
  webm: 'video',
  wmv: 'video',
  yuv: 'video',
  art: 'image',
  bmp: 'image',
  blp: 'image',
  cd5: 'image',
  cit: 'image',
  cpt: 'image',
  cr2: 'image',
  cut: 'image',
  dds: 'image',
  dib: 'image',
  djvu: 'image',
  egt: 'image',
  exif: 'image',
  gif: 'image',
  gpl: 'image',
  grf: 'image',
  icns: 'image',
  ico: 'image',
  iff: 'image',
  jng: 'image',
  jpeg: 'image',
  jpg: 'image',
  jfif: 'image',
  jp2: 'image',
  jps: 'image',
  lbm: 'image',
  max: 'image',
  miff: 'image',
  msp: 'image',
  nitf: 'image',
  ota: 'image',
  pbm: 'image',
  pc1: 'image',
  pc2: 'image',
  pc3: 'image',
  pcf: 'image',
  pcx: 'image',
  pdn: 'image',
  pgm: 'image',
  PI1: 'image',
  PI2: 'image',
  PI3: 'image',
  pict: 'image',
  pct: 'image',
  pnm: 'image',
  pns: 'image',
  ppm: 'image',
  psb: 'image',
  psd: 'image',
  pdd: 'image',
  psp: 'image',
  px: 'image',
  pxm: 'image',
  pxr: 'image',
  qfx: 'image',
  rle: 'image',
  sct: 'image',
  sgi: 'image',
  rgb: 'image',
  int: 'image',
  bw: 'image',
  tga: 'image',
  tiff: 'image',
  tif: 'image',
  vtf: 'image',
  xbm: 'image',
  xcf: 'image',
  xpm: 'image',
  '3dv': 'image',
  amf: 'image',
  ai: 'image',
  awg: 'image',
  cgm: 'image',
  cdr: 'image',
  cmx: 'image',
  dxf: 'image',
  e2d: 'image',
  eps: 'image',
  fs: 'image',
  gbr: 'image',
  odg: 'image',
  svg: 'image',
  stl: 'image',
  vrml: 'image',
  x3d: 'image',
  sxd: 'image',
  v2d: 'image',
  vnd: 'image',
  wmf: 'image',
  emf: 'image',
  png: 'image',
  webp: 'image',
  jxr: 'image',
  hdp: 'image',
  wdp: 'image',
  cur: 'image',
  ecw: 'image',
  liff: 'image',
  nrrd: 'image',
  pam: 'image',
  pgf: 'image',
  rgba: 'image',
  inta: 'image',
  sid: 'image',
  ras: 'image',
  sun: 'image',
  123: 'calc',
  '12m': 'calc',
  _xls: 'calc',
  _xlsx: 'calc',
  aws: 'calc',
  bks: 'calc',
  cell: 'calc',
  def: 'calc',
  dex: 'calc',
  dfg: 'calc',
  dis: 'calc',
  edx: 'calc',
  edxz: 'calc',
  ess: 'calc',
  fcs: 'calc',
  fm: 'calc',
  fods: 'calc',
  fp: 'calc',
  gnm: 'calc',
  gnumeric: 'calc',
  gsheet: 'calc',
  hcdt: 'calc',
  imp: 'calc',
  mar: 'calc',
  nb: 'calc',
  ncss: 'calc',
  nmbtemplate: 'calc',
  numbers: 'calc',
  'numbers-tef': 'calc',
  ods: 'calc',
  ogw: 'calc',
  ogwu: 'calc',
  ots: 'calc',
  pmd: 'calc',
  pmdx: 'calc',
  pmv: 'calc',
  pmvx: 'calc',
  qpw: 'calc',
  rdf: 'calc',
  sdc: 'calc',
  stc: 'calc',
  sxc: 'calc',
  tmv: 'calc',
  tmvt: 'calc',
  uos: 'calc',
  wki: 'calc',
  wkq: 'calc',
  wks: 'calc',
  wku: 'calc',
  wq1: 'calc',
  wq2: 'calc',
  xl: 'calc',
  xlr: 'calc',
  xls: 'calc',
  xlsb: 'calc',
  xlshtml: 'calc',
  xlsm: 'calc',
  xlsmhtml: 'calc',
  xlsx: 'calc',
  xlthtml: 'calc',
  xltm: 'calc',
  xltx: 'calc',
  '1st': 'text',
  _doc: 'text',
  _docx: 'text',
  abw: 'text',
  adoc: 'text',
  aim: 'text',
  ans: 'text',
  apkg: 'text',
  apt: 'text',
  asc: 'text',
  ascii: 'text',
  aty: 'text',
  awp: 'text',
  awt: 'text',
  aww: 'text',
  bad: 'text',
  bbs: 'text',
  bdp: 'text',
  bdr: 'text',
  bean: 'text',
  bib: 'text',
  bibtex: 'text',
  bml: 'text',
  bna: 'text',
  boc: 'text',
  brx: 'text',
  btd: 'text',
  bzabw: 'text',
  calca: 'text',
  charset: 'text',
  chart: 'text',
  chord: 'text',
  cnm: 'text',
  cod: 'text',
  crwl: 'text',
  cws: 'text',
  cyi: 'text',
  dca: 'text',
  dfti: 'text',
  dgs: 'text',
  diz: 'text',
  dne: 'text',
  doc: 'text',
  docm: 'text',
  docx: 'text',
  docxml: 'text',
  docz: 'text',
  dox: 'text',
  dropbox: 'text',
  dsc: 'text',
  dvi: 'text',
  dwd: 'text',
  dx: 'text',
  dxb: 'text',
  dxp: 'text',
  eio: 'text',
  eit: 'text',
  eml: 'text',
  emlx: 'text',
  emulecollection: 'text',
  epp: 'text',
  err: 'text',
  etf: 'text',
  etx: 'text',
  euc: 'text',
  'fadein.template': 'text',
  faq: 'text',
  fbl: 'text',
  fcf: 'text',
  fdf: 'text',
  fdr: 'text',
  fds: 'text',
  fdt: 'text',
  fdx: 'text',
  fdxt: 'text',
  fft: 'text',
  fgs: 'text',
  flr: 'text',
  fodt: 'text',
  fountain: 'text',
  fpt: 'text',
  frt: 'text',
  fwd: 'text',
  fwdn: 'text',
  gmd: 'text',
  gpd: 'text',
  gpn: 'text',
  gsd: 'text',
  gthr: 'text',
  gv: 'text',
  hbk: 'text',
  hht: 'text',
  hs: 'text',
  hwp: 'text',
  hz: 'text',
  idx: 'text',
  iil: 'text',
  ipf: 'text',
  ipspot: 'text',
  jarvis: 'text',
  jis: 'text',
  jnp: 'text',
  joe: 'text',
  jp1: 'text',
  jrtf: 'text',
  jtd: 'text',
  kes: 'text',
  klg: 'text',
  knt: 'text',
  kon: 'text',
  kwd: 'text',
  latex: 'text',
  lbt: 'text',
  lis: 'text',
  lnt: 'text',
  log: 'text',
  lp2: 'text',
  lst: 'text',
  ltr: 'text',
  ltx: 'text',
  lue: 'text',
  luf: 'text',
  lwp: 'text',
  lxfml: 'text',
  lyt: 'text',
  lyx: 'text',
  man: 'text',
  mbox: 'text',
  mcw: 'text',
  'md5.txt': 'text',
  me: 'text',
  mell: 'text',
  mellel: 'text',
  min: 'text',
  mnt: 'text',
  msg: 'text',
  mw: 'text',
  mwd: 'text',
  mwp: 'text',
  ndoc: 'text',
  nfo: 'text',
  ngloss: 'text',
  njx: 'text',
  note: 'text',
  notes: 'text',
  now: 'text',
  nwctxt: 'text',
  nwm: 'text',
  nwp: 'text',
  ocr: 'text',
  odif: 'text',
  odm: 'text',
  odo: 'text',
  odt: 'text',
  ofl: 'text',
  opeico: 'text',
  openbsd: 'text',
  ort: 'text',
  ott: 'text',
  p7s: 'text',
  pages: 'text',
  'pages-tef': 'text',
  pdpcmd: 'text',
  pfx: 'text',
  pjt: 'text',
  plain: 'text',
  plantuml: 'text',
  pmo: 'text',
  prt: 'text',
  psw: 'text',
  pu: 'text',
  pvj: 'text',
  pvm: 'text',
  pwd: 'text',
  pwdp: 'text',
  pwdpl: 'text',
  pwi: 'text',
  pwr: 'text',
  qdl: 'text',
  qpf: 'text',
  rad: 'text',
  readme: 'text',
  rft: 'text',
  ris: 'text',
  rpt: 'text',
  rst: 'text',
  rtd: 'text',
  rtf: 'text',
  rtfd: 'text',
  rtx: 'text',
  run: 'text',
  rvf: 'text',
  rzk: 'text',
  rzn: 'text',
  saf: 'text',
  safetext: 'text',
  sam: 'text',
  save: 'text',
  scc: 'text',
  scm: 'text',
  scriv: 'text',
  scrivx: 'text',
  scw: 'text',
  sdm: 'text',
  sdoc: 'text',
  sdw: 'text',
  se: 'text',
  session: 'text',
  sgm: 'text',
  sig: 'text',
  skcard: 'text',
  sla: 'text',
  'sla.gz': 'text',
  smf: 'text',
  sms: 'text',
  ssa: 'text',
  story: 'text',
  strings: 'text',
  stw: 'text',
  sty: 'text',
  'sublime-project': 'text',
  'sublime-workspace': 'text',
  sxg: 'text',
  sxw: 'text',
  tab: 'text',
  tdf: 'text',
  template: 'text',
  tex: 'text',
  text: 'text',
  textclipping: 'text',
  thp: 'text',
  tlb: 'text',
  tm: 'text',
  tmd: 'text',
  tmdx: 'text',
  tmvx: 'text',
  tpc: 'text',
  trelby: 'text',
  tvj: 'text',
  txt: 'text',
  u3i: 'text',
  unauth: 'text',
  unx: 'text',
  uof: 'text',
  uot: 'text',
  upd: 'text',
  utf8: 'text',
  utxt: 'text',
  vct: 'text',
  vnt: 'text',
  vw: 'text',
  wbk: 'text',
  webdoc: 'text',
  wn: 'text',
  wp: 'text',
  wp4: 'text',
  wp5: 'text',
  wp6: 'text',
  wp7: 'text',
  wpa: 'text',
  wpd: 'text',
  wpl: 'text',
  wps: 'text',
  wpt: 'text',
  wpw: 'text',
  wri: 'text',
  wsd: 'text',
  wtt: 'text',
  wtx: 'text',
  xbdoc: 'text',
  xbplate: 'text',
  xdl: 'text',
  xwp: 'text',
  xy: 'text',
  xy3: 'text',
  xyp: 'text',
  xyw: 'text',
  zabw: 'text',
  zrtf: 'text',
  zw: 'text'
}
export default extToType
