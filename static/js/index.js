var sections = ['quotes', 'party', 'photos', 'announcement', 'map', 'todo','registries','we-do'];

function initLinks() {
    for (var i = 0; i < sections.length; i++) {
        var next = undefined;
        var prev = undefined;
        if (i != 0) {
            prev = '#' + sections[i-1];
        }
        if (i != sections.length - 1) {
            next = '#' + sections[i + 1];
        }
        initLink(document.getElementById(sections[i]), next, prev);
    }
}

function initLink(current, next, prev) {
    var container = document.createElement('div');
    var a;
    if (prev != undefined) {
        a = document.createElement('a');
        a.href = prev;
        a.innerText = 'BACK';
        container.appendChild(a);
    }
    if (next != undefined && prev != undefined) {
        var sep = document.createElement('span');
        sep.innerText = '//';
        container.appendChild(sep);
    }
    if (next != undefined) {
        a = document.createElement('a');
        a.href = next;
        a.innerText = 'NEXT';
        container.appendChild(a);
    }

    current.insertBefore(container, current.firstChild);
}

$(document).ready(function() {
    initLinks();
});