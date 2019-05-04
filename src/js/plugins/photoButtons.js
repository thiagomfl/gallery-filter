import $ from "jquery";

const duration = 600;

function filterByPerson(person) {
    $("[wm-person]").each(function (i, e) {
        const isTarget = $(this).attr("wm-person") === person || person === null;

        if (isTarget) {
            $(this).parent().removeClass("d-none");
            $(this).fadeIn(duration);
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass("d-none");
            });
        }
    })
}

$.fn.photoButtons = function () {
    const photos = new Set;

    $("[wm-person]").each(function (i, e) {
        photos.add($(e).attr("wm-person"))
    });

    const buttons = Array.from(photos).map(city => {
        const btn = $("<button>").addClass(["btn", "btn-info"]).html(person);
        btn.click(e => filterByPerson(person));
        return btn;
    });

    const btnAll = $("<button>").addClass(["btn", "btn-info", "active"]).html("todas");
    btnAll.click(e => filterByPerson(null));
    buttons.push(btnAll);

    const btnGroup = $("<div>").addClass(["btn-group"]);
    btnGroup.append(buttons);

    $(this).html(btnGroup);
    return this;
}

$("[wm-photo-buttons]").photoButtons();