import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return json(fieldTypes);
};

const fieldTypes: FieldType[] = [
	{
		id: 'ItemAmount',
		name: {
			en: 'Amount',
			sv: 'Antal per förpackning',
			no: 'Antal per förpackning'
		},
		localizedName: 'Amount',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: true,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 1,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemArticleNumber',
		name: {
			en: 'Article number',
			sv: 'Artikelnummer',
			no: 'Artikelnummer'
		},
		localizedName: 'Article number',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: true,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 2,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemColor',
		name: {
			en: 'Color',
			sv: 'Färg',
			no: 'Färg'
		},
		localizedName: 'Color',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'CVL',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 3,
		cvlId: 'ItemColor',
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemColorText',
		name: {
			en: 'Color text',
			sv: 'Färg text',
			no: 'Färg text'
		},
		localizedName: 'Color text',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'LocaleString',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 4,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemCondition',
		name: {
			en: 'Condition',
			sv: 'Skick',
			no: 'Skick'
		},
		localizedName: 'Condition',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'CVL',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 5,
		cvlId: 'ItemCondition',
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemDateTimeLifeCycleStartDate',
		name: {
			en: 'Start date e-com',
			sv: 'Startdatum e-handel',
			no: 'Startdatum e-handel'
		},
		localizedName: 'Start date e-com',
		description: {
			en: '',
			sv: 'Är Stardate som kommer från Visma',
			no: ''
		},
		localizedDescription: '',
		dataType: 'DateTime',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 6,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemDiameter',
		name: {
			en: 'Diameter artikel (cm)',
			sv: 'Diameter artikel (cm)',
			no: 'Diameter artikel (cm)'
		},
		localizedName: 'Diameter artikel (cm)',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'Double',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 7,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemEAN',
		name: {
			en: 'EAN kod',
			sv: 'EAN kod',
			no: 'EAN kod'
		},
		localizedName: 'EAN kod',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 8,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemERPname',
		name: {
			en: 'Name Visma/Unic',
			sv: 'Namn Visma/Unic',
			no: 'Namn Visma/Unic'
		},
		localizedName: 'Name Visma/Unic',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 9,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemHeightArticle',
		name: {
			en: 'Höjd artikel (cm)',
			sv: 'Höjd artikel (cm)',
			no: 'Höjd artikel (cm)'
		},
		localizedName: 'Höjd artikel (cm)',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'Double',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 10,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemLastUpdated',
		name: {
			en: 'Last updated',
			sv: '',
			no: ''
		},
		localizedName: 'Last updated',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'DateTime',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'General',
		index: 24,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemLengthArticle',
		name: {
			en: 'Längd artikel (cm)',
			sv: 'Längd artikel (cm)',
			no: 'Längd artikel (cm)'
		},
		localizedName: 'Längd artikel (cm)',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'Double',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 11,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemMeasurement',
		name: {
			en: 'Måttspecifikation',
			sv: 'Måttspecifikation',
			no: 'Måttspecifikation'
		},
		localizedName: 'Måttspecifikation',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'LocaleString',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 12,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemModelNumber',
		name: {
			en: 'Modellnummer',
			sv: 'Modellnummer',
			no: 'Modellnummer'
		},
		localizedName: 'Modellnummer',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 13,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemNumber',
		name: {
			en: 'Item Number',
			sv: '',
			no: ''
		},
		localizedName: 'Item Number',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: true,
		isUnique: true,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'General',
		index: 0,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemPresenter',
		name: {
			en: 'Presenter',
			sv: 'Presenter',
			no: 'Presenter'
		},
		localizedName: 'Presenter',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'CVL',
		isMultiValue: true,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 14,
		cvlId: 'ItemPresenter',
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemPrice',
		name: {
			en: 'Price',
			sv: 'Ordinarie pris',
			no: 'Ordinarie pris'
		},
		localizedName: 'Price',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'Double',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemSpecification',
		index: 15,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemSortimentCode',
		name: {
			en: 'Sortiment kod',
			sv: 'Sortiment kod',
			no: 'Sortiment kod'
		},
		localizedName: 'Sortiment kod',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 16,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemSortimentCodeNK',
		name: {
			en: 'Sortiment kod NK',
			sv: 'Sortiment kod NK',
			no: 'Sortiment kod NK'
		},
		localizedName: 'Sortiment kod NK',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 17,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemStatusCode',
		name: {
			en: 'Status kod',
			sv: 'Status kod',
			no: 'Status kod'
		},
		localizedName: 'Status kod',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 18,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemStatusCodeNK',
		name: {
			en: 'Status kod NK',
			sv: 'Status kod NK',
			no: 'Status kod NK'
		},
		localizedName: 'Status kod NK',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 19,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemSupplier',
		name: {
			en: 'Supplier',
			sv: 'Leverantör',
			no: ''
		},
		localizedName: 'Supplier',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'CVL',
		isMultiValue: true,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 20,
		cvlId: 'Supplier',
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemVMKartNo',
		name: {
			en: 'Leverantörens art.nr',
			sv: 'Leverantörens art.nr',
			no: 'Leverantörens art.nr'
		},
		localizedName: 'Leverantörens art.nr',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: true,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemGeneral',
		index: 21,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemVolume',
		name: {
			en: 'Volume',
			sv: 'Volym',
			no: 'Volym'
		},
		localizedName: 'Volume',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'String',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 22,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	},
	{
		id: 'ItemWidthArticle',
		name: {
			en: 'Bredd artikel (cm)',
			sv: 'Bredd artikel (cm)',
			no: 'Bredd artikel (cm)'
		},
		localizedName: 'Bredd artikel (cm)',
		description: {
			en: '',
			sv: '',
			no: ''
		},
		localizedDescription: '',
		dataType: 'Double',
		isMultiValue: false,
		isHidden: false,
		isReadOnly: false,
		isMandatory: false,
		isUnique: false,
		trackChanges: true,
		defaultValue: null,
		isExcludedFromDefaultView: false,
		includedInFieldSets: null,
		categoryId: 'ItemAdditionalInfo',
		index: 23,
		cvlId: null,
		parentCvlId: null,
		settings: {}
	}
];
