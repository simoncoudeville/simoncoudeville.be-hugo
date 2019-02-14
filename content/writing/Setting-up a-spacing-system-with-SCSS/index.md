---
date: 2019-02-06T21:40:40+01:00
title: How to create vertical rhythm with SCSS
description: blabla
draft: false
light: true
#hue: 360
#hue: 25
#hue: 50
#hue: 170
#hue: 200
#hue: 18
---

In this article I will describe how I set up a spacing system with SCSS. It’s based on a single pixel value I use to calculate heights, widths, margin paddings and line-heights of all components on a web page. This pixel value is computed to flexible units using SCSS. I also use the [modular scale plugin](https://www.google.com) to set up a typographic scale. This technique creates vertical rhythm and a consistent use of whitespace throughout the whole design. It also provides control and a predictable outcome.

## Flexible foundations

Pixels are easy to work with. I still think in pixels. All design software for interactive products work with pixels. I can imagine what a title with font-size of 66px looks like. The problem with pixels is that they aren’t flexible. The web is based on the idea that the user has control over the way they see a webpage. The moment you set the value of a property with pixels they become fixed and a user is unable to control it. All browsers have a setting that let’s people choose what


## The Way

So what can be done to design for adaptability, and so accessibility? Firstly, there are a couple of ways of thinking which might be helpful. Then I have some practical suggestions about steps you can take to avoid making your pages inaccessible.

If you use style sheets properly, to suggest the appearance of a page, not to control the appearance of a page, and you don’t rely on your style sheet to convey information, then your pages will “work” fine in any browser, past or future. Browsers which don’t support style sheets simply present pages that look a little on the plain side. Our biggest concern is browsers which have buggy style sheets support. Today this is an issue. Not too long from now, it won’t be much of an issue. For now, you can limit yourself to a subset of CSS which is well enough supported, and still have more presentational effect than using presentational HTML. I’ve written quite a bit about this elsewhere, so I won’t repeat myself here.
