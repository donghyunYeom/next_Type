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
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'duckzill-discord',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'password',
    'NEXTAUTH_URL': 'http://localhost:3000/',
    'KAKAO_API_KEY': 'c063be17296e1c7973d558319b0ebe5a',
  },
}
