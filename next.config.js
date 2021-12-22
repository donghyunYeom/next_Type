/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['duckzill-resource.s3.ap-northeast-2.amazonaws.com'],
  },
  shortUrl:{
    domains: ['https://openapi.naver.com/v1/util/shorturl'],
  },
  env: {
    'MYSQL_HOST': process.env.MYSQL_HOST,
    'MYSQL_PORT': process.env.MYSQL_PORT,
    'MYSQL_DATABASE': process.env.MYSQL_DATABASE,
    'MYSQL_USER': process.env.MYSQL_USER,
    'MYSQL_PASSWORD': process.env.MYSQL_PASSWORD,
    'API_URL': process.env.API_URL,
    'KAKAO_API_KEY': process.env.KAKAO_API_KEY,
  },
}
