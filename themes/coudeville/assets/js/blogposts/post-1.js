// function toggleTheme() {
//     console.log("yes!");
//
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         console.log("is-dark");
//     }
//
// }
// document.addEventListener("DOMContentLoaded", function() {
//     toggleTheme();
// });

// Find if user has set a preference and react to changes
(function initializeTheme(){
    listenToOSChanges()
    enableTheme(
        returnThemeBasedOnOS(),
        false)
    }()
)

// Add a listener in case OS-level preference changes.
function listenToOSChanges(){
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener( (m)=> {
        const root = document.documentElement
        if (m.matches !== true){
            if (!root.classList.contains('theme-light')){
                enableTheme('light', true)
            }
        }
        else{
            if(!root.classList.contains('theme-dark')) enableTheme('dark', true)
        }
    })
}

// If no preference was set, check what the OS pref is.
function returnThemeBasedOnOS() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    if (mediaQueryList.matches) return 'dark'
    else {
        mediaQueryList = window.matchMedia('(prefers-color-scheme: light)')
        if (mediaQueryList.matches) return 'light'
        else return undefined
    }
}

// Switch to another theme
function enableTheme(newTheme = 'light'){
    const root = document.documentElement
    let otherTheme
    newTheme === 'light' ? otherTheme = 'dark' : otherTheme = 'light'
    let currentTheme
    (root.classList.contains('theme-dark')) ? currentTheme = 'dark' : 'light'

    root.classList.add('theme-' + newTheme)
    root.classList.remove('theme-' + otherTheme)

    let button = document.getElementById('theme-' + otherTheme + '-button')
    button.classList.add('is-enabled')
    button.setAttribute('aria-pressed', false)

    button = document.getElementById('theme-' + newTheme + '-button')
    button.classList.remove('is-enabled')
    button.setAttribute('aria-pressed', true)


}