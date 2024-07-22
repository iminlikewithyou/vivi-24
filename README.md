# Vivi Dictionary Format

#### Note
this readme just contains notes for developers, not for what the code does. want to see the Discord messages in the readme? [join the dev server](https://dev.omg.games/)

everything is 5x the complication with this Word object
so i'm thinking about possibly just scrapping it and just using multiple Entries
and not grouping them under a "Word"

### Converting .txt to Vivi

need to be able to convert a standard text file into a vivi dictionary format

when converting a standard txt file into a Vivi format,
- all words are mapped to a Word of the same name,
- initialized with one Entry,
- with what could be multiple Definitions (some text formats separate definitions with a "/" between them)
- ...and more?

### Merging two Vivi dictionaries

(see [this Discord message](https://discord.com/channels/916735613808545872/1061082708643692544/1184298168058392718))
in the case of a lexicographer wanting to update something like csw to keep it up to date,
the following options should be available when doing a merge:

### Words
- Add new words
- Remove missing words
### Metadata
- Add new word metadata
- Change word metadata
- Remove missing word metadata

this needs to be more fleshed out because "metadata" is a very broad term
also see [this Discord message](https://discord.com/channels/916735613808545872/1061082708643692544/1187327770448105484)

### Tracking data points from other Vivi dictionaries

see [this Discord message](https://discord.com/channels/916735613808545872/1061082708643692544/1186984004516315207)

### Helpful grouping for lexicographers

see [this Discord message](https://discord.com/channels/916735613808545872/1061082708643692544/1187626284889681961), although I'm unsure what this ultimately means. words can be from dependencies but not actually in the dictionary data for a specific dictionary? it seems good for the fact that vivi/english can depend on csw/csw but exclude words it doesn't want to use?

does this grouping show on the dictionary page? the page when merging? or what? idk