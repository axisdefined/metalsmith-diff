import { expect } from 'chai';
import diff from '../';

describe('metalsmith-diff', () => {

  it('should work', () => {
    
    expect(typeof diff).to.equal('function');

  });

})