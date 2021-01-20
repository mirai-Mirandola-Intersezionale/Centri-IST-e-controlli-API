const title =
  '/api.mirai - API libere per tutti'
const description = 'API di luoghi dove chiedere aiuto e consulti'
const SEO = {
  title,
  description,
  canonical: 'https://api.mirai.plus',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://api.mirai.plus',
    title,
    description,
    images: [
      {
        url: 'https://api.mirai.plus/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
export default SEO