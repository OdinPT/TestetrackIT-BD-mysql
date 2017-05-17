/**
 * This view is an example list of people.
 */
Ext.define('TrackIT.view.main.historico.ListaTicketsHistorico', {
    extend: 'Ext.grid.Panel',
    id: 'grid2',
    xtype: 'mainlisthistorico',
    requires: [
        'TrackIT.store.TicketsHistorico',
        'Ext.toolbar.Paging',
        'TrackIT.view.main.historico.MostraTicketHistorico',
        'TrackIT.view.main.historico.TicketControllerHistorico'
    ],

    title: 'Tickets Historico',

    store: {
        type: 'ticketshistorico'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
      {text: 'ID',  dataIndex: 'id', flex: 1,
          filter: {
              type: 'string'
          }},
      { text: 'DE',  dataIndex: 'fromaddress', flex:  1,
          filter: {
              type: 'string'
          } },
      { text: 'ASSUNTO', dataIndex: 'subject', flex: 1,
          filter: {
              type: 'string'
          } },
      { text: 'DATA', dataIndex: 'datea', flex: 1,
          filter: {
              type: 'string'
          } },
      { text: 'CORPO', dataIndex: 'body', flex: 1,
          filter: {
              type: 'string'
          } },
      { text: 'ESTADO', dataIndex: 'state', flex: 1,
          filter: {
              type: 'string'
          } },
      { text: 'DEPARTAMENTO', dataIndex: 'nome_departamento', flex: 1,
          filter: {
              type: 'string'
          } }
    ],

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
              text: 'Refresh!',
              handler: function() {
                Ext.MessageBox.wait('A carregar tickets...');
          myRequest = Ext.Ajax.request({
            url: 'app/php/CarregamStores/carregaticketshistorico.php',
      method: 'POST',
      success: function(response, opts) {
        Ext.MessageBox.updateProgress(1);
Ext.MessageBox.hide();
      Ext.getCmp('grid2').store.reload();
    }
    })
}
    },
    {
      text: 'Limpar!',
      handler: function(){
        myRequest = Ext.Ajax.request({
          url: 'app/php/Limpar/limpaticketshistorico.php',
          method: 'POST'
        }),
        Ext.getCmp('grid2').store.reload();
      }
    }
//     {
//       text: 'Reload Store',
//       handler: function(){
//             document.location.href = "app/php/example.php";
//         }
// }

        ]
    },

    listeners: {
 itemclick: function(view, record, item, index, e) {
  var id = record.get('id');
  Ext.util.Cookies.set('cookieIDhistorico', id);
    Ext.util.Cookies.set('cookieParticao','historico');
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Historico do Ticket',
                        modal: true,
                        // html: '<iframe src="app/php/mostraTicket.php" width="100%" height="100%" ></iframe>',
                        width: 1100,
                        height: 550,
                        items: [{
                            xtype: 'maintabsss'
                        }]
                    });
                    myWin.show();
  // console.log(record);
}
    }
});
