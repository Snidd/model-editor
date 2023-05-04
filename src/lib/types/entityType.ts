export type EntityType = {
    id: string;
    name?: string | null;
    fieldTypes?: string[] | null;
    inboundLinkTypes?: string[] | null;
    outboundLinkTypes?: string[] | null;
    isLinkEntityType?: boolean;
    fieldSetIds?: string[] | null;
    displayNameFieldTypeId?: string | null;
    displayDescriptionFieldTypeId?: string | null;
}