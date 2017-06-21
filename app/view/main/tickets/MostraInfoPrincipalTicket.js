Ext.define('TrackIT.view.main.tickets.MostraInfoPrincipalTicket', {
    extend: 'Ext.form.Panel',
    xtype: 'infoticketprincipal',
    controller: 'infoticketprincipal',

    requires: [
      'TrackIT.store.tickets.CarregaInfoPrincipalTicket',
      'TrackIT.view.main.tickets.MostraInfoPrincipalTicketController',
        'TrackIT.view.main.tickets.EnviaRespostas.FormEnviaResposta'
    ],
    id: 'paginainfoprincipalticket',
    title: 'Informação Principal',

    //width: 1100,

    width: 1000,
    height: 450,
    autoScroll: true,


    layout: {
            type: 'form',
            align: 'stretch'
        },
        defaults: {
            layout: 'form',
            margin: 0
        },

    config:{stores: ['ticketseleccionado2']},

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'idd',
            readOnly: true

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email:',
            id: 'emaill',
            readOnly: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data:',
            id: 'dateaa',
            readOnly: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Estado:',
            id: 'Descricao_Estado',
            readOnly: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Departamento:',
            id: 'nome_departamentoo',
            readOnly: true
        },
        {
        xtype: 'textfield',
        fieldLabel: 'Assunto:',
        id: 'subjectt',
            readOnly: true
    },
    {
        xtype: 'textareafield',
        id: 'bodyy',
        fieldLabel: 'Corpo:',
        readOnly: true
    }
  ],
  dockedItems: {
      dock: 'bottom',
      xtype: 'toolbar',
      items: [
          {
        text: 'Reciclar',
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
                          title: 'Responder',
                          modal: true,
                          width: 700,
                          height: 270,
                          items: {
                              xtype: 'enviaresposta'
                          }
                      });
                      myWin.show();
                  }
              }
          },
          {
              text: 'Mudar estado',
              glyph: 43,
              listeners: {
                  click: function(){
                      var myWin = Ext.create("Ext.window.Window", {
                          title: 'Mudar estado',
                          modal: true,
                          items: {
                              xtype: 'registahisestado'
                          }
                      });
                      myWin.show();
                  }
              }
          },{
              text: 'Mudar Departamento',
              glyph: 43,
              listeners: {
                  click: function(){
                      var myWin = Ext.create("Ext.window.Window", {
                          title: 'Mudar Departamento',
                          modal: true,
                          items: {
                              xtype: 'registahisDep'
                          }

                      });
                      myWin.show();
                  }
              }
          }


      ]
  }
  });
