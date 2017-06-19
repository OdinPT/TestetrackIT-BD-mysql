Ext.define('TrackIT.view.main.tickets.HisEst.FormRegistaHisEstadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registahisestado',


    onClickRegistarEstado: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/HistEstado/registaHisEstado.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'Utilizador Registado!');
                    Ext.getCmp('gridhisest').getStore().load();
                },



                failure: function () {
                    alert('Erro...');
                },
                params: {

                    ID_Estado: Ext.getCmp('ID_Estado').getValue()

                }



            })
    }

    });

