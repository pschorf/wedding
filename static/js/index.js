var sections = ['quotes', 'party', 'photos', 'announcement', 'map', 'todo','registries','we-do'];
var targets = [
    {'img' : 'church-desc', 'x' : 246, 'y': 522}
];

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
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (x > target.x && x < target.x + 22 && y > target.y && y < target.y) {
            console.log(target.img);
        } else {
            console.log(x + ' ' + y);
        }
    }
}

$(document).ready(function() {
    initLinks();
    $('#map-image').mousemove(function(e) {
       var parentOffset = $(this).parent().offset();
       var left = parentOffset.left + this.offsetLeft;
       var top = parentOffset.top + this.offsetTop;
       updateMapImages(e.pageX - left, e.pageY - top);
    });
});