import { storiesOf, html } from '@open-wc/storybook';

import '../test-wc-card.js';

storiesOf('test-wc-card', module)
  .add(
    'default',
    () => html`
      <test-wc-card>user content tag: test-wc-card</test-wc-card>
    `,
  )
  .add(
    'right',
    () => html`
      <test-wc-card class="right">user content tag: test-wc-card</test-wc-card>
    `,
  );
