// ==UserScript==
// @name        Without_Vladimir
// @namespace   https://github.com/RedHatter
// @include     https://uuapp.plus4u.net/uu-coursekit-courseg01/*
// @run-at      document-start
// @version     1
// @grant       GM_log
// @grant       GM.setClipboard
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM 1.0.   It restores the sandbox.
*/
var MutationObserver = window.MutationObserver;
var myObserver       = new MutationObserver (mutationHandler);
var obsConfig        = {
    childList: true, attributes: true,
    subtree: true,   attributeFilter: ['class']
};

myObserver.observe (document, obsConfig);

function mutationHandler (mutationRecords) {

    mutationRecords.forEach ( function (mutation) {

        if (    mutation.type               == "childList"
            &&  typeof mutation.addedNodes  == "object"
            &&  mutation.addedNodes.length
        ) {
            for (var J = 0, L = mutation.addedNodes.length;  J < L;  ++J) {
              checkForCSS_Class (mutation.addedNodes[J], "uucoursekitstats-animations-vladimir-video-answer-correct");
              checkForCSS_Class (mutation.addedNodes[J], "uucoursekitstats-animations-vladimir-video-answer-wrong");
              checkForCSS_Class (mutation.addedNodes[J], "uucoursekit-anims-vladimir-video-answer-correct");
              checkForCSS_Class (mutation.addedNodes[J], "uucoursekit-anims-vladimir-video-answer-wrong");
            }
        }
        else if (mutation.type == "attributes") {
            checkForCSS_Class (mutation.target, "nav");
        }
    } );
}

function checkForCSS_Class (node, className) {
    //-- Only process element nodes
    if (node.nodeType === 1) {
        if (node.classList.contains (className) ) {
            console.log (
                'New node with class "' + className + '" = ', node
            );
            // YOUR CODE HERE
            //GM_log ('nav creation');
          	node.style.display= "none";
        }
    }
}

$(document).ready(function(){
	$("body").mouseup(function(e){
		// get selected text
		var seltext = getSelectedText();	
		if(seltext != ""){
            //GM_setClipboard (seltext);
            GM.setClipboard (seltext);
		}

	});
});

function getSelectedText () {
    if (document.getSelection) {    // all browsers, except IE before version 9
        var sel = document.getSelection ();
        // sel is a string in Firefox and Opera, 
        // and a selectionRange object in Google Chrome, Safari and IE from version 9
        // the alert method displays the result of the toString method of the passed object

        //alert (sel);
        return sel.toString();
    } 
    else {
        if (document.selection) {   // Internet Explorer before version 9
            var textRange = document.selection.createRange ();

            //alert (textRange.text);
            return textRange.text;
        }
    }

    return false;
}