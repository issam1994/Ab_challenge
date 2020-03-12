export const hasScrolledToTheEndOfList = function () {
    let scrollY = window.scrollY
    let visible = document.documentElement.clientHeight
    let pageHeight = document.documentElement.scrollHeight
    let reachedBottom = visible + scrollY >= pageHeight
    // console.log("scrollY:", scrollY, " visible:", visible, "pageHeight:", pageHeight, "reachedBottom? :", reachedBottom )
    return reachedBottom || pageHeight < visible
}