define(['component/listPage'], function (listPage) {
    return listPage(
        'modelList',
        'resource->/api/model',
        [
            {id: 'name', editor: 'text'},
            {id: 'mark', editor: 'text'}
        ]);
});