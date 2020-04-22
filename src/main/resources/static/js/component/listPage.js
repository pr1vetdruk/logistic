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
                                let list = $$(tableId)
                                let id = list.add({})
                                list.editRow(id)
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
                    pager: tableId + 'Pager',
                    datafetch: 10,
                    on: {
                        onItemClick: function (id) {
                            let column = this.config.columns.find(function (col) {
                                return col.id === id.column
                            })

                            let parentTable = this

                            if (column.dialogUrl) {
                                require([column.dialogUrl], function (dialogPage) {
                                    webix.ui({
                                        view: 'window',
                                        head: 'Choose an item',
                                        width: 400,
                                        position: 'center',
                                        modal: true,
                                        body: dialogPage,
                                        parentTable: parentTable,
                                        cell: id
                                    }).show()
                                })
                            }
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 10,
                    group: 10,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})