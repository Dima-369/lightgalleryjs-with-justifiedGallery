![Image of demo website](docs/header.png?raw=true)

I struggled a bit to setup a nice looking plain gallery, so I made this bare-bones
implementation if anyone else needs a bit of guidance to set up everything correctly :)

[GitHub Pages Demo](https://gira-x.github.io/lightgalleryjs-with-justifiedGallery/)

There are more plugins for lightgallery, but this demo does not use all, just the ones
I find useful.

## Compilation

[PugJS](https://pugjs.org) is used to compile the `.pug` index file which outputs to a HTML file.

The HTML file is also beautified because it is easier to skim over if you do not know PugJS.

### Images

The images are all from the animal category from 
[Unsplash](https://unsplash.com/search/photos/animal).

The thumbs are generated using the Python 3 script `generate-img-thumbs.py`.
Because the `rowHeight` setting from `lightgallery` is just a rough estimate, it seems to be better
slightly larger thumbs so it does not look too downsampled.

Only the first image has a title set using `alt="..."` and `data-sub-html="..."`.

### Links

[lightgallery.js](https://sachinchoolur.github.io/lightgallery.js/)\
[Justified Gallery](https://miromannino.github.io/Justified-Gallery/)
