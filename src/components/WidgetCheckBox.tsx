import { WidgetProps } from '@rjsf/utils'
import Checkbox from '@codegouvfr/react-dsfr/Checkbox'
import LabelWithHelp from './LabelWithHelp'

export default function (props: WidgetProps) {
  return (
    <div style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
      <Checkbox
        state={props.rawErrors && props.rawErrors.length ? 'error' : 'default'}
        stateRelatedMessage={props.rawErrors?.length && props.rawErrors[0]}
        options={[
          {
            label: (
              <LabelWithHelp
                helpText={
                  props.uiSchema !== undefined
                    ? props.uiSchema['ui:help']
                    : undefined
                }
              >
                {props.schema.title + (props.required ? ' (obligatoire)' : '')}
              </LabelWithHelp>
            ),
            nativeInputProps: {
              checked: props.value,
              onChange: (e) => props.onChange(e.target.checked),
            },
          },
        ]}
      />
    </div>
  )
}
