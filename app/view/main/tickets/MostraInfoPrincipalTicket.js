
Ext.define('TrackIT.view.main.tickets.MostraInfoPrincipalTicket', {
    extend: 'Ext.form.Panel',
    xtype: 'infoticketprincipal',
    controller: 'infoticketprincipal',
    requires: [
      'TrackIT.store.tickets.CarregaInfoPrincipalTicket',
      'TrackIT.view.main.tickets.MostraInfoPrincipalTicketController'
    ],
    id: 'paginainfoprincipalticket',
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

    config:{stores: ['ticketseleccionado2']},

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'idd'
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
            id: 'nome_departamentoo'
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
        text: 'Carregar Informações',
        glyph: 43,
        listeners: {
           click: 'onClickObterInfoPrincipalTicket'
        }

      },
      {
        text: 'Move p/ Historico',
        glyph: 43,
        listeners: {
          click: 'onClickMoveParaHistorico'
        }
      },
          {
              text: 'Responder',
              glyph: 43,
              listeners: {
                  click: function(){
                      var myWin = Ext.create("Ext.window.Window", {
                          title: 'Resposta',
                          modal: true,
                          width: 1000,
                          height: 500,
                          bind: {
                              html: '<iframe src="/testetrackit/app/php/showEmailAnswerForm.php" width="100%" height="100%" frameBorder="0"></iframe>'
                          }
                      });
                      myWin.show();
                  }
              }
          }
    ]
  }
  });
