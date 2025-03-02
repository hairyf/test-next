/** @type {import('next').NextConfig} */
const nextConfig = {}

require('esbuild-register')
require('./next.schedule.ts')

module.exports = nextConfig
