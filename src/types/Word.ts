
/** Represents possible tags for a word. */
type Tag = string;
/** Represents a part of speech. */
type PartOfSpeech = "noun" | "verb" | "adjective" | "adverb" | "pronoun" | "preposition" | "conjunction" | "interjection" | "abbreviation" | "determiner" | "abbreviation" | "symbol" | "prefix" | "suffix";

// TODO: There's probably a better name for this.
/** Represents a word form label. */
type WordFormLabel =
  "noun" | "plural noun" |
  "verb" | "past tense" | "past participle" | "gerund or present participle" | "3rd person present" |
  "adjective" | "comparative adjective" | "superlative adjective" |
  "adverb" | "comparative adverb" | "superlative adverb" |
  "pronoun" | "preposition" | "conjunction" | "interjection" |
  "determiner" | "abbreviation" | "symbol" | "prefix" | "suffix";

/**
 * Represents a word in the dictionary.
 * 
 * A word is similar to a header, key, or main entry, under which multiple entries may be listed.
 */
interface Word extends Attributable {
  /** The ID of this word. */
  id: ID;
  /** The entries for this word. */
  entries: Entry[];
}

/**
 * Represents an entry in the dictionary.
 * 
 * Entries are the main content of the dictionary, containing the pronunciation, definitions, and etymology of a word.
 */
interface Entry extends Attributable {
  /** The ID of this entry. */
  id: ID;
  /** The IPA pronunciation of this entry. */
  pronunciation?: string;
  /** The definitions for this entry. */
  definitions: Definition[];
  /** The etymology of this entry. */
  etymology?: EtymologyNode;
}

/**
 * Represents a definition which is in addition of another definition.
 * 
 * This is currently a simple string, but can be updated to be a Definition if needed.
 */
type Subdefinition = string;

/** Represents a word form. */
interface WordForm<T = PartOfSpeech> {
  /** The part of speech of this word form. */
  partOfSpeech: T;
  /** The form of the word. */
  form: string;
}

/**
 * Represents a definition in an entry.
 * 
 * This is where the data of the word's form is first stored within the structure of a Word.
 */
interface Definition extends Attributable {
  /**
   * The ID of this definition.
   * 
   * This is used to reference the definition when the word is being tracked by another dictionary source.
   */
  id: ID;
  /** The tags for this definition. */
  tags: Tag[];
  /** The part of speech of this definition. */
  partOfSpeech: PartOfSpeech;
  /**
   * A list of word forms for this definition.
   * 
   * @example
   * ```json
   * [
   *  { "partOfSpeech": "noun", "form": "person" },
   *  { "partOfSpeech": "plural noun", "form": "persons" },
   *  { "partOfSpeech": "plural noun", "form": "people" }
   * ]
   * ```
   */
  forms: WordForm<WordFormLabel>[];
  /**
   * The definition.
   * This supports links to other words or entries.
   */
  definition: string;
  /**
   * Extra definitions that extend off of this definition.
   * 
   * @example
   * ```tsv
   * Word	I
   * Def.	the ninth letter of the alphabet.
   * Ext.	denoting the next after H in a set of items, categories, etc.
   * ```
   */
  subdefinitions: Subdefinition[];
}

/**
 * Represents an input source of an etymology node.
 */
type EtymologySource = EtymologyEntry | EtymologyNode;

/**
 * Represents the origin tree of a word's entry.
 * One or more etymology source entries will converge towards the final etymology entry.
 */
interface EtymologyNode {
  /**
   * The source entries which converge to the resulting entry.
   */
  sources: EtymologySource[];
  /**
   * The resulting entry of the convergence.
   */
  result: EtymologyEntry;
}

/**
 * Represents an entry in the etymology.
 */
interface EtymologyEntry {
  /**
   * The language of origin, labeled underneath the word forms.
   */
  language?: string;
  /**
   * The roots, prefixes, suffixes, or derived forms of this entry.
   * In most cases, there is only one form.
   * 
   * @example
   * To highlight how a single entry may have multiple words,
   * a word like "origin" may come from an entry like so:
   * ```json
   * {
   *  "language": "Latin",
   *  "forms": ["origo", "origin-"]
   * }
   * ```
   */
  forms: string[];
  /**
   * The details of this entry.
   * This may include the definition, an explanation, time period, or any other additional details.
   */
  details: string[];
}