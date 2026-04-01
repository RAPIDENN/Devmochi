// Rainbow color cycle for shiny companions
const RAINBOW = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta']

export function getRainbowColor(tick: number): string {
  return RAINBOW[tick % RAINBOW.length]!
}
