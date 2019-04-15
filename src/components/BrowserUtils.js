import React from 'react'

import { detectBrowser } from '../js/browser.js'

const BrowserUtils = () => <div>use {detectBrowser()}</div>

export default BrowserUtils;