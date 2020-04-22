define(function () {
    return function (tableId, url, columns) {
        return {
            rows: [
                {
                    id: tableId,
                    view: 'datatable',
                    columns: columns,
                    url: url, // select
                    save: url, // save
                    autoheight: true,
                    autowidth: true,
                    pager: tableId + 'Pager',
                    datafetch: 5,
                    on: {
                        onItemClick: function (id) {
                            let model = this.getItem(id)

                            let window = this.getTopParentView()
                            let parentConfig = window.config
                            let cell = parentConfig.cell
                            let parentTable = parentConfig.parentTable

                            let field = {}
                            field[cell.column] = model
                            parentTable.updateItem(cell.row, field)

                            setTimeout(function () {
                                window.close()
                            }, 0)
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 5,
                    group: 5,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})