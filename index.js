const Chance = require('chance');
const chance = new Chance();

module.exports.templateTags = [
  {
    name: 'chance',
    displayName: 'Chance',
    description: 'Generates a random value based on Chance.JS',
    args: [
      {
        displayName: 'Type',
        defaultValue: 'email',
        type: 'enum',
        options: [
          { displayName: 'Natural', value: 'natural' },
          { displayName: 'Float', value: 'floating' },
          { displayName: 'Dice (d6)', value: 'd6' },
          { displayName: 'Dice (d20)', value: 'd20' },
          { displayName: 'Name', value: 'name' },
          { displayName: 'Email', value: 'email' },
          { displayName: 'Gender', value: 'gender' },
          { displayName: 'Phone', value: 'phone' },
          { displayName: 'Zipcode', value: 'zip' },
          { displayName: 'Credit Card', value: 'cc' },
          { displayName: 'Date', value: 'date' },
          { displayName: 'Word', value: 'word' },
          { displayName: 'CPF', value: 'cpf' },
          { displayName: 'Custom', value: 'custom' },
        ],
      },
      {
        displayName: 'Custom Function - Only if selected type is Custom',
        type: 'string',
        placeholder: 'integer',
      },
      {
        displayName: 'Options - Stringified arguments for chosen function',
        type: 'string',
        placeholder: '"min": 10, "max": 25',
      },
    ],
    async run(context, type, func, opt = '') {
      const customFunction = type === 'custom' ? func : type;
      const options = JSON.parse(`{${opt}}`)

      return chance[customFunction](options);
    }
  },
];
