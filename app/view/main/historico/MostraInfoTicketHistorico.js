
Ext.define('TrackIT.view.main.historico.MostraInfoTicketHistorico', {
    extend: 'Ext.form.Panel',
    xtype: 'infotickethistorico',
    controller: 'infotickethistorico',
    requires: [
      'TrackIT.store.historico.CarregaInfoHistoricoTicket',
      'TrackIT.view.main.historico.MostraInfoHistoricoTicketController'
    ],
    id: 'paginainfohistoricoticket',
    frame: true,
    title: 'Informação Principal',
    width: 1080,
    height: 400,
    bodyPadding: 10,
    layout: {
            type: 'form',
            align: 'stretch'
        },
        defaults: {
            layout: 'form',
            margin: 20
        },

    config:{stores: ['tickethistoricoseleccionado']},

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'idd'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email:',
            id: 'emaill'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data:',
            id: 'dateaa'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Estado:',
            id: 'statee'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Departamento:',
            id: 'departmentt'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Assunto:',
            id: 'subjectt'
        },
        {
            xtype: 'textareafield',
            id: 'bodyy',
            fieldLabel: 'Corpo:'
        }
  ],
  dockedItems: {
      dock: 'bottom',
      xtype: 'toolbar',
      items: [

      {
        text: 'Apagar',
        glyph: 43,
        listeners: {
          click: 'onClickApagaTicketDoHistorico'
        }
      },
      {
      text: 'Mover p/ Recuperados',
      glyph: 43,
      listeners: {
        click: 'onClickMoveParaRecuperados'
      }
    }
    ]
  }
  });
