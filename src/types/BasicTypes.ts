/** Represents an ID for objects in the system. */
type ID = string;

/** Represents an object that can be updated. */
interface Updateable {
  /** The date the object was created. */
  createdAt: Date;
  /** The date the object was last updated. */
  updatedAt: Date;
}

/** Represents an object that can be attributed to creators. */
interface Attributable extends Updateable {
  /** The creators of the object. */
  attributions: Attribution[];
}