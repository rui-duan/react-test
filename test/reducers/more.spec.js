import expect from 'expect'
import more from '../../reducers'

describe('reducers', () => {
  describe('more', () => {
    it('should provide the initial state', () => {
      expect(more(undefined, {})).toBe(3)
    })

    it('should handle MORE action', () => {
      expect(more(1, { type: 'MORE' })).toBe(4)
    })

    it('should handle LESS action', () => {
      expect(more(3, { type: 'LESS' })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(more(1, { type: 'unknown' })).toBe(1)
    })
  })
})
