# npm-css-classify

A helper to generate class names string.

Inspired by react [classnames](https://github.com/JedWatson/classnames) and [react bem helper](https://github.com/marcohamersma/react-bem-helper).

BEM stands for Block, Element, Modifier. It helps orgnaise class hierachy.

Please refer to [google](https://www.google.com.au/search?q=bem+introduction) for the idea of BEM.

CssClassify helps to write bem class names.


## some examples

```js
const cls = new CssClassify({ block: 'card' });

console.log(cls.names());
//          card
console.log(cls.names('title'));
//          card__title
console.log(cls.names('button', 'small'));
//          card__button card__button--small
console.log(cls.names('button', ['small', 'round']));
//          card__button card__button--small card__button--round
console.log(cls.names('button', { small: true, active: typeof foobar === 'undifined' }));
//          card__button card__button--small card__button--active
function func() { return true }
console.log(cls.names('button', { small: true, active: func }));
//          card__button card__button--small card__button--active

```

## options

```js
new CssClassify({ block: 'blockName', options: {
   elementDelimiter = '_',
   modifierDelimiter = '-'
} });
```

## License

MIT License
