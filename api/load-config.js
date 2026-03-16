// Vercel은 서버리스라 파일 읽기가 안 돼요.
// API 키는 브라우저 localStorage에서 읽어요.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({ apiKey: '', openaiKey: '', sheetUrl: '' });
}
