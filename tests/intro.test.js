import { describe, test, it, expect} from 'vitest'

describe('Intro', () => {
    it('should return the first argument if it is greater than the second', () => {
        expect(max(2, 1)).toBe(2);
    }
    );