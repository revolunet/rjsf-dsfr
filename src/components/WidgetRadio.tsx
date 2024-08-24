import { ChangeEvent, FocusEvent } from 'react'
import {
  enumOptionsIsSelected,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils'

import React from 'react'
import RadioButtons from '@codegouvfr/react-dsfr/RadioButtons'
import LabelWithHelp from './LabelWithHelp'

export default function RadioWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  options,
  value,
  required,
  disabled,
  readonly,
  rawErrors,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
  schema,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue } = options

  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))

  const radioValues = Array.isArray(value) ? value : [value]
  const inline = Boolean(options && options.inline)
  console.log(value, options)
  return (
    <div style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
      <RadioButtons
        state={rawErrors && rawErrors.length ? 'error' : 'default'}
        stateRelatedMessage={rawErrors?.length && rawErrors[0]}
        orientation={inline ? 'horizontal' : 'vertical'}
        options={
          (options &&
            options.enumOptions?.map((option) => {
              const checked = enumOptionsIsSelected<S>(
                option.value,
                radioValues,
              )
              const itemDisabled =
                Array.isArray(enumDisabled) &&
                enumDisabled.indexOf(option.value) !== -1

              return {
                label: (
                  <LabelWithHelp
                    helpText={
                      uiSchema !== undefined ? uiSchema['ui:help'] : undefined
                    }
                  >
                    {option.label}
                  </LabelWithHelp>
                ),
                nativeInputProps: {
                  checked,
                  disabled: itemDisabled,
                  onChange: (e) => onChange(option.value),
                  value: option.value,
                },
              }
            })) ||
          []
        }
      />
    </div>
  )
}
