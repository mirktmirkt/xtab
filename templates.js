!function(){"use strict";var e={};e.templates={},e.render=function(a,l){return e.templates[a]?e.templates[a].call(e,l||{}):""},e.templates.popup=function(e){var a,l,t='<h1>xTab</h1><form><h2>Maximum Tabs:</h2><select id="max" name="max"> ';for(var o in e.options)l=e.max==o,l&&(a=!0),t+=' <option value="'+o+'"',l&&(t+=" selected"),t+=">"+e.options[o]+"</option> ";return t+=' <option value="other"',a||(t+=" selected"),t+='>Other...</option></select><input type="number" name="max" id="input-max"',a||(t+=' style="display: block;" value="'+e.max+'"'),t+='><h2>Destroy:</h2><label><input type="radio" name="algo" value="used"',"used"==e.algo&&(t+=" checked"),t+='>Least recently used</label><label><input type="radio" name="algo" value="accessed"',"accessed"==e.algo&&(t+=" checked"),t+='>Least accessed</label><label><input type="radio" name="algo" value="oldest"',"oldest"==e.algo&&(t+=" checked"),t+='>Oldest</label><h2>Block:</h2><label><input type="radio" name="algo" value="block"',"block"==e.algo&&(t+=" checked"),t+=">Block new tabs from opening</label></form>"},"undefined"!=typeof module&&module.exports?module.exports=e:window.Aftershave=e}();