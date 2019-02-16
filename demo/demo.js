import { html, render } from 'lit-html';
import '../test-wc-card.js';

export default function(target) {
  const title = 'test';
  render(
    html`
      <test-wc-card .title=${title}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </test-wc-card>
    `,
    target,
  );
}
