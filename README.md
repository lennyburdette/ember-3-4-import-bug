Reproduction of [ember-cli#8039](https://github.com/ember-cli/ember-cli/issues/8039).

Run the test suite to see the error:
```
Error: Could not find module `sinon` imported from `test-import-app/tests/acceptance/sinon-test`
```

Removing `type: 'test'` from ember-cli-build.js alleviates the issue.
