define(function () {
    return {
        type: "line",
        height: 400,
        rows: [
            {
                view: 'button',
                label: 'Cars',
                click: function () {
                    routie('cars');
                }
            },
            {template: "Hi there!"},
            {template: "You're doing great!"},
            {
                cols: [
                    {template: "col 1"},
                    {template: "col 2"}
                ]
            }
        ]
    };
});