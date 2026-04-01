import React from 'react'
import { render, Box, Text } from 'ink'
import { CompanionSprite } from './CompanionSprite.js'
import { getCompanion, companionUserId } from './companion.js'
import { RARITY_STARS } from './types.js'

function Demo() {
  const companion = getCompanion()

  if (!companion) {
    return <Text color="yellow">No companion hatched yet. Run with a valid userID in ~/.claude-buddy/config.json</Text>
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold>Claude Buddy Demo</Text>
      <Text>User: {companionUserId()}</Text>
      <Text>Name: <Text bold>{companion.name}</Text></Text>
      <Text>Species: {companion.species}</Text>
      <Text>Rarity: {RARITY_STARS[companion.rarity]} ({companion.rarity})</Text>
      <Text>Shiny: {companion.shiny ? '✨ YES' : 'no'}</Text>
      <Box marginTop={1} flexDirection="column">
        <Text bold>Stats:</Text>
        {Object.entries(companion.stats).map(([k, v]) => (
          <Text key={k}>  {k}: {v}</Text>
        ))}
      </Box>
      <Box marginTop={1}>
        <CompanionSprite />
      </Box>
    </Box>
  )
}

render(<Demo />)
