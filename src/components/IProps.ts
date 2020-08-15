import { PropOptions } from '@vue/composition-api';
import { IItem } from '@/components/IItem';

interface IProps {
  [key: string]: any;
}

export interface IFormControlProps extends IProps {
  disabled: PropOptions<boolean>;
  block: PropOptions<boolean>;
}

export interface IInputControlProps extends IFormControlProps {
  id: PropOptions<string>;
  label: PropOptions<string>;
  name: PropOptions<string>;
  required: PropOptions<boolean>;
  validation: PropOptions;
  value: PropOptions;
}

export interface ITextInputControlProps extends IInputControlProps {
  placeholder: PropOptions<string>;
  autofocus: PropOptions<boolean>;
  type: PropOptions<string>;
  readonly: PropOptions<boolean>;
  description: PropOptions<string>;
  errorMessage: PropOptions<string>;
  autocomplete: PropOptions<string>;
}

export interface IListControlProps extends IProps {
  items: PropOptions<IItem[]>;
}

export interface ISelectControlProps extends IListControlProps {
  multiSelect: PropOptions<boolean>;
}

export interface IVariationProps extends IProps {
  color: PropOptions<string>;
  size: PropOptions<string>;
}

export interface IAnimationProps extends IProps {
  duration: PropOptions<number>;
}

export interface IVisibilityProps extends IProps {
  show: PropOptions<boolean>;
}

export interface IAsyncProps extends IProps {
  loading: PropOptions<boolean>;
}

export interface ICollapseControlProps extends IAnimationProps, IVisibilityProps {}

export interface ICalendarProps extends IProps {
  selectedDate: PropOptions<Date>;
  today: PropOptions<Date>;
  minDate: PropOptions<Date>;
  maxDate: PropOptions<Date>;
  firstDayOfWeek: PropOptions<number>;
  startDate: PropOptions<Date>;
  endDate: PropOptions<Date>;
}
