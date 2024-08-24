import { Sample } from './Sample'

function customValidate(formData, errors, uiSchema) {
  if (!formData.accept) {
    errors.accept.addError('Vous devez accepter les CGUs')
  }
  return errors
}

const DSFR1: Sample = {
  schema: {
    title: 'Titre du formulaire',
    description: 'Description du formulaire',
    type: 'object',
    properties: {
      nom: {
        title: 'Nom',
        type: 'string',
        minLength: 2,
        description: "Le nom c'est important",
      },
      prenom: { title: 'Prénom', type: 'string' },

      ddn: {
        title: 'Date de naissance',
        type: 'string',
        format: 'date',
      },
      books: { title: 'Books at home', type: 'number', minimum: 0 },
      accept: { title: "J'accepte les CGUs", type: 'boolean' },
      regime: {
        title: 'Régime',
        enumNames: ['Végé', 'Végan', 'Fléxi'],
        enum: ['vege', 'vegan', 'flex'],
      },
    },
    allOf: [
      {
        if: {
          properties: {
            regime: {
              const: 'vege',
            },
          },
        },
        then: {
          properties: {
            food: {
              title: 'Aliments préférés',
              type: 'string',
              enum: ['Fromage', 'Oeufs', 'Pâtes'],
            },
          },
          required: ['food'],
        },
      },
      {
        if: {
          properties: {
            regime: {
              const: 'vegan',
            },
          },
        },
        then: {
          properties: {
            food: {
              title: 'Aliments préférés',
              type: 'string',
              enum: ['Pain', 'Légumes', 'Miel'],
            },
          },
          required: ['food'],
        },
      },
      {
        if: {
          properties: {
            regime: {
              const: 'flex',
            },
          },
        },
        then: {
          properties: {
            food: {
              title: 'Aliments préférés',
              type: 'string',
              enum: ['Viande', 'Poisson', 'Saucisson'],
            },
          },
          required: ['food'],
        },
      },
      {
        required: [],
      },
    ],
    required: ['nom', 'accept'],
  },
  uiSchema: {
    'ui:submitButtonOptions': {
      submitText: 'Envoyer ma candidature',
    },
    books: {
      'ui:widget': 'updown',
    },
    food: {
      'ui:widget': 'radio',
    },
  },
  formData: {},
  customValidate,
}

export default DSFR1
