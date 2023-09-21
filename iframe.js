function addStyle(e) {
    var t = document.createElement("style");
    t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t)
}
var modal, modalDiv, span;

function openTmsModel(e) {
    var t = document.getElementById("careCreditFSession").value,
        o = document.getElementById("careCreditRfId").value;
    IHSIframeCall(e, t, o)
}
var IHSIframeCall = function(e, t, o) {
    ReffID = o, (modalDiv = document.createElement("div")).setAttribute("class", "modal-parent"), void 0 !== modalDiv && null != modalDiv && (modalDiv.innerHTML = ' <div id="tmsModal" class="tmsModal"> <div class="modal-content"> <div class="modal-body"> <span class="tmsModalCloseBtn" onclick="closeTmsModal()">&times;</span><iframe sandbox="allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox " src="' + e + "?code=" + t + "&rfID=" + o + '&iframeFlag=Y" id="careCreditIframe"  class="modal-cls"></iframe> </div>    </div> </div>', document.body.appendChild(modalDiv), modal = document.getElementById("tmsModal"))
};

function closeTmsModal() {
    var e = ReffID,
        t = document.createEvent("Event");
    t.initEvent("carecreditEvent", !0, !0), t.data = e, modalDiv.removeAttribute("class"), window.parent.document.dispatchEvent(t), modal.parentNode.removeChild(modal)
}

function createButton() {
    // var e = document.createElement("BUTTON");
    // if (void 0 !== e && null != e) {
        var t = document.getElementById("tms_service_url").value
            // o = t.slice(0, -4);
        // e.className = "noStyleBtn", e.innerHTML = '<img src="' + o + 'images/care_credit_icon.png" alt="Snow" style="height:25px;">', document.getElementById("carecreditbutton").appendChild(e), e.onclick = function() {
            return openTmsModel(t), !1
        // }
    // }
}
addStyle(".noStyleBtn  { padding: 0px; border: none; background: transparent; outline: 0; } .modal-content { position: relative;background-color: #fefefe; margin: auto; padding: 0;border: 1px solid #888; width: 100%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s;animation-name: animatetop; animation-duration: 0.4s; height:100%; } .tmsModalCloseBtn { color: #939598; float: right; font-size: 28px; font-weight: bold; padding-right : 10px;} .tmsModalCloseBtn:hover, .tmsModalCloseBtn:focus {color: #000; text-decoration: none; cursor: pointer; } .modal-body {padding: 0px; height: 100%} .modal-cls { width:100%; height:100%; border:none; }  .modal-parent {   position: fixed;  top: 0;  bottom: 0;  left: 0;  right: 0;  background: rgba(90, 90, 90, 0.5);  z-index: 9999;}.tmsModal {position: absolute;   height: 100%;    width: 100%;}"), createButton();