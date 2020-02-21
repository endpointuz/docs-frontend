import React from 'react';
import { DatePicker as AntDatePicker, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import cn from 'classnames';
import moment from 'moment';

/**
 *
 * @param value - redux-form's Field Component throws empty string as initial value - `input: { value: '' }`. If so, should pass `null` to Ant Design DatePicker component
 * @param inputRest - redux-form's Field Component throws handlers as onSubmit, onBlur, onFocus etc. Should pass its to Ant Design Form Components
 * @param touched - redux-form's Field Component throws meta.touched prop. It's needed to display various errors or warnings
 * @param error - same as touched
 * @param warning - same as touched
 * @param label - If exist, input will render with label
 * @param rest - other props that should be passed to Ant Design Component.
 */
const DatePicker = ({
  input: { value, ...inputRest }, meta: { touched, error, warning }, label, ...rest
}) => {
  const [t] = useTranslation();
  const classes = cn({
    'ant-form-item-with-help': error && touched,
  });

  const dateFormat = 'DD.MM.YYYY';

  return (
    <Form.Item validateStatus={error && touched ? 'error' : null} className={classes} label={label}>
      <AntDatePicker
        {...rest}
        {...inputRest}
        value={value ? moment(value, dateFormat) : null}
        format={dateFormat}
        locale={'ru_RU'}
        placeholder={t('select date')}
        style={{ width: '100%' }}
      />
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </Form.Item>
  );
};

export default DatePicker;
