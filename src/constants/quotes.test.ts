import { describe, it, expect } from 'vitest';
import { QUOTES } from './quotes';

describe('QUOTES constant', () => {
  it('should be an array of objects', () => {
    expect(Array.isArray(QUOTES)).toBe(true);
  });

  it('each quote should have a text and author property', () => {
    QUOTES.forEach(quote => {
      expect(quote).toHaveProperty('text');
      expect(typeof quote.text).toBe('string');
      expect(quote.text.length).toBeGreaterThan(0);

      expect(quote).toHaveProperty('author');
      expect(typeof quote.author).toBe('string');
      expect(quote.author.length).toBeGreaterThan(0);
    });
  });

  it('should contain quotes related to stoicism and discipline', () => {
    const combinedText = QUOTES.map(q => q.text.toLowerCase()).join(' ');

    expect(combinedText).toContain('discipline');
    expect(combinedText).toContain('strength');
  });
});
