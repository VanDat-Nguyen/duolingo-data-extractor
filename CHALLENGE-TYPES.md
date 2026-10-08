# Challenge Types by Language

Unique `type:specific_type` values of challenges found in `output/<course>/sessions/*.json`.
Based on a random sample of 30 session files per course, so rare values may be missing.
`english-tagalog`, `english-telugu` and `korean-english` have no `sessions` folder and were not checked.

## `translate` challenges

These are the challenges `makeFlashcardsForSession` converts into flashcards. `reverse_tap` and `reverse_translate` are English-to-learning-language.

| Course | `tap` | `reverse_tap` | `reverse_translate` |
|---|---|---|---|
| arabic-english | x | x | |
| cantonese-chinese | x | x | |
| chinese-english | x | x | |
| hindi-english | x | x | |
| japanese-english | x | x | |
| russian-english | x | x | |
| spanish-english | x | x | x |

## All challenge types

| `type:specific_type` | arabic | cantonese | chinese | hindi | japanese | russian | spanish |
|---|---|---|---|---|---|---|---|
| `assist:assist` | x | x | x | x | x | x | x |
| `characterIntro:character_intro` | x | | | x | x | | |
| `characterMatch:character_match` | x | | | x | x | | |
| `characterSelect:character_select` | x | | | x | x | | |
| `completeReverseTranslation:complete_reverse_translation` | | | | | | | x |
| `dialogue:dialogue` | | | x | | | | x |
| `gapFill:gap_fill` | x | | x | x | x | x | x |
| `listenComplete:listen_complete` | | | | | | | x |
| `listenIsolation:listen_isolation` | | | | | | | x |
| `listenMatch:listen_match` | x | x | | x | | x | |
| `listenSpeak:listen_speak` | | | | | | x | |
| `listenTap:listen_tap` | x | x | x | x | x | x | x |
| `match:match` | x | x | x | x | x | x | x |
| `name:name` | | | | | | | x |
| `readComprehension:read_comprehension` | | | | | | | x |
| `select:name_example` | x | x | x | x | x | x | x |
| `selectPronunciation:select_pronunciation` | x | | | x | x | | |
| `selectTranscription:select_transcription` | | | | | | x | |
| `speak:speak` | | | | | | x | x |
| `tapComplete:tap_complete` | | | x | | x | | x |
| `tapComplete:tap_gap` | | | x | | x | | x |
| `translate:tap` | x | x | x | x | x | x | x |
| `translate:reverse_tap` | x | x | x | x | x | x | x |
| `translate:reverse_translate` | | | | | | | x |
