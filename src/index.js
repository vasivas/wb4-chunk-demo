Promise.all( [
    import(/* webpackChunkName: "first" */"./first.js"),
    import(/* webpackChunkName: "second" */"./second.js"),
] );