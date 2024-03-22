import { LanguageCode, PluginCommonModule, VendurePlugin } from "@vendure/core";
import { config } from "dotenv";

@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: config => {
        config.customFields.Customer.push({
            type: 'string',
            name: 'avataUrl',
            label: [{ languageCode: LanguageCode.en, value: 'Avata Url'}],
            list: true
        });
        return config;
    }
})
export class AvataPlugin {}