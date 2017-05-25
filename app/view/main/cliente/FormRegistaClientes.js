Ext.define('TrackIT.view.main.cliente.FormRegistaClientes', {
    extend: 'Ext.form.Panel',
    xtype: 'registaCliente',
    controller: 'registaCliente',
    requires: [
        'TrackIT.view.main.cliente.FormRegistaClientesController'
    ],
    id: 'formregistClientes',
    frame: false,
    height: 320,
    border: false,


    layout: {
        type: 'form',
        align: 'fit'
    },
    defaults: {
        layout: 'form',
        margin: 0,
        border: 'false'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Username:',
            id: 'user4',
            name: 'user'

},
        {
            xtype: 'textfield',
            fieldLabel: 'email:',
            id: 'email4',
            name: 'user'

        },
/*{
    xtype: 'textfield',
        fieldLabel: 'ID do Departamento:',
    id: 'id_departamento4'
},
{
    xtype: 'textfield',
        fieldLabel: 'Tipo de funcionário:',
    id: 'tipo_funcionario'
}
*/
],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar',
                glyph: 43,
                listeners: {
                    click: 'onClickRegistarClientes'
                }
            }
        ]
    }
});