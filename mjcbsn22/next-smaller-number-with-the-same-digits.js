function nextSmaller(t) {
    const n = t.toString(10).split("").map(function(t) {
            return parseInt(t)
        }),
        r = n.length,
        e = [];
    for (i = r - 1; i >= 0; i--) {
        let t = sort(i, n, r);
        t && e.push(t)
    }
    return e.length > 0 ? Math.max(...e) : -1
}

function sort(t, n, r) {
    for (j = t - 1; j >= 0; j--)
        if (n[t] < n[j]) {
            let e = [],
                i = swap(n.slice(0), t, j),
                s = i.slice(0, j + 1);
            e.push(...s);
            let o = i.slice(j + 1, r).sort(function(t, n) {
                return n - t
            });
            if (e.push(...o), 0 === e[0]) continue;
            return parseInt(e.join(""))
        }
}

function swap(t, n, r) {
    var e = t[n];
    return t[n] = t[r], t[r] = e, t
}
