/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import CssClassify from '../src/CssClassify';

describe('CssClassify', () => {

  describe('classify.bem()', () => {

    it('should return block name for block only', () => {
      const classify = new CssClassify();
      const str = classify.bem('tile');
      expect(str).to.be.equal('tile');
    });

    it('should return combined class name with block and element', () => {
      const classify = new CssClassify();
      const str = classify.bem('tile', 'header');
      expect(str).to.be.equal('tile__header');
    });

    it('should return combined class name with block and element and repeatitive modifier', () => {
      const classify = new CssClassify();
      const str = classify.bem('tile', 'header', 'hasIcon');
      expect(str).to.be.equal('tile__header tile__header--hasIcon');
    });
  });

  describe('classify.names()', () => {

    it('[201] should return block name when there\'s no element name', () => {
      const classify = new CssClassify({ block: 'tile' });
      const str = classify.names();
      expect(str).to.be.equal('tile');
    });

    it('[202] should return combined class name with block and element', () => {
      const classify = new CssClassify({ block: 'tile' });
      const str = classify.names('header');
      expect(str).to.be.equal('tile__header');
    });

    it('[203] should return combined class name with block and element and repeatitive modifier', () => {
      const classify = new CssClassify({ block: 'tile' });
      const str = classify.names('header', 'hasIcon');
      expect(str).to.be.equal('tile__header tile__header--hasIcon');
    });
    
    it('[204] should return element name when there\'s no block name', () => {
      const classify = new CssClassify();
      const str = classify.names('header');
      expect(str).to.be.equal('header');
    });
  });

});
