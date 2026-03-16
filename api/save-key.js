// Vercel은 서버리스라 파일 저장이 안 돼요.
// API 키는 브라우저 localStorage에 저장되고, 이 엔드포인트는 에러 없이 ok만 반환해요.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  return res.status(200).json({ ok: true });
}
