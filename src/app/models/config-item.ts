export enum ConfigItemType {text, boolean, select, multiselect};

export class ConfigItem {
    type: ConfigItemType
    name: string
    displayName: string
    description: string
    validationRegex?: string
    validValues?: string[]
}