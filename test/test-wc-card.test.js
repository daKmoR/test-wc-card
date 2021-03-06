import { html, fixture, expect } from '@open-wc/testing';

import '../test-wc-card.js';

describe('<test-wc-card>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<test-wc-card></test-wc-card>');
    expect(el.header).to.equal('Your Message');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <test-wc-card .header=${'different'}></test-wc-card>
    `);
    expect(el.header).to.equal('different');
  });
});
