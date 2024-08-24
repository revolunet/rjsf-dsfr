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
      bio: {
        title: 'Petite bio',
        description: 'Ne soyez pas timide',
        type: 'string',
      },
      accept: { title: "J'accepte les CGUs", type: 'boolean' },
      regime: {
        title: 'Régime',
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
    nom: {
      'ui:autofocus': true,
    },
    regime: {
      'ui:enumNames': ['Végé', 'Végan', 'Fléxi'],
      'ui:widget': 'radio',
    },
    bio: {
      'ui:widget': 'textarea',
    },
    books: {
      'ui:widget': 'updown',
    },
    food: {},
    // food_vege: {
    //   //'ui:widget': 'checkboxes',
    // },
    'ui:submitButtonOptions': {
      submitText: 'Envoyer ma candidature',
    },
  },
  formData: {},
  customValidate,
}

export default DSFR1
