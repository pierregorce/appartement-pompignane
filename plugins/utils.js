export default ({ app }, inject) => {
    inject('_r', (url) => {
        if (url.charAt(0) === '/') {
            return app.router.options.base + "_nuxt/" + url.substr(1);
        }
        return url;
    });
}