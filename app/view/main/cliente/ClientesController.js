Ext.define('TrackIT.view.main.cliente.ClientesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientezz',

    onClickObterCliente: function() {
        var store = Ext.getStore('mainlistCliente');
        store.load({
            callback: function (records, operation, success) {
                var record = store.getAt(0);
                var a = Ext.getCmp('Id_Cliente').setValue(record.data.Id_Cliente);
                var b = Ext.getCmp('Nome_Ciente').setValue(record.data.Nome_Ciente);
                var c = Ext.getCmp('Email_Cliente').setValue(record.data.Email_Cliente);
                var d = Ext.getCmp('DataNasc_Cliente').setValue(record.data.DataNasc_Cliente);
                var e = Ext.getCmp('Contribuinte_Cliente').setValue(record.data.Contribuinte_Cliente);
            }
        });
    }

//$email = $_POST['Email_Cliente'];
  /*  onClickMoveToHistorico: function() {
        // Ext.Msg.alert('Status', 'Changes saved successfully.');
        // interval: 60000,
        // window.location.assign('/testetrackit/app/php/delete.php');
        myRequest1 = Ext.Ajax.request({
          url: 'app/php/Apagar/delete.php',
    method: 'POST'
  })
  Ext.MessageBox.alert('title','Sucesso');
  Ext.getCmp('grid6').getStore().load();


}*/

});
