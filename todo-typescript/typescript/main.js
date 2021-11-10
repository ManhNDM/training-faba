var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var todosDefault = [
    {
        id: 1,
        complete: false,
        title: "Nấu ăn"
    },
    {
        id: 2,
        complete: false,
        title: "Rưa bác"
    },
];
var app = function () {
    var todos = __spreadArrays(todosDefault);
    var todoList = $(".todo-list");
    var newTodo = $(".new-todo");
    var allToggle = $('.toggle-all');
    return {
        add: function (todo) {
            todos.push(todo);
        },
        "delete": function (id) {
            todos = todos.filter(function (todo) {
                console.log(todo, id);
                return todo.id != id;
            });
        },
        changeToggle: function (id) {
            todos = todos.map(function (todo) {
                if (todo.id == id) {
                    return __assign(__assign({}, todo), { complete: !todo.complete });
                }
                else {
                    return todo;
                }
            });
        },
        changeToggleAll: function (checked) {
            todos = todos.map(function (todo) { return (__assign(__assign({}, todo), { complete: checked })); });
        },
        render: function () {
            var html = todos.map(function (todo) { return ("\n            <li class=" + (todo.complete && 'completed') + ">\n\t\t\t\t\t\t<div class=\"view\">\n\t\t\t\t\t\t\t<input class=\"toggle\" data-toggle=\"" + todo.id + "\" type=\"checkbox\" " + (todo.complete ? 'checked' : '') + ">\n\t\t\t\t\t\t\t<label>" + todo.title + "</label>\n\t\t\t\t\t\t\t<button   data-index='" + todo.id + "' class=\"destroy\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\n\t\t\t</li>\n            "); }).join('');
            todoList.innerHTML = html;
        },
        init: function () {
            var _this = this;
            newTodo.addEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    var todoNew = {
                        id: new Date().getTime(),
                        complete: false,
                        title: e.target.value
                    };
                    _this.add(todoNew);
                    newTodo.focus();
                    newTodo.value = '';
                    _this.render();
                }
            });
            todoList.onclick = function (event) {
                var deleteBtn = event.target.closest(".destroy");
                var checkboxToggle = event.target.closest(".toggle");
                if (deleteBtn) {
                    var index = deleteBtn.dataset.index;
                    _this["delete"](index);
                    _this.render();
                }
                if (checkboxToggle) {
                    var index = checkboxToggle.dataset.toggle;
                    _this.changeToggle(index);
                    _this.render();
                }
            };
            allToggle.addEventListener('change', function (e) {
                console.log(e);
                _this.changeToggleAll(e.target.checked);
                _this.render();
            });
            this.render();
        }
    };
};
app().init();
