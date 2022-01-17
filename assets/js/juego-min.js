const miModulo = (() => { "use strict"; let e = []; const t = ["C", "D", "H", "S"],
        a = ["A", "J", "Q", "K"]; let n = [],
        r = 0; const l = document.querySelector("#btnPedir"),
        s = document.querySelector("#btnDetener"),
        o = document.querySelector("#btnNuevo"),
        d = document.querySelectorAll("small"),
        c = document.querySelectorAll(".divCartas"),
        i = (t = 2) => { e = u(), n = []; for (let e = 0; e < t; e++) n.push(0);
            d.forEach(e => e.innerText = 0), c.forEach(e => e.innerHTML = ""), l.disabled = !1, s.disabled = !1 },
        u = () => { e = []; for (let a = 2; a <= 10; a++)
                for (let n of t) e.push(a + n); for (let n of t)
                for (let t of a) e.push(t + n); return _.shuffle(e) },
        m = () => { if (0 === e.length) throw "No hay más cartas en la baraja"; return e.pop() },
        b = (e, t) => (n[t] = n[t] + (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : parseInt(t) })(e), d[t].innerText = n[t], n[t]),
        f = (e, t) => { const a = document.createElement("img");
            a.src = `assets/cartas/${e}.png`, a.classList.add("cartas"), c[t].append(a) },
        h = e => { do { const e = m();
                r = b(e, n.length - 1), f(e, n.length - 1) } while (r < e && e <= 21);
            (() => { const [e, t] = n;
                setTimeout(() => { t === e ? alert("Nadie gana :(") : e > 21 ? alert("Gana la Compu") : t > 21 ? alert("Gana el Jugador") : alert("Gana la compu!") }, 100) })() }; return l.addEventListener("click", () => { const e = m(),
            t = b(e, 0);
        f(e, 0), t > 21 ? (console.warn("Perdiste !"), l.disabled = !0, s.disabled = !0, h(t)) : 21 === t && (console.warn("Ganaste !!"), l.disabled = !0, s.disabled = !0, h(t)) }), s.addEventListener("click", () => { l.disabled = !0, s.disabled = !0, h(n[0]) }), o.addEventListener("click", () => { i() }), { nuevoJuego: i } })();