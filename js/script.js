$(".faq-btn").click(function () {
    const content = $(this).next(".faq-content");
    const icon = $(this).find(".icon");

    content.slideToggle(200, function () {
        // Toggle + / -
        if (content.is(":visible")) {
            icon.text("-");
        } else {
            icon.text("+");
        }
    });
});
