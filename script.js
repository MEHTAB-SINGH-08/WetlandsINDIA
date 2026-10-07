var pages=["home","science","effects","data","india","solutions"];
function route(){var h=(location.hash.replace("#/","")||"home");if(pages.indexOf(h)<0)h="home";
pages.forEach(function(p){document.getElementById("p-"+p).hidden=p!==h});
document.querySelectorAll("nav a").forEach(function(a){var t=a.getAttribute("href").replace("#/","")||"home";if(t===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
document.title=(h==="home"?"Wetlands and the changing rain":h.charAt(0).toUpperCase()+h.slice(1)+" | Wetlands and rain");window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
var caps={steady:"Regular rain keeps water at the level reeds, fish and birds depend on.",drought:"Long dry spells drop the water, crack the mud and drive out fish and birds.",flood:"Heavy bursts swamp banks and nests and wash silt and pollution in."};
var hero=document.getElementById("hero"),cap=document.getElementById("cap"),bs=document.querySelectorAll(".ctl button");
function set(s){hero.setAttribute("class","s-"+s);cap.textContent=caps[s];bs.forEach(function(b){b.setAttribute("aria-pressed",b.dataset.s===s)})}
bs.forEach(function(b){b.onclick=function(){set(b.dataset.s)}});set("steady");
