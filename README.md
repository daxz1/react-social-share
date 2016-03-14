# React-socials
[![NPM version](http://img.shields.io/npm/v/react-socials.svg)](https://www.npmjs.org/package/react-socials)
[![Travis Build Status](https://travis-ci.org/canvaskisa/react-socials.svg)](https://travis-ci.org/canvaskisa/react-socials)
[![Coverage Status](https://coveralls.io/repos/github/canvaskisa/react-socials/badge.svg?branch=master)](https://coveralls.io/github/canvaskisa/react-socials?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

![Facebook](https://rawgit.com/canvaskisa/react-share-icons/master/src/Facebook/index.svg)
![Dribbble](https://rawgit.com/canvaskisa/react-share-icons/master/src/Dribbble/index.svg)
![Google](https://rawgit.com/canvaskisa/react-share-icons/master/src/Google/index.svg)
![Instagram](https://rawgit.com/canvaskisa/react-share-icons/master/src/Instagram/index.svg)
![Odnoklassniki](https://rawgit.com/canvaskisa/react-share-icons/master/src/Odnoklassniki/index.svg)
![Periscope](https://rawgit.com/canvaskisa/react-share-icons/master/src/Periscope/index.svg)
![Telegram](https://rawgit.com/canvaskisa/react-share-icons/master/src/Telegram/index.svg)
![Twitter](https://rawgit.com/canvaskisa/react-share-icons/master/src/Twitter/index.svg)
![Vkontakte](https://rawgit.com/canvaskisa/react-share-icons/master/src/Vkontakte/index.svg)
![Youtube](https://rawgit.com/canvaskisa/react-share-icons/master/src/Youtube/index.svg)

>:small_blue_diamond: Vector social icons for react

## Installation
```console
$ npm i --save react-socials
```

## Usage
We provide a pack of simple svg components with `react-socials`, so you need just import them:
```js
import React, {Component} from 'react';
import Facebook from 'react-socials/lib/Facebook';
import Vkontakte from 'react-socials/lib/Vkontakte';
import Twitter from 'react-socials/lib/Twitter';

class Socials extends Component {
  render() {
    return (
      <div>
        <Facebook className="fb-icon"/>
        <Vkontakte className="vk-icon"/>
        <Twitter className="tw-icon"/>
      </div>
    );
  }
}

export default Socials;
```
All svg's don't have styles by default (except viewBox property), so you need to control them with `style` property or `className`.

**Important**: if you use `commonJS` you need to write `var Facebook = require('react-socials/lib/icons/Facebook').default`. Note that `default` property.

With these icons you can simply create share buttons:
```js
import React, {Component} from 'react';
import Facebook from 'react-socials/lib/Facebook';

const SHARE_URL = 'http://www.facebook.com/sharer/sharer.php';

class FacebookShare extends Component {
  share(e) {
    e.preventDefault();
    window.open(
      SHARE_URL,
      'facebook-share-dialog',
      'width=626,height=436'
    );
  }

  render() {
    return (
      <a target="_blank" onClick={this.share} href={SHARE_URL}>
        <Facebook/>
      </a>
    );
  }
}

export default FacebookShare;
```

Also, if you are going to use all our icons, or you need to render them dynamically, you can use `Icon` component, which is default export basically:
```js
import React, {Component} from 'react';
import Icon from 'react-socials';

class Socials extends Component {
  render() {
    return (
      <div>
        <Icon type="facebook"/>
        <Icon type="vkontakte"/>
        <Icon type="twitter"/>
      </div>
    );
  }
}

export default Socials;
```

Available types:
- facebook -> `<Facebook/>`
- vkontakte -> `<Vkontakte/>`
- twitter -> `<Twitter/>`
- dribbble -> `<Dribbble/>`
- google -> `<Google/>`
- instagram -> `<Instagram/>`
- odnoklassniki -> `<Odnoklassniki/>`
- periscope -> `<Periscope/>`
- telegram -> `<Telegram/>`
- youtube -> `<Youtube/>`

## Related
We provide simplie svg-icons, so if you want fully-featured share buttons or something more complicated, you can take a look at:
- [react-social](https://github.com/olahol/react-social)
- [react-social-buttons](https://github.com/StevenIseki/react-social-buttons)
- [react-share](https://github.com/nygardk/react-share)

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
