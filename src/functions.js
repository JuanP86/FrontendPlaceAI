import React from "react";

const api = "https://placeai-api.azurewebsites.net";

export function apiLink(path, params) {
  let link = new URL(path, api);
  link.searchParams.set("key", "ai");
  for (let i in params) link.searchParams.set(i, params[i]);
  return link;
}

HTMLDocument.prototype.on = function (...args) {
  this.addEventListener(...args);
  return this;
};
Element.prototype.on = HTMLDocument.prototype.on;
HTMLDocument.prototype.$ = function (selectors) {
  return this.querySelector(selectors);
};
HTMLDocument.prototype.$$ = function (selectors) {
  return this.querySelectorAll(selectors);
};
Element.prototype.$ = HTMLDocument.prototype.$;
Element.prototype.$$ = HTMLDocument.prototype.$$;
export const $ = document.$.bind(document);
export const $$ = document.$$.bind(document);
export const main = document.getElementsByTagName("main")[0];

export class Sidebar extends React.Component {
  render(content, title = null) {
    return (
      <>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">{title || "Navegar"}</button>
        <div class="offcanvas offcanvas-start text-dark" tabindex="-1" id="sidebar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">{title || "Navegación"}</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">{content}</div>
        </div>
      </>
    )
  }
}