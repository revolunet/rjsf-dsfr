import React from 'react'
import Form, { FormProps } from '@rjsf/core'
import {
  SubmitButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
  FormContextType,
} from '@rjsf/utils'
import defaultValidator from '@rjsf/validator-ajv8'
import { Button } from '@codegouvfr/react-dsfr/Button'

import WidgetCheckBox from './components/WidgetCheckBox'
import WidgetSelect from './components/WidgetSelect'
import TemplateArrayField from './components/TemplateArrayField'
import TemplateBaseInput from './components/TemplateBaseInput'
import TemplateField from './components/TemplateField'
import TemplateTitleField from './components/TemplateTitleField'

/**
 * Form component with default DSFR widgets and templates.
 *
 * @param props - classic react-jsonschema-form props
 *
 * @returns a react-jsonschema-form Form component with DSFR widgets and templates
 */
export default function FormDSFR<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ widgets, templates, validator, ...rest }: FormProps<T, S, F>) {
  return (
    <Form
      validator={validator ?? defaultValidator}
      widgets={
        widgets !== undefined
          ? {
              ...widgetsDSFR,
              ...widgets,
            }
          : widgetsDSFR
      }
      templates={
        templates !== undefined
          ? {
              ...templatesDSFR,
              ...templates,
            }
          : templatesDSFR
      }
      {...rest}
    />
  )
}

export const widgetsDSFR = {
  CheckboxWidget: WidgetCheckBox,
  SelectWidget: WidgetSelect,
}

export const templatesDSFR = {
  ArrayFieldTemplate: TemplateArrayField,
  BaseInputTemplate: TemplateBaseInput,
  FieldTemplate: TemplateField,
  ButtonTemplates: { SubmitButton },
  TitleFieldTemplate: TemplateTitleField,
}

function SubmitButton({ uiSchema }: SubmitButtonProps) {
  const buttonOptions = uiSchema?.['ui:options']?.submitButtonOptions
  return (
    // NOTE: should the div stay here? Probably not.
    <div className="flex w-full fr-mt-2w">
      <Button className={buttonOptions?.props?.className ?? ''}>
        {buttonOptions?.submitText ?? 'Envoyer'}
      </Button>
    </div>
  )
}
