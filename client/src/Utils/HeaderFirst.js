export const HeaderHandlerShow = (id) => {
  document.getElementById(id).classList.remove("d-none");
};

export const HeaderHandlerHide = (id) => {
  document.getElementById(id).classList.add("d-none");
};

export const HeaderHandlerToggle = (id) => {
  document.getElementById(id).classList.toggle("d-none");
};

export const addClass = (e) => {
  e.target.classList.add("bg-info");
};

export const removeClass = (e) => {
  e.target.classList.remove("bg-info");
};

