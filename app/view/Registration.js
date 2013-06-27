/*
 * File: app/view/Registration.js
 * Date: Thu Jun 27 2013 04:01:53 GMT+0530 (Sri Lanka Standard Time)
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Registration', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Registration',

    config: {
        items: [
            {
                xtype: 'fieldset',
                height: '100%',
                title: 'Register',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password'
                    },
                    {
                        xtype: 'container',
                        defaults: {
                            style: 'margin : .5em'
                        },
                        layout: {
                            align: 'center',
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'decline',
                                text: 'Reset'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'confirm',
                                text: 'Register'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});