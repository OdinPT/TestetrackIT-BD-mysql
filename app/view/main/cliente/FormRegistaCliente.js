Ext.define('TrackIT.view.main.cliente.FormRegistaCliente', {
    extend: 'Ext.form.Panel',
    xtype: 'registaCliente',
    controller: 'registaCliente',
    requires: [
        'TrackIT.view.main.cliente.FormRegistaClienteController'
    ],
    id: 'formregistCliente',
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
            id: 'Nome_Cliente',
            name: 'user'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'email:',
            id: 'Email_Cliente',
            name: 'mail'

        },
        {
        xtype: 'datefield',
            format: 'd/m/Y',
            submitFormat: 'Y/m/d ',
        fieldLabel: 'Data Nascimento:',
        id: 'DataNasc_Cliente'
        },
        {
        xtype: 'textfield',
        fieldLabel: 'Contribuinte do Cliente',
        id: 'Contribuinte_Cliente'
        }

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