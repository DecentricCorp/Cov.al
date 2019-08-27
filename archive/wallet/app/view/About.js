/*
 * About.js - View
 * 
 * Displaying information about the wallet, website, developers, etc.
 */

 Ext.define('FW.view.About', {
    extend: 'Ext.Container',

    config: {
        id: 'aboutView',
        layout: 'vbox',
        scrollable: 'vertical',
        cls: 'fw-panel',
        items:[{
            xtype: 'fw-toptoolbar',
            title: 'About',
            menu: true
        },{
            xtype: 'container',
            margin: '0 5 0 5',
            items:[{
                xtype: 'image',
                src: 'resources/images/logo.png',
                height: '60px',
                margin: '10 0 10 0'
            },{
                xtype: 'container',
                margin: '10 0 5 0',
                html:'<p align="justify">This is a Bitcoin and Counterparty Token Compatible Wallet for COVAL</p>' +
                     '<p>It is a fork of freewallet.io. It runs locally on your device and can be <a href="https://github.com/jdogresorg/FreeWallet" target="_blank">trusted</a>.</p>'
            },{
                margin: '10 0 0 0',
                html:'<div class="hook" data-page="view/About.js"></div>' + 
                     '<p align="justify"></p>'
            },{
                xtype: 'button',
                text: 'Donate bitcoin or ₡OVAL to the COVAL Team',
                iconCls: 'fa fa-btc',
                ui: 'confirm',
                margin: '5 0 5 0',
                handler: function(){
                    var me = Ext.getCmp('aboutView');
                    me.main.showTool('send', {
                        reset: true,
                        currency: 'BTC',
                        address: '1JihGaVvvPhBkF1tweF9YzpGrbQba9VZ7J'
                    });
                }
            },{
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    xtype: 'button',
                    ui: 'action',
                    flex: 1
                },
                items:[{
                    iconCls: 'fa fa-github',
                    text: 'Source Code',
                    handler: function(){
                        var me = Ext.getCmp('aboutView');
                        me.main.openUrl('https://github.com/DecentricCorp/coval.c-wallet');
                    }
                },{
                    iconCls: 'fa fa-info-circle',
                    text: 'http://coval.cc',
                    margin: '0 0 0 5',
                    handler: function(){
                        var me = Ext.getCmp('aboutView');
                        me.main.openUrl('http://coval.cc');
                    }
                }]
            }]
        }]
    },

    initialize: function(){
        var me = this;
        // Setup alias to main controller
        me.main = FW.app.getController('Main');
    }


});
