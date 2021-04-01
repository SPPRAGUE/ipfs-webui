import React from 'react'
import Loadable from '@loadable/component'
import ComponentLoader from '../loader/ComponentLoader.js'

const LoadablePeersPage = Loadable(() => import('./PeersPage'),
  { fallback: <ComponentLoader/> }
)

export default LoadablePeersPage
