/* eslint-disable vitest/require-top-level-describe */

/* eslint-disable vitest/no-hooks */
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

import '@testing-library/jest-dom/vitest'

expect.extend(matchers)

afterEach(() => {
	cleanup()
})
