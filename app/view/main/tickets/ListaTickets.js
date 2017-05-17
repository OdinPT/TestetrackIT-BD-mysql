Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('TrackIT.view.main.tickets.ListaTickets', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridticket',
    xtype: 'mainlisttickets',
    height: 600,
    requires: [
        'TrackIT.store.tickets.Tickets',
        'Ext.toolbar.Paging',
        'TrackIT.view.main.tickets.MostraTicket',
        'TrackIT.store.tickets.TicketSelected',
        'TrackIT.view.main.tickets.ProcuradorDaGrid'
    ],

    title: 'Tickets',

    store: {
        type: 'tickets'
    },
    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
      {text: 'ID',  dataIndex: 'id', flex: 1,
          filter: {
              type: 'string'
          }},
      { text: 'DE',  dataIndex: 'fromaddress', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }},
      { text: 'ASSUNTO', dataIndex: 'subject', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }},
      { text: 'DATA', dataIndex: 'datea', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }},
      { text: 'CORPO', dataIndex: 'body', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }},
      { text: 'ESTADO', dataIndex: 'state', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }},
      { text: 'DEPARTAMENTO', dataIndex: 'nome_departamento', flex: 1,
    editor: {
        allowBlank: false,
        maxLength: 49
    },
          filter: {
              type: 'string'
          }}
    ],

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
              text: 'Refresh!',
              handler: function() {
                Ext.MessageBox.wait('A carregar tickets...');
          myRequest = Ext.Ajax.request({
            url: 'app/php/filterimap.php',
      method: 'POST',
      success: function(response, opts) {
        Ext.MessageBox.updateProgress(1);
Ext.MessageBox.hide();
var grid = Ext.ComponentQuery.query('gridticket')[0]
grid.getStore().load();
    }
    })
}
    },
    {
      text: 'Limpar!',
      renderTo: Ext.getBody(),
    handler: function() {
      var grid = Ext.ComponentQuery.query('gridticket')[0];
      grid.getStore().removeAll();
    }
    }

        ]
    },

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('id');
            Ext.util.Cookies.set('cookieID', id);
            var ide = index+1;
            Ext.util.Cookies.set('cookieIDe', ide);
            var myWin = Ext.create("Ext.window.Window", {
                title: 'Tickets',
                modal: true,
                width: 1100,
                height: 550,
                items: [{
                    xtype: 'maintabtickets'
                }],
                listeners: {
                    afterrender: function() {
                        var store = Ext.getStore('ticketseleccionado2');
                        store.load({
                            callback: function(records, operation, success) {
                                var record=store.getAt(0);
                                var a =  Ext.getCmp('idd').setValue(record.data.id);
                                var b =  Ext.getCmp('subjectt').setValue(record.data.subject);
                                var c = Ext.getCmp('bodyy').setValue(record.data.body);
                                var d = Ext.getCmp('dateaa').setValue(record.data.datea);
                                var e = Ext.getCmp('statee').setValue(record.data.state);
                                var f = Ext.getCmp('nome_departamentoo').setValue(record.data.nome_departamento);
                            }
                        });

                    }
                }

            });
            myWin.show();
        }
    },
    onGridAfterRender: function(gridticket){
       setInterval(function(){
          grid.store.load();
       }, 1);
   }
});
