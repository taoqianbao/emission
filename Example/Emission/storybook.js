'use strict'

import React from 'react'
import { AppRegistry } from 'react-native'

import { getStorybookUI, configure } from '@kadira/react-native-storybook'

// Import your stories
configure(() => {
  require('../../stories/artist_component_story')
  require('../../stories/artist_header_story')
  require('../../stories/artist_articles_story')
  require('../../stories/gene_component_story')
}, module)

const StorybookUI = getStorybookUI({port: 9001, host: 'localhost'})
AppRegistry.registerComponent('Storybook', () => StorybookUI)
