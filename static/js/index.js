var sections = ['quotes', 'party', 'photos', 'announcement', 'map', 'todo','registries','we-do'];

function scrollTo(id) {
    $.scrollTo('#' + id, 1000);
}

function initLinks() {
    for (var i = 0; i < sections.length; i++) {
        var next = undefined;
        var prev = undefined;
        if (i != 0) {
            prev = sections[i-1];
        }
        if (i != sections.length - 1) {
            next = sections[i + 1];
        }
        initLink(document.getElementById(sections[i]), next, prev);
    }
}

function initLink(current, next, prev) {
    var container = document.createElement('div');
    $(container).addClass('links');
    var a;
    if (prev != undefined) {
        a = document.createElement('a');
        a.onclick = function() {
           scrollTo(prev);
        };
        a.innerText = 'BACK';
        container.appendChild(a);
    }
    if (next != undefined && prev != undefined) {
        var sep = document.createElement('span');
        sep.innerHTML = '&nbsp;//&nbsp;';
        container.appendChild(sep);
    }
    if (next != undefined) {
        a = document.createElement('a');
        a.onclick = function() {
           scrollTo(next);
        };
        a.innerText = 'NEXT';
        container.appendChild(a);
    }

    current.insertBefore(container, current.firstChild);
}

function updateMapImages(x, y) {
    console.log(x + ',' + y);
}

$(document).ready(function() {
    initLinks();
    $('#map-image').mousemove(function(e) {
       updateMapImages(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    });
});