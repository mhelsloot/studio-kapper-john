import React from 'react'
import {definePlugin} from 'sanity'

function MediaTool() {
  return (
    <div style={{padding: 16}}>
      <h2>Media</h2>
      <p>This is a simple Media tool placeholder. Install a full media library plugin or implement file handling as needed.</p>
    </div>
  )
}

export default definePlugin(() => ({
  name: 'media-tool',
  tools: [
    {
      name: 'media',
      title: 'Media',
      component: MediaTool,
    },
  ],
}))
