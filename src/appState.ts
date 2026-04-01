import { create } from 'zustand'

export type AppState = {
  companionReaction: string | null
  companionPetAt: number | null
  footerSelection: string | null
  companionSpeaking: boolean
  companionBubbleText: string | null
}

const useStore = create<AppState & { setAppState: (patch: Partial<AppState>) => void }>((set) => ({
  companionReaction: null,
  companionPetAt: null,
  footerSelection: null,
  companionSpeaking: false,
  companionBubbleText: null,
  setAppState: (patch) => set(patch),
}))

export function useAppState<T>(selector: (s: AppState) => T): T {
  return useStore(selector)
}

export function useSetAppState(): (patch: Partial<AppState>) => void {
  return useStore((s) => s.setAppState)
}
