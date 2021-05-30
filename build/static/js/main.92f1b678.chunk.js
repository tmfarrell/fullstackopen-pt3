(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0], {20: function(e, n, t) {}, 40: function(e, n, t) {
  'use strict'; t.r(n); const r=t(2); const c=t(15); const a=t.n(c); const o=(t(20), t(6)); const u=t(3); const i=t(4); const s=t.n(i); const j='/api/persons'; const l=function() {
    return s.a.get(j).then((function(e) {
      return e.data;
    }));
  }; const d=function(e) {
    return s.a.post(j, e).then((function(e) {
      return e.data;
    }));
  }; const b=function(e, n) {
    return s.a.put(''.concat(j, '/').concat(e), n).then((function(e) {
      return e.data;
    }));
  }; const h=function(e) {
    return s.a.delete(''.concat(j, '/').concat(e)).then((function(e) {
      return e.data;
    }));
  }; const m=t(0); const f=function(e) {
    const n=e.person; const t=e.removePerson; return Object(m.jsxs)('li', {children: [Object(m.jsx)('b', {children: n.name}), ' / ', n.number, Object(m.jsx)('button', {onClick: t, children: 'delete'})]});
  }; const O=function(e) {
    const n=e.addPerson; const t=e.newName; const r=e.handleNameChange; const c=e.newNumber; const a=e.handleNumberChange; return Object(m.jsxs)('form', {onSubmit: n, children: [Object(m.jsxs)('div', {children: ['name: ', Object(m.jsx)('input', {value: t, onChange: r})]}), Object(m.jsxs)('div', {children: ['number: ', Object(m.jsx)('input', {value: c, onChange: a})]}), Object(m.jsx)('div', {children: Object(m.jsx)('button', {type: 'submit', children: 'add'})})]});
  }; const p=function(e) {
    const n=e.persons; const t=e.removePerson; return Object(m.jsx)('div', {children: n.map((function(e) {
      return Object(m.jsx)(f, {person: e, removePerson: function() {
        return t(e);
      }}, e.name);
    }))});
  }; const v=function(e) {
    const n=e.someFilter; const t=e.handleFilter; return Object(m.jsx)('form', {children: Object(m.jsx)('div', {children: Object(m.jsx)('input', {value: n, onChange: t})})});
  }; const x=function(e) {
    const n=e.message; const t=e.class_name; return null===n?null:Object(m.jsx)('div', {className: t, children: n});
  }; const g=function() {
    const e=Object(r.useState)([]); const n=Object(u.a)(e, 2); const t=n[0]; const c=n[1]; const a=Object(r.useState)(''); const i=Object(u.a)(a, 2); const s=i[0]; const j=i[1]; const f=Object(r.useState)(''); const g=Object(u.a)(f, 2); const w=g[0]; const N=g[1]; const C=Object(r.useState)(''); const P=Object(u.a)(C, 2); const S=P[0]; const k=P[1]; const y=Object(r.useState)(null); const F=Object(u.a)(y, 2); const E=F[0]; const T=F[1]; const _=Object(r.useState)(null); const A=Object(u.a)(_, 2); const D=A[0]; const J=A[1]; const B=t.filter((function(e) {
      return e.name.includes(S);
    })); return Object(r.useEffect)((function() {
      l().then((function(e) {
        c(e);
      }));
    }), []), Object(m.jsxs)('div', {children: [Object(m.jsx)('h1', {children: 'Phonebook'}), Object(m.jsx)(x, {message: E, class_name: 'success'}), Object(m.jsx)(x, {message: D, class_name: 'error'}), Object(m.jsx)('h2', {children: 'Filter Entries'}), Object(m.jsx)(v, {someFilter: S, handleFilter: function(e) {
      k(e.target.value);
    }}), Object(m.jsx)('h2', {children: 'Add New Entry'}), Object(m.jsx)(O, {addPerson: function(e) {
      e.preventDefault(); const n={name: s, number: w}; const r=t.filter((function(e) {
        return e.name===n.name;
      })); if (0===r.length) {
        d(n).then((function(e) {
          c(t.concat(e)), j(''), N('');
        })).catch((function(e) {
          J(e.response.data.error), setTimeout((function() {
            J(null);
          }), 5e3);
        }));
      } else {
        const a=Object(o.a)(Object(o.a)({}, r[0]), {}, {number: w}); window.confirm(''.concat(a.name, ' is already in the phonebook, replace old number with new one?'))&&b(a.id, a).then((function(e) {
          c(t.map((function(e) {
            return e.id!==a.id?e:a;
          }))), j(''), N(''), T('Phone number for '.concat(a.name, ' updated.')), setTimeout((function() {
            T(null);
          }), 5e3);
        })).catch((function(e) {
e.response.data.error?J(e.response.data.error):J('An error occurred while updating phonebook entry for '.concat(a.name, '.')), setTimeout((function() {
            J(null);
          }), 5e3);
        }));
      }
    }, newName: s, handleNameChange: function(e) {
      j(e.target.value);
    }, newNumber: w, handleNumberChange: function(e) {
      N(e.target.value);
    }}), Object(m.jsx)('h2', {children: 'Numbers'}), Object(m.jsx)(p, {persons: B, removePerson: function(e) {
      window.confirm('Delete '.concat(e.name, '?'))&&h(e.id).then((function() {
        c(t.filter((function(n) {
          return n.id!==e.id;
        })));
      }));
    }})]});
  }; a.a.render(Object(m.jsx)(g, {}), document.getElementById('root'));
}}, [[40, 1, 2]]]);
// # sourceMappingURL=main.92f1b678.chunk.js.map
