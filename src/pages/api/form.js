export default async function handler(req, res) {
  return res.status(200).json({ message: 'Form submission handled by Netlify' });
}
