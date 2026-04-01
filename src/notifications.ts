import { useCallback } from 'react'

type Notification = { message: string; durationMs?: number }

// Simple stub — in a real app wire this to your notification system
export function useNotifications() {
  const addNotification = useCallback((_n: Notification) => {}, [])
  return { addNotification }
}
