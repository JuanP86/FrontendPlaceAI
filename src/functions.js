import React from "react";
import icons from "bootstrap-icons/bootstrap-icons.svg";

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
export const $ = document.$.bind(document);
export const $$ = document.$$.bind(document);

export function apiLink(path, params) {
  let link = new URL(path, api);
  link.searchParams.set("key", "ai");
  for (let i in params) link.searchParams.set(i, params[i]);
  return link;
}

export function Sidebar(props) {
  let name = props.name || "Navegación";
  let id = "appSidebar" + (props.id || "Default");
  return (
    <>
      <button className={"btn btn-primary "+(props.className || "")} type="button" data-bs-toggle="offcanvas" data-bs-target={"#" + id} title={props.title}>{name}</button>
      <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id={id}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">{name} {props.title}</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0">{props.children}</div>
      </div>
    </>
  )
}

export function Alert(props) {
  return (
    <div className={`alert alert-${props.type || "warning"} alert-dismissible fade show my-3 ${props.className}`}>
      {props.children}
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    </div>
  )
}

export function Icon(props) {
  return (
    <svg className={(props.className || "") + " bi"} width={props.size || 16} height={props.size || 16} fill="currentColor" role="img" aria-label={props.name}>
      <use xlinkHref={icons + "#" + props.name} />
    </svg>
  )
}