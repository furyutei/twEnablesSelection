// ==UserScript==
// @name            twEnablesSelection
// @namespace       http://d.hatena.ne.jp/furyu-tei
// @author          furyu
// @version         0.1.0.8
// @include         http://twitter.com/*
// @include         https://twitter.com/*
// @description     enables selection of text on Twitter
// ==/UserScript==
/*
The MIT License (MIT)
Copyright (c) 2014 furyu <furyutei@gmail.com>
https://github.com/furyutei/twEnablesSelection
*/

(function(w, d){

if (w !== w.parent) return;

var main = function(w, d){
    var DEBUG = false;
    
    var SUPPRESS_FORCE_SCROLLING = true;
    var OVERRIDE_MOUSE_OPERATION = true;
    
    var TWEET_TEXT_ONLY = true;
    var COPY_SELECTED_TEXT_TO_SEARCH_FORM = false;
    
    var log = function(object){
        if (!DEBUG) return;
        console.error('['+new Date().toISOString()+']', object);
    };
    
    var NAME_SCRIPT = 'twEnablesSelection'; if (w[NAME_SCRIPT+'_touched']) return;
    var $=w.$; if (!$) {var main = arguments.callee; setTimeout(function(){main(w, d);}, 100); return;}
    log('*** '+  NAME_SCRIPT +' start');
    w[NAME_SCRIPT+'_touched'] = true;
    
    if (SUPPRESS_FORCE_SCROLLING) {
        var scrollTo = w.scrollTo, tid_suppress = null;
        w.scrollTo = function(to_x, to_y){
            log('** scrollTo() ** x=' + to_x + ', y=' + to_y);
            if (tid_suppress) {
                log('suppress force scrolling: tid=' + tid_suppress);
                return;
            }
            return scrollTo(to_x, to_y);
        };
        $(d).scroll(function(){
            if (tid_suppress) clearTimeout(tid_suppress);
            tid_suppress = setTimeout(function(){
                tid_suppress = null;
            }, 500);
            log('** scroll event ** set tid=' + tid_suppress);
        });
    }
    
    var get_selected_text = function(){
        if (w.getSelection) return w.getSelection().toString();
        if (d.selection && d.selection.type != 'Control') return d.selection.createRange().text;
        return '';
    };
    
    var override = function(event){
        log('** mouseup event ** class='+$(event.target).attr('class'));
        
        var selected_text = get_selected_text();
        if (!selected_text) return;
        
        var jq_target = $(event.target);
        if ((TWEET_TEXT_ONLY && !jq_target.hasClass('js-tweet-text') && jq_target.parents('.js-tweet-text').size() <= 0)) return;
        
        if (COPY_SELECTED_TEXT_TO_SEARCH_FORM) $('input#search-query').val(selected_text);
        
        var onclick = function(event){
            event.stopPropagation();
            log('ignored click event');
        };
        
        jq_target.click(onclick);
        
        setTimeout(function(){
            jq_target.unbind('click', onclick);
            log('restored click event');
        }, 100);
    };
    if (OVERRIDE_MOUSE_OPERATION) $(w).mouseup(override);

}   //  end of main()


if (typeof w.$ == 'function') {
    main(w, d);
}
else {
    var container = d.documentElement;
    var script = d.createElement('script');
    script.textContent = '('+main.toString()+')(window, document);';
    container.appendChild(script);
}

})(window, document);

// ■ end of file
