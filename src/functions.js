import React from "react";

const api = "https://placeai-api.azurewebsites.net";

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

export function apiLink(path, params) {
  let link = new URL(path, api);
  link.searchParams.set("key", "ai");
  for (let i in params) link.searchParams.set(i, params[i]);
  return link;
}

export const $ = document.$.bind(document);
export const $$ = document.$$.bind(document);
export const main = document.getElementsByTagName("main")[0];

export function Sidebar(props) {
  let title = props.title || "Navegación";
  let id = "appSidebar" + (props.id || "Default");
  return (
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target={"#" + id}>{title}</button>
      <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id={id}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">{title}</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0">{props.children}</div>
      </div>
    </>
  )
}