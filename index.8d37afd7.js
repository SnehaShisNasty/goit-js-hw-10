function e(e){const r=new URLSearchParams({breed_ids:e,api_key:"live_7dDHCOo0JZCTbep0atS3ICUsRoXBfIxX7884Y8fBBYSfzVm1xFPUnss76zjFZjQh"});return fetch(`https://api.thecatapi.com/v1/images/search?${r}`).then((e=>{if(!e.ok)throw new Error(`Error: ${e.status}`);return e.json()}))}const r={select:document.querySelector("select"),div:document.querySelector("div"),loading:document.querySelector(".loader"),error:document.querySelector(".error")};r.error.style.display="none",r.loading.style.display="flex",fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(`Error: ${e.status}`);return e.json()})).then((e=>{r.select.innerHTML=e.map((({id:e,name:r})=>`\n           <option value="${e}">${r}</option>\n      `)).join("")})).catch((e=>{console.error("Error fetching cat data:",e),r.error.style.display="flex"})).finally((()=>{r.loading.style.display="none"})),r.select.addEventListener("change",(function(t){r.loading.style.display="flex",console.log("Selected breed ID:",t.target.value),e(t.currentTarget.value).then((e=>{r.div.style.display="block",r.div.innerHTML=e.map((({url:e,breeds:r})=>`\n           <img src="${e}" width="500px" alt="${r[0].name}">\n           <h2>${r[0].name}</h2>\n           <p>${r[0].temperament}</p>\n      `)).join("")})).catch((e=>{console.error("Error fetching cat data:",e),r.error.style.display="flex"})).finally((()=>{r.loading.style.display="none"}))}));
//# sourceMappingURL=index.8d37afd7.js.map
