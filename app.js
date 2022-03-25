var main = function (toDoObjects) {
    var toDos = toDoObjects.map(function(toDo) {
        return toDo.description;
    });

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
                console.log("Щелчок на вкладке Теги");
                var organizedByTag = [
                    {
                        "name": "покупки",
                        "toDos": ["Купить продукты"]
                        },
                        {
                        "name": "рутина",
                        "toDos": ["Купить продукты", "Вывести Грейси на прогулку в парк"]
                        },
                        {
                        "name": "писательство",
                        "toDos": ["Сделать несколько новых задач", "Закончить писать книгу"]
                        },
                        {
                        "name": "работа",
                        "toDos": ["Сделать несколько новых задач", "Подготовиться к лекции в понедельник","Ответить на электронные письма", "Закончить писать книгу"]
                        },
                        {
                        "name": " преподавание",
                        "toDos": ["Подготовиться к лекции в понедельник"]
                        },
                        {
                        "name": "питомцы",
                        "toDos": ["Вывести Грейси на прогулку в парк "]
                        }
                ]
                organizedByTag.forEach(function (tag) {
                    var $tagName=$("<h3>").text(tag.name);
                    var $content=$("<ul>");

                    tag.toDos.forEach(function (description) {
                        var $li=$("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });

            } else if ($element.parent().is(":nth-child(4)")) {
                $input = $("<input>"),
                $button = $("<button>").text("+");
                $button.on = n("click", function () {
                    toDos.push($input.val());
                    $input.val("");
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
$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});

    