import { solution } from "../lib/words"

export const countLetters = (word: string) => {
    return word.length
}

export const checkWord = (word: string) => {
    if (word.length == 5) {
        return 6
    } else {
        return 7
    }
}

export const MAX_WORD_LENGTH = countLetters(solution)
export const MAX_CHALLENGES = checkWord(solution)
export const ALERT_TIME_MS = 2800
export const REVEAL_TIME_MS = 250
export const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS
export const WELCOME_INFO_MODAL_MS = 350
