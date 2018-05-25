import {Injectable} from '@angular/core';
import {AnalyticsImplementation, Metric} from './analytics.interface';

@Injectable()
export class AnalyticsService {
  constructor(private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }

  //  Above our AnalyticsService defines one method: record which accepts a Metric and then passes
  // it on to the implementation.

  //  Of course, this AnalyticsService is a bit trivial and in this case, we probably wouldn’t
  // need the indirection. But this same pattern could be used in the case where you had a
  // more advanced AnalyticsService. For instance, we could add middleware or broadcast to
  // several implementations.
}
