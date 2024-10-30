// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://669d9c046010bd588d1be571d79d414b@o4507876011868160.ingest.us.sentry.io/4507876025827328',
  tracesSampleRate: 1.0, // Enable performance tracing
  replaysSessionSampleRate: 0.1, // Records 10% of all user sessions
  replaysOnErrorSampleRate: 1.0, // Records 100% of sessions with an error
  debug: true, // Optional: Shows debug info in the console
  integrations: [
    // Keep the Replay integration as before
    Sentry.replayIntegration(),
    // The following is all you need to enable canvas recording with Replay
    Sentry.replayCanvasIntegration({
      enableManualSnapshot: true,
    }),
  ],
})
