'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) { closeMenu(); document.querySelectorAll('.nav-dropdown[open]').forEach(item => item.open = false); } });
document.querySelectorAll('.nav-dropdown').forEach(item => item.addEventListener('toggle', () => { if (item.open) document.querySelectorAll('.nav-dropdown').forEach(other => { if (item !== other) other.open = false; }); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { if (navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } document.querySelectorAll('.nav-dropdown[open]').forEach(item => item.open = false); } });
matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);
const resourceDialog = document.querySelector('#resource-dialog');
document.querySelectorAll('[data-resource]').forEach(trigger => trigger.addEventListener('click', event => { event.preventDefault(); document.querySelector('#dialog-title').textContent = trigger.dataset.resource; resourceDialog.showModal(); }));
resourceDialog.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => resourceDialog.close()));
resourceDialog.addEventListener('click', event => { if (event.target === resourceDialog) { const r = resourceDialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) resourceDialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
