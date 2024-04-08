const { createGlobPatternsForDependencies, } = require('@nx/angular/tailwind');
const {projectRootDir}  = require('@nx/workspace');
const { join } = require('path');

console.log(JSON.stringify(projectRootDir))

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '..','..', 'libs','toaster', 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['light']
  }
};
