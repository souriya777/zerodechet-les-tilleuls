import React from 'react'

import { detectBrowser } from './browser-utils.js'

const BrowserUtils = () => <div>browser {detectBrowser()}</div>

export default BrowserUtils;