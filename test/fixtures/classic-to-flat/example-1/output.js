module.exports = {
  app: {
    'app.js': '// app',

    components: {
      // A standalone component
      'top-level-component.hbs': '{{!-- top-level-component.hbs --}}',
      'top-level-component.js': '// top-level-component.js',

      // A template-only component
      'template-only-component.hbs': '{{!-- template-only-component.hbs --}}',

      // A nested component
      'parent-component.hbs': '{{!-- parent-component.hbs --}}',
      'parent-component.js': '// parent-component.js',
      'parent-component': {
        'child-component.hbs': '{{!-- parent-component/child-component.hbs --}}',
        'child-component.js': '// parent-component/child-component.js',
        'child-component': {
          'grandchild-component.hbs': '{{!-- parent-component/child-component/grandchild-component.hbs --}}',
          'grandchild-component.js': '// parent-component/child-component/grandchild-component.js'
        }
      },

      // Another nested component
      nested1: {
        'nested-component.hbs': '{{!-- nested1/nested-component.hbs --}}',
        'nested-component.js': '// nested1/nested-component.js',
        nested2: {
          'super-nested-component.hbs': '{{!-- nested1/nested2/super-nested-component.hbs --}}',
          'super-nested-component.js': '// nested1/nested2/super-nested-component.js'
        }
      },

      // A component with layoutName
      'layout-name': {
        'has-layout-name.js': [
          '// top-level-component.js',
          'Component.extend({ layoutName: "components/layout-name/layout-name-template" });'
        ].join('\n')
      },

      // A component with partial
      'partials': {
        'with-partial.hbs': [
          '{{!-- with-partial.hbs --}}',
          '{{partial "components/partials/partials-template"}}'
        ].join('\n')
      }
    },

    templates: {
      'application.hbs': '{{outlet}}',

      components: {
        // A component with layoutName
        'layout-name': {
          'layout-name-template.hbs': '{{!-- layout-name-template.hbs --}}'
        },

        // A partial template
        'partials': {
          'partials-template.hbs': '{{!-- partials-template.hbs --}}',
        }
      }
    }
  },
};