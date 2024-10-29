define("UsrRealtyVisitFreedomUIPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9tnodjb",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_jqd6rp3",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_jqd6rp3"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_culjeoa",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_qxrsh8b",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_qxrsh8b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ubuf6at",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ubuf6at_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_culjeoa",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_3m6y6b4",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrComment_02amuwg",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrComment_02amuwg"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitFreedomUIDS_UsrColumn5_rsnzoff": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrColumn5"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_ztc3o4y": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_jqd6rp3": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_qxrsh8b": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrComment_02amuwg": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});