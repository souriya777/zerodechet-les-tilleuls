import React from 'react'

import { detectBrowser } from '../utils/browser-utils.js'

const BrowserUtils = () => <div>browser {detectBrowser()}</div>

export default BrowserUtils;