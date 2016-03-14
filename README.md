![Facebook](https://rawgit.com/canvaskisa/react-share-icons/master/src/Facebook/index.svg)
![Dribbble](https://rawgit.com/canvaskisa/react-share-icons/master/src/Dribbble/index.svg)
![Instagram](https://rawgit.com/canvaskisa/react-share-icons/master/src/Instagram/index.svg)
![Odnoklassniki](https://rawgit.com/canvaskisa/react-share-icons/master/src/Odnoklassniki/index.svg)
![Periscope](https://rawgit.com/canvaskisa/react-share-icons/master/src/Periscope/index.svg)
![Twitter](https://rawgit.com/canvaskisa/react-share-icons/master/src/Twitter/index.svg)
![Vkontakte](https://rawgit.com/canvaskisa/react-share-icons/master/src/Vkontakte/index.svg)
![Youtube](https://rawgit.com/canvaskisa/react-share-icons/master/src/Youtube/index.svg)
![Telegram](https://rawgit.com/canvaskisa/react-share-icons/master/src/Telegram/index.svg)
![Google](https://rawgit.com/canvaskisa/react-share-icons/master/src/Google/index.svg)

***

[![NPM version](http://img.shields.io/npm/v/react-share-icons.svg)](https://www.npmjs.org/package/react-share-icons)
[![Travis Build Status](https://travis-ci.org/canvaskisa/react-share-icons.svg)](https://travis-ci.org/canvaskisa/react-share-icons)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Vector share icons as react-components

## Installation
```js
$ npm install --save react-share-icons
```

## Usage
### Icon: ReactElement
```js
import React, {Component} from 'react';
import Icon, {Telegram} from 'react-share-icons';
import Instagram from 'react-share-icons/lib/Instagram';

class Shares extends Component {
  render() {
    return (
      <div>
        <div>
          <Icon type="Facebook" className="shares-facebook"/>
          <Icon type="Twitter" className="shares-twitter"/>
          <Instagram className="shares-instagram"/>
        </div>

        <a href="https://telegram.org/">
          <Telegram className="shares-telegram"/>
        </a>
      </div>
    );
  }
}

export default Shares;
```
By default `react-shares-icons` exports `Icon` component, which accepts `type` prop. `type` props is a string – name of the icon you wanna get. You can also import icons like this: `import {Facebook} from 'react-share-icons`.

If you don't want to use all of the icons, you can import them directly like this: `import Facebook from 'react-share-icons/lib/Facebook'`, it will import only Facebook icon component, and nothing else!

All available icons:
- Facebook
- Dribbble
- Instagram
- Odnoklassniki
- Periscope
- Twitter
- Vkontakte
- Youtube
- Telegram
- Google

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
