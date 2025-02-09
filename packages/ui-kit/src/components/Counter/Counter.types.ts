import { FilterInput, Propeller, TimeRangeInput } from '../../helpers'
import type { ChartStyles } from '../../themes'

export interface CounterProps extends React.ComponentProps<'span'> {
  /** If passed, the component will ignore the built-in graphql operations */
  value?: string
  /** Symbol to be shown before the value text */
  prefixValue?: string
  /** Symbol to be shown after the value text */
  sufixValue?: string
  /** Basic styles initial state */
  styles?: ChartStyles
  /** When true, formats value to locale string */
  localize?: boolean
  query?: {
    /** Time range that the chart will respond to. Will be ignored when value is passed */
    timeRange?: TimeRangeInput
    /** This should eventually be replaced to customer's app credentials. Will be ignored when value is passed */
    accessToken?: string
    /** Metric unique name will be ignored when value is passed */
    metric?: string
    /** Filters that the chart will respond to */
    filters?: FilterInput[]
    /** Propeller that the chart will respond to */
    propeller?: Propeller
    /** Interval in milliseconds for refetching the data */
    refetchInterval?: number
    /** Whether to retry on errors. */
    retry?: boolean
  }
  /** When true, shows a skeleton loader */
  loading?: boolean
}
