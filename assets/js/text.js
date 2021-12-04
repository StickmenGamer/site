
$(function () {
    var title = document.title,
        animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
    $(".typed").typed({
        strings: ["Хто це?", "чучуть кодер на путоне", "братик forizen'a", "меломан", "ачо, хайпова", "лорд", "чучуть нравитса аниме", "агро" , "17 годиков", "чучуть тупой", "мамкин хакир", "смешной", "контенщик"],
        typeSpeed: 50,
        loop: true,
        cursorChar: "|",
    });
});
