---
date: 2019-02-06T21:40:40+01:00
title: Creating vertical rhythm with SCSS
description: In this article I will describe how I set up a spacing system with SCSS. It’s based on a single pixel value I use to calculate heights, widths, margin paddings and even line-heights of all components on a web page. This pixel value is computed to flexible units using SCSS. This technique creates vertical rhythm and a consistent use of whitespace throughout the whole design while providing perfect control and a predictable outcome.
draft: false
code: true
cover: cover-10.svg
#coverBackground: Gold
#coverBackground: LightCoral
#coverBackground: GoldenRod
#coverBackground: SandyBrown
#coverBackground: Tomato
#coverBackground: Coral
#coverBackground: Salmon
#coverBackground: MediumSeaGreen
#coverBackground: CadetBlue
#coverBackground: RoyalBlue
#coverBackground: DeepSkyBlue
#coverBackground: SteelBlue
#coverBackground: MediumSlateBlue
#coverBackground: LightSlateGrey
#coverBackground: Aquamarine
#pageBackgroundCover: true
#inverted: true
---

<!-- I also use the [modular scale plugin](https://www.google.com) to set up a typographic scale.  -->

## Flexible foundations

Pixels are easy to work with. I still think in pixels. I can imagine what a title with font-size of 66px looks like. In the end the browser computes all units to pixels. The problem with pixels is that they aren’t flexible. The web is based on the idea that the user has control over the way they see a webpage. The moment you set the value of a property with pixels they become fixed and a user is unable to control it.  

### Round computed pixels

Pixels are easy to work with. I still think in pixels. I can imagine what a title with font-size of 66px looks like. In the end the browser computes all units to pixels. The problem with pixels is that they aren’t flexible. The web is based on the idea that the user has control over the way they see a webpage. The moment you set the value of a property with pixels they become fixed and a user is unable to control it.  

{{< code scss >}}// Baseline settings
// Think in pixels, let SCSS and the browser do the converting
$baseline: 7px;
$root-font-size: ms(0); // Modular scale size 0
$root-baseline-multiplier: 5;
$root-line-height: $baseline * $root-baseline-multiplier; // In this setup this equals a line-height of 28px

// Default whitespace settings for margins and paddings between elements
$alpha-whitespace: baseline($root-baseline-multiplier); // Default whitespace between elements e.g. paragraphs, titles
$beta-whitespace: baseline($root-baseline-multiplier * 2); // Double whitespace between elements e.g. between paragraphs and h2{{< /code >}}

Pixels are easy to work with. I still think in pixels. I can imagine what a title with font-size of 66px looks like. In the end the browser computes all units to pixels. The problem with pixels is that they aren’t flexible. The web is based on the idea that the user has control over the way they see a webpage. The moment you set the value of a property with pixels they become fixed and a user is unable to control it.

{{< code scss >}}// Font height mixin
@mixin font-height($font-size,$baseline-multiplier) {
  font-size: pxtorem($font-size); // font-size in rem
  line-height: #{$baseline-multiplier * $baseline / round($font-size)}em; // line-height in em
}{{< /code >}}

{{< code scss >}}h2 {    
    margin-bottom: baseline($root-baseline-multiplier);
    @include font-height(ms(2),$root-baseline-multiplier);
}{{< /code >}}

{{< code scss >}}// simple px to rem converter
@function pxtorem($pixelvalue) {
    @return #{round($pixelvalue) / $root-font-size}rem;
}

// Simple baseline-unit multiplier converted to rem
@function baseline($multiplier) {
    @return pxtorem($baseline * $multiplier);
}{{< /code >}}

## Baseline Grid

In order to align text to a baseline grid on the web you. With this technique you have the possibility to align text to a baseline grid. In a way. If every element has the same line-height or if you double or triple that line-height and if the margin between the items is the same as the base line-height you these items will all align to eachother. It's simple math, really.

{{< example type="baseline" title="Baseline grid example" >}}
<div class="e-columns">
    <h2 class="e-baseline-title">            
        Legibility, <br> readability, <br> &amp; aesthetics
    </h2>
    <p class="e-baseline-paragraph">
        Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used synonymously, typographically they are separate but related concepts. Legibility and readability tend to support aesthetic aspects of a product.
    </p>                
    <p class="e-baseline-paragraph">
        Recent research in psychology has studied the effects of typography on human cognition.
        The research points toward multiple applications such as helping readers remember the content better and strategically use fonts to help dyslexic readers.
    </p>                
    <p class="e-baseline-paragraph">
        Traditionally, text is composed to create a readable, coherent, and visually satisfying typeface that works invisibly, without the awareness of the reader. Even distribution of typeset material, with a minimum of distractions and anomalies, is aimed at producing clarity and transparency.
    </p>
</div>
{{< /example  >}}

## Profile component

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< example type="baseline" size="xl" title="Profile card component example" >}}
    <div class="e-card">
        <div class="c-baseline-overlay c-baseline-overlay--unit"></div>
        <div class="e-card__body">
            <div class="e-profile">
                <img class="e-profile__avatar" src="https://cdn.dribbble.com/users/44218/avatars/normal/me3.jpg?1361562828" alt="Avatar">
                <h4 class="e-profile__name c-highlight">Simon Coudeville</h4>
                <p class="e-profile__location c-highlight">Bruges, Belgium</p>
                <p class="e-profile__occupation c-highlight">Designer &amp; teacher at MCT Howest.</p>
                <p>
                    <a href="#!" class="e-button e-button--small">Message</a>
                </p>
            </div>
        </div>        
    </div>
{{< /example  >}}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Working with half values

In order to align text to a baseline grid on the web you. With this technique you have the possibility to align text to a baseline grid. In a way. If every element has the same line-height or if you double or triple that line-height and if the margin between the items is the same as the base line-height you these items will all align to eachother. It's simple math, really.

{{< example type="baseline" size="xl" title="Profile card component example" >}}
    <div class="e-grid">
        <div class="e-grid__item">  
            <span class="e-grid__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>monkey</title><path d="M21.5,7.5c0-5.5-4.5-7-9.5-7S2.5,2,2.5,7.5a2.906,2.906,0,0,0-2,3,3.972,3.972,0,0,0,2,3.5c0,5.5,2,9.5,9.5,9.5s9.5-4,9.5-9.5a3.972,3.972,0,0,0,2-3.5A2.906,2.906,0,0,0,21.5,7.5ZM12.005,21h-.012c-1.781,0-3.836-.481-4.662-2.2a.25.25,0,0,1,.291-.349A16.745,16.745,0,0,0,12,19a16.757,16.757,0,0,0,4.378-.55.25.25,0,0,1,.291.349C15.842,20.52,13.786,21,12.005,21Zm4.743-8.843a1,1,0,0,0-.606,1.3,11.293,11.293,0,0,1,.822,2.484.251.251,0,0,1-.156.271A13.485,13.485,0,0,1,12,17a13.5,13.5,0,0,1-4.808-.791.249.249,0,0,1-.156-.271,11.189,11.189,0,0,1,.822-2.484,1,1,0,0,0-.606-1.3,3.484,3.484,0,0,1-2.127-3.49A3.667,3.667,0,0,1,8.792,5h6.416a3.667,3.667,0,0,1,3.667,3.667A3.484,3.484,0,0,1,16.748,12.157Z"/><circle cx="9" cy="9" r="1.25"/><circle cx="15" cy="9" r="1.25"/><path d="M11.073,12.93a1,1,0,1,0-1.9.633l.25.75a1,1,0,1,0,1.9-.633Z"/><path d="M14.191,12.3a1,1,0,0,0-1.264.632l-.25.75a1,1,0,1,0,1.9.633l.25-.75A1,1,0,0,0,14.191,12.3Z"/></svg>
            </span>
            <h3 class="e-grid__title c-highlight">
                Lorem ipsum dolor sit amet consectetur
            </h3>
            <p class="e-grid__paragraph c-highlight">
                Excepteur sint occaecat cupidatat non proident. Adipisicing sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit.
            </p>            
        </div>
        <div class="e-grid__item">  
            <span class="e-grid__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>skull-1</title><path d="M12,0A10.261,10.261,0,0,0,1.75,10.25a10.156,10.156,0,0,0,3,7.236V21.25a2.749,2.749,0,0,0,5,1.58,2.748,2.748,0,0,0,4.5,0,2.749,2.749,0,0,0,5-1.58V17.486a10.157,10.157,0,0,0,3-7.236A10.261,10.261,0,0,0,12,0Zm2.25,10.25A2.25,2.25,0,1,1,16.5,12.5,2.25,2.25,0,0,1,14.25,10.25Zm-.5,6.868a.25.25,0,0,1-.22.132H10.467a.25.25,0,0,1-.208-.388l1.533-2.3a.249.249,0,0,1,.416,0l1.533,2.3A.25.25,0,0,1,13.753,17.118ZM5.25,10.25A2.25,2.25,0,1,1,7.5,12.5,2.25,2.25,0,0,1,5.25,10.25Z"/></svg>
            </span>
            <h3 class="e-grid__title c-highlight">
                Ut enim ad minim
            </h3>
            <p class="e-grid__paragraph c-highlight">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est.
            </p>            
        </div>
    </div>
{{< /example  >}}

## Final thoughts

In order to align text to a baseline grid on the web you. With this technique you have the possibility to align text to a baseline grid. In a way. If every element has the same line-height or if you double or triple that line-height and if the margin between the items is the same as the base line-height you these items will all align to eachother. It's simple math, really.
