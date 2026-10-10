import { describe, it, expect } from 'vitest';
import { DIRECTIVES } from './directives';

describe('DIRECTIVES constant', () => {
  it('should be an array of strings', () => {
    expect(Array.isArray(DIRECTIVES)).toBe(true);
  });

  it('each directive should be a non-empty string', () => {
    DIRECTIVES.forEach(directive => {
      expect(typeof directive).toBe('string');
      expect(directive.length).toBeGreaterThan(0);
    });
  });

  it('should contain more than a few directives', () => {
    expect(DIRECTIVES.length).toBeGreaterThan(10);
  });
});
