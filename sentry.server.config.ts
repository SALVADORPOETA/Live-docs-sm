// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://669d9c046010bd588d1be571d79d414b@o4507876011868160.ingest.us.sentry.io/4507876025827328',
  tracesSampleRate: 1.0, // Enable performance tracing for server requests
  debug: true,
})
