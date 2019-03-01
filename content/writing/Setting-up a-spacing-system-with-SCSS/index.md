---
date: 2019-02-06T21:40:40+01:00
title: How I create vertical rhythm with SCSS
description: blabla
draft: false
code: true
light: true
#hue: 360
#hue: 25
#hue: 50
#hue: 170
#hue: 200
#hue: 222
#hue: 260
#hue: 18
---

In this article I will describe how I set up a spacing system with SCSS. It’s based on a single pixel value I use to calculate heights, widths, margin paddings and line-heights of all components on a web page. This pixel value is computed to flexible units using SCSS. I also use the [modular scale plugin](https://www.google.com) to set up a typographic scale. This technique creates vertical rhythm and a consistent use of whitespace throughout the whole design while providing perfect control and a predictable outcome.

## Flexible foundations

Pixels are easy to work with. I still think in pixels. I can imagine what a title with font-size of 66px looks like. In the end the browser will compute all units to pixels. The problem with pixels is that they aren’t flexible. The web is based on the idea that the user has control over the way they see a webpage. The moment you set the value of a property with pixels they become fixed and a user is unable to control it.  

## Round pixels

<pre><code class="language-scss">$modularscale: (
  base: 19px,
  ratio: 1.125
);

// Baseline settings
// Think in pixels, let SCSS and the browser do the converting
$baseline: 7px;
$root-font-size: ms(0); // Modular scale size 0
$root-baseline-multiplier: 5;
$root-line-height: $baseline * $root-baseline-multiplier; // In this setup this equals a line-height of 28px

// Default whitespace settings for margins and paddings between elements
$alpha-whitespace: baseline($root-baseline-multiplier); // Default whitespace between elements e.g. paragraphs, titles
$beta-whitespace: baseline($root-baseline-multiplier * 2); // Double whitespace between elements e.g. between paragraphs and h2</code></pre>

<pre><code class="language-scss">// Font height mixin
@mixin font-height($font-size,$baseline-multiplier) {
  font-size: pxtorem($font-size); // font-size in rem
  line-height: #{$baseline-multiplier * $baseline / round($font-size)}em; // line-height in em
}</code></pre>

<pre><code class="language-scss">h2 {    
    margin-bottom: baseline($root-baseline-multiplier);
    @include font-height(ms(2),$root-baseline-multiplier);
}</code></pre>
<pre><code class="language-scss">// simple px to rem converter
@function pxtorem($pixelvalue) {
    @return #{round($pixelvalue) / $root-font-size}rem;
}

// Simple baseline-unit multiplier converted to rem
@function baseline($multiplier) {
    @return pxtorem($baseline * $multiplier);
}</code></pre>
