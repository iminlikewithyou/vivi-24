/** Represents a type of attribution. */
type AttributionType = "standard" | "discord";

/** Represents a content type for attributions. */
type ContentType = "word" | "definition" | "example" | "etymology";

/** Represents a base attribution object. */
interface BaseAttribution<T extends AttributionType = AttributionType> extends Updateable {
  type: T;
  /** The types of content being attributed. */
  contentTypes: ContentType[];
  /** Any additional notes regarding the contribution. */
  notes?: string;
};

/** Represents a Discord attribution. */
interface DiscordAttribution extends BaseAttribution<"discord"> {
  /** The Discord ID of the creator. */
  id: string;
  /** The cached display name of the creator. */
  displayName: string;
  /** The cached username of the creator. */
  username: string;
}

/** Represents a standard attribution. */
interface StandardAttribution extends BaseAttribution<"standard"> {
  /** The name of the project or external source. */
  name: string;
  /** The URL of the project or external source. */
  url?: string;
}

/** Union type that combines all attribution types. */
type Attribution = StandardAttribution | DiscordAttribution;