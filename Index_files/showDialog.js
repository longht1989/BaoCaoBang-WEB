function setEltDisplay(id, disp) {if (!document.getElementById)return false;var elt = document.getElementById(id);if (elt)elt.style.display = disp;return false;}
function showElt(id) {setEltDisplay(id, "");return false;}
function hideElt(id) {setEltDisplay(id, "none");return false;}
function showhide(id) {if (!document.getElementById)return false;var elt = document.getElementById(id);if (elt)if (elt.style.display == "none")elt.style.display = ""; else elt.style.display="none";return false;}
function showDialog(vLink, vWidth, vHeight)
{
return showWindow(vLink, false, true, true, false, false, false, false, true, true, vWidth, vHeight, 0, 0);
}
function showModalDialog(vLink, vWidth, vHeight)
{
return showWindow(vLink, false, false, false, false, false, false, false, true, true, vWidth, vHeight, 0, 0);
}

function showWindow(vLink, vStatus, vResizeable, vScrollbars, vMenubar, vToolbar, vLocation, vFullscreen, vTitlebar, vCentered, vWidth, vHeight, vTop, vLeft)
{
var sLink = (typeof(vLink.href) == 'undefined') ? vLink : vLink.href;

winDef = '';
winDef = winDef.concat('status=').concat((vStatus) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('resizable=').concat((vResizeable) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('menubar=').concat((vMenubar) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('scrollbars=').concat((vScrollbars) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('toolbar=').concat((vToolbar) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('location=').concat((vLocation) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('fullscreen=').concat((vFullscreen) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('titlebar=').concat((vTitlebar) ? 'yes' : 'no').concat(',');
winDef = winDef.concat('height=').concat(vHeight).concat(',');
winDef = winDef.concat('width=').concat(vWidth).concat(',');

if (vCentered)
{
	winDef = winDef.concat('top=').concat((screen.height - vHeight)/2).concat(',');
	winDef = winDef.concat('left=').concat((screen.width - vWidth)/2);
}
else
{
	winDef = winDef.concat('top=').concat(vTop).concat(',');
	winDef = winDef.concat('left=').concat(vLeft);
}

open(sLink, '_blank', winDef);

if (typeof(vLink.href) != 'undefined')
{
	return false;
}
}
function popup(url)
{
	window.open(url,'_blank','toolbar=yes, status=yes, location=yes,resizable,width=450,height=450,top=75,left=220,scrollbars=yes');
}
