define(function () {
    return {
        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: 'Add',
                        click: function () {
                            let markList = $$('markList');
                            let id = markList.add({});
                            markList.editRow(id);
                        }
                    }
                ]
            },
            {
                id: 'markList',
                view: 'datatable',
                columns:
                    [
                        {id: 'id'},
                        {id: 'name', editor: 'text'}
                    ],
                url: 'resource->/api/mark', // select
                save: 'resource->/api/mark', // save
                autoheight: true,
                autowidth: true,
                editable: true
            }
        ]
    }
        ;
});