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
      const str = classify.bem('card');
      expect(str).to.be.equal('card');
    });

    it('should return combined class name with block and element', () => {
      const classify = new CssClassify();
      const str = classify.bem('card', 'title');
      expect(str).to.be.equal('card__title');
    });

    it('should return combined class name with block and element and repeatitive modifier', () => {
      const classify = new CssClassify();
      const str = classify.bem('card', 'title', 'hasIcon');
      expect(str).to.be.equal('card__title card__title--hasIcon');
    });
  });

  describe('classify.names()', () => {

    it('[201] should return block name when there\'s no element name', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names();
      expect(str).to.be.equal('card');
    });

    it('[202] should return combined class name with block and element', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names('title');
      expect(str).to.be.equal('card__title');
    });

    it('[203] should return combined class name with block and element and repeatitive modifier', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names('title', 'hasIcon');
      expect(str).to.be.equal('card__title card__title--hasIcon');
    });
    
    it('[204] should return element name when there\'s no block name', () => {
      const classify = new CssClassify();
      const str = classify.names('title');
      expect(str).to.be.equal('title');
    });
    
    it('[205] should block name without any argument', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names();
      expect(str).to.be.equal('card');
    });
    
    it('[206] should return proper names for modifier array', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names('title', [ 'huge', 'active' ]);
      expect(str).to.be.equal('card__title card__title--huge card__title--active');
    });
    
    it('[207] should return proper names for modifier object', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names('title', { huge: true, active: typeof arguments === 'object' });
      expect(str).to.be.equal('card__title card__title--huge card__title--active');
    });
    
    it('[208] should return proper names for modifier object', () => {
      const classify = new CssClassify({ block: 'card' });
      const str = classify.names('title', { huge: true, active: Array.isArray(arguments) });
      expect(str).to.be.equal('card__title card__title--huge');
    });
    
    it('[208] should return proper names for modifier object with a function', () => {
      const classify = new CssClassify({ block: 'card' });
      const falsey = () => false; 
      const truthy = () => true; 
      const str = classify.names('title', { huge: true, active: truthy, ng: falsey });
      expect(str).to.be.equal('card__title card__title--huge card__title--active');
    });
  });
});
