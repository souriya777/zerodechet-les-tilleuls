import React from 'react'

import { detectBrowser } from '../_resources/js/browser-utils.js'

const BrowserUtils = () => <div>browser {detectBrowser()}</div>

export default BrowserUtils;