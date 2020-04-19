define(function () {
    let ajax = webix.ajax().headers({
        'Content-type': 'application/json'
    });

    webix.proxy.resource = {
        init: function () {
            webix.extend(this, webix.proxy.rest);
        },
        load: function (view, params) {
            let url = view.config.url.source; // url api

            return ajax.get(url).then(function (value) {
                return value.json().content;
            });
        },
        save: function (view, params) {
            let id = params.id;
            let url = view.config.url.source;

            if (params.operation === 'update') {
                return ajax.put(url + '/' + id, params.data);
            } else if (params.operation === 'insert') {
                delete params.data.id;
                return ajax.post(url, params.data);
            } else if (params.operation === 'delete') {
                return ajax.del(url + '/' + id);
            }
        }
    };
});