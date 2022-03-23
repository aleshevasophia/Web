var main = function () {
    var toDos = ["Купить продукты",
                 "Обновить несколько новых задач",
                 "Подготовиться к лекции в понедельник",
                 "Ответить на письма нанимателей в LinkedIn",
                 "Вывести Грейси на прогулку в парк",
                 "Закончить писать книгу"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val()+ "!");
                        $input.val("");
                    }
                });

                $input.on("keypress", function (event) {
                    if (event.keyCode === 13) {
                    if ($input.val() !== "") {
                        toDos.push($input.val()+ "!");
                        $input.val("");
                $(".tabs a:first-child span").trigger("click");
                }
            }
        });
            $content = $("<div>").append($input).append($button);
            }
            $("main .content").append($content);
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);
    
    