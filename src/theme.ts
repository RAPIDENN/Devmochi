export type Theme = {
  inactive: string
  success: string
  permission: string
  autoAccept: string
  warning: string
  [key: string]: string
}

export const defaultTheme: Theme = {
  inactive: 'gray',
  success: 'green',
  permission: 'blue',
  autoAccept: 'cyan',
  warning: 'yellow',
}
