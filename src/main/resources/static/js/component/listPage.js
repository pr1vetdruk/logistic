define(function () {
    return function (tableId, url, columns) {
        return {
            rows: [
                {
                    view: 'toolbar',
                    cols: [
                        {
                            view: 'button',
                            label: 'Add',
                            click: function () {
                                let list = $$(tableId);
                                let id = list.add({});
                                list.editRow(id);
                            }
                        }
                    ]
                },
                {
                    id: tableId,
                    view: 'datatable',
                    columns: columns,
                    url: url, // select
                    save: url, // save
                    autoheight: true,
                    autowidth: true,
                    editable: true,
                    pager: 'listPager',
                    datafetch: 3
                },
                {
                    view: 'pager',
                    id: 'listPager',
                    size: 3,
                    group: 3,
                    template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
                }
            ]
        };
    };
});