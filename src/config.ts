import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { StoredCompanion } from './types.js'

export type BuddyConfig = {
  userID?: string
  oauthAccount?: { accountUuid?: string }
  companion?: StoredCompanion
  companionMuted?: boolean
}

const CONFIG_DIR = join(homedir(), '.claude-buddy')
const CONFIG_FILE = join(CONFIG_DIR, 'config.json')

let _config: BuddyConfig | null = null

export function getGlobalConfig(): BuddyConfig {
  if (_config) return _config
  try {
    _config = JSON.parse(readFileSync(CONFIG_FILE, 'utf-8'))
  } catch {
    _config = { userID: process.env.USER ?? 'anon' }
  }
  return _config!
}

export function saveGlobalConfig(updater: (c: BuddyConfig) => BuddyConfig): void {
  const current = getGlobalConfig()
  _config = updater(current)
  try {
    mkdirSync(CONFIG_DIR, { recursive: true })
    writeFileSync(CONFIG_FILE, JSON.stringify(_config, null, 2))
  } catch {}
}
