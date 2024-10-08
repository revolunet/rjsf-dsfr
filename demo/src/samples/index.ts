import arrays from './arrays'
import anyOf from './anyOf'
import oneOf from './oneOf'
import allOf from './allOf'
import enumObjects from './enumObjects'
import nested from './nested'
import numbers from './numbers'
import simple from './simple'
import widgets from './widgets'
import ordering from './ordering'
import references from './references'
import custom from './custom'
import dsfr1 from './dsfr1'
import errors from './errors'
import examples from './examples'
import large from './large'
import date from './date'
import validation from './validation'
import files from './files'
import single from './single'
import customArray from './customArray'
import customFieldAnyOf from './customFieldAnyOf'
import alternatives from './alternatives'
import propertyDependencies from './propertyDependencies'
import schemaDependencies from './schemaDependencies'
import additionalProperties from './additionalProperties'
import nullable from './nullable'
import nullField from './null'
import errorSchema from './errorSchema'
import defaults from './defaults'
import options from './options'
import ifThenElse from './ifThenElse'
import customField from './customField'
import { Sample } from './Sample'
import deepFreeze from 'deep-freeze-es6'

const _samples: Record<string, Sample> = {
  Blank: { schema: {}, uiSchema: {}, formData: {} },
  DSFR1: dsfr1,
  Simple: simple,
  'UI Options': options,
  Nested: nested,
  Arrays: arrays,
  Numbers: numbers,
  Widgets: widgets,
  Ordering: ordering,
  References: references,
  Custom: custom,
  Errors: errors,
  Examples: examples,
  Large: large,
  'Date & time': date,
  Validation: validation,
  Files: files,
  Single: single,
  'Custom Array': customArray,
  Alternatives: alternatives,
  'Property dependencies': propertyDependencies,
  'Schema dependencies': schemaDependencies,
  'Additional Properties': additionalProperties,
  'Any Of': anyOf,
  'Any Of with Custom Field': customFieldAnyOf,
  'One Of': oneOf,
  'All Of': allOf,
  'If Then Else': ifThenElse,
  'Null fields': nullField,
  'Enumerated objects': enumObjects,
  Nullable: nullable,
  ErrorSchema: errorSchema,
  Defaults: defaults,
  'Custom Field': customField,
}

export const samples = deepFreeze(_samples)
