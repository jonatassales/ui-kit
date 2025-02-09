import type { ScaleOptionsByType } from 'chart.js'
import { DeepPartial } from 'chart.js/dist/types/utils'
import { FilterInput, Propeller, TimeRangeInput, TimeSeriesGranularity } from '../../helpers'
import { ChartStyles } from '../../themes'
import { ErrorFallbackProps } from '../ErrorFallback'

export type ChartScales = DeepPartial<{ [key: string]: ScaleOptionsByType<'linear' | 'logarithmic'> }>

export type TimeSeriesChartVariant = 'bar' | 'line'

export type TimeSeriesData = {
  values?: Array<number | null>
  labels?: string[]
}

export interface TimeSeriesProps extends ErrorFallbackProps, React.ComponentProps<'canvas'> {
  /** The variant the chart will respond to, can be either `bar` or `line` */
  variant?: TimeSeriesChartVariant

  /** `styles` attribute can be either `BarStyles` or `LineStyles` */
  styles?: ChartStyles

  /** If passed along with `values` the component will ignore the built-in graphql operations */
  labels?: TimeSeriesData['labels']

  /** If passed along with `labels` the component will ignore the built-in graphql operations  */
  values?: TimeSeriesData['values']

  /** When true, shows a skeleton loader */
  loading?: boolean

  /** Canvas aria-label prop, if not passed we handle it */
  ariaLabel?: string

  /** Canvas role prop, if not passed we handle it */
  role?: string

  query?: {
    /** This should eventually be replaced to customer's app credentials */
    accessToken?: string

    /** Metric unique name */
    metric?: string

    /** Time range that the chart will respond to */
    timeRange?: TimeRangeInput

    /** Granularity that the chart will respond to */
    granularity?: TimeSeriesGranularity

    /** Filters that the chart will respond to */
    filters?: FilterInput[]

    /** Propeller that the chart will respond to */
    propeller?: Propeller

    /** Timestamp format that the chart will respond to */
    timestampFormat?: string

    /** Interval in milliseconds for refetching the data */
    refetchInterval?: number

    /** Whether to retry on errors. */
    retry?: boolean
  }
  /** Format function for labels, must return an array with the new labels */
  labelFormatter?: (labels: string[]) => string[]
}
