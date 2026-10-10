import { describe, it, expect } from 'vitest';
import { HABITS, REMINDERS } from './tracker';

describe('Tracker constants', () => {
  describe('HABITS constant', () => {
    it('should be an array of strings', () => {
      expect(Array.isArray(HABITS)).toBe(true);
    });

    it('each habit should be a non-empty string', () => {
      HABITS.forEach(habit => {
        expect(typeof habit).toBe('string');
        expect(habit.length).toBeGreaterThan(0);
      });
    });
  });

  describe('REMINDERS constant', () => {
    it('should be an array of strings', () => {
      expect(Array.isArray(REMINDERS)).toBe(true);
    });

    it('each reminder should be a non-empty string', () => {
      REMINDERS.forEach(reminder => {
        expect(typeof reminder).toBe('string');
        expect(reminder.length).toBeGreaterThan(0);
      });
    });
  });
});
