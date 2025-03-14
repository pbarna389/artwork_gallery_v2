import { setupServer } from 'msw/node'

import { handlers } from './handlers'

/**
 * The serviceWorker for intercepting outgoing requests for unit tests
 */

export const serviceWorker = setupServer(...handlers)
