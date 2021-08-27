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
      <button className={"btn btn-primary " + (props.className || "")} type="button" data-bs-toggle="offcanvas" data-bs-target={"#" + id} title={props.title}>{name}</button>
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

export function Modal(props) {
  let name = props.name || "Opciones";
  let id = "modal" + (props.id || "Default");
  return (
    <>
      <button className={"btn btn-info " + (props.className || "")} type="button" data-bs-toggle="modal" data-bs-target={"#" + id}>{name}</button>
      <div className="modal fade modalAdicionales" id={id} tabindex="-1" aria-labelledby="modalEntradaLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="modalEntradaLabel">{name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ms-3">{props.children}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}