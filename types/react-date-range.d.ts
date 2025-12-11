declare module "react-date-range" {
  import * as React from "react";

  export interface Range {
    startDate?: Date;
    endDate?: Date;
    key?: string;
  }

  export interface RangeKeyDict {
    [key: string]: Range;
  }

  export interface DateRangeProps {
    ranges: Range[];
    onChange?: (range: RangeKeyDict) => void;
    moveRangeOnFirstSelection?: boolean;
    months?: number;
    direction?: "vertical" | "horizontal";
    rangeColors?: string[];
    showDateDisplay?: boolean;
    minDate?: Date;
  }

  export class DateRange extends React.Component<DateRangeProps> {}
}
