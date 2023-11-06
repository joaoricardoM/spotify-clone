declare module 'use-sound' {
  export function useSound(
    url: string,
    options: any
  ): [() => void, { play: () => void; pause: () => void; sound: any }]
}
