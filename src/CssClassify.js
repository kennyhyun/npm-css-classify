/**
 * Css Classify (https://kennyhyun.github.io/npm-css-classify)
 *
 * Copyright © 2017 Kenny Kyunghyun Yeo. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Classify {
  constructor({ block, options } = {}) {
    this.block = block;
    const {
      elementDelimiter: elementDelimiter = '__',
      modifierDelimiter: modifierDelimiter = '--'
    } = options || {};
    Object.assign(this, {
      elementDelimiter,
      modifierDelimiter 
    });
  }

  _getCombindElement(block, element) {
    let elem = '';
    if (block && element) {
      elem = `${ block }${ this.elementDelimiter }${ element }`;
    } else {
      elem = `${ block || '' }${ element || '' }`;
    }
    return elem;
  }

  bem(block, element, modifiers) {
    const elem = this._getCombindElement(block, element || '');
    return this.names(elem, modifiers || '', '');
  }

  names(_element, modifiers, _block) {
    let block = this.block;
    if (typeof _block === 'string' || _block) {
      block = _block;
    }
    const element = this._getCombindElement(block, _element || '');
    if (!modifiers) {
      return element;
    }
    if (typeof modifiers === 'string') {
      return `${ element } ${ element }${ this.modifierDelimiter }${ modifiers }`;
    } else if (Array.isArray(modifiers)) {
      const array = modifiers.map(m => {
        return `${ element }${ this.modifierDelimiter }${ m }`;
      });
      return [ `${ element }` ].concat(array).join(' ');
    } else if (typeof modifiers === 'object') {
      const array = [];
      for (let [key, val] of Object.entries(modifiers || {})) {
        let judge = val;
        if (typeof val === 'function') {
          judge = val();
        }
        if (judge) {
          array.push(`${ element }${ this.modifierDelimiter }${ key }`);
        }
      }
      return [ `${ element }` ].concat(array).join(' ');
    }
    return `${ element } ${ element }${ this.modifierDelimiter }`;
  }
}
export function newBlock(block) {
  return new Classify({ block });
}
export const CssClassify = Classify;
export default Classify;
