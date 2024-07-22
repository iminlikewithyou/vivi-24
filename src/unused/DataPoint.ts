
interface DictionaryID {
  author: string;
  repo: string;
}

/***
 * Defines a datapoint which tracks a data point in another dictionary.
 */
interface TrackingPoint {
  tracking: DictionaryID;
}

interface DataPoint {
  
}

type TrackablePoint = DataPoint | TrackingPoint;

