import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return json(fieldTypes);
};

const fieldTypes: EntityType[] = [
	{
		id: 'Activity',
		name: 'Activity',
		fieldTypes: [
			'ActivityName',
			'ActivityDescription',
			'ActivityStartDate',
			'ActivityEndDate',
			'ActivityStatus'
		],
		inboundLinkTypes: [],
		outboundLinkTypes: ['ActivityMilestones', 'ActivityResources'],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'ActivityName',
		displayDescriptionFieldTypeId: 'ActivityDescription'
	},
	{
		id: 'Channel',
		name: 'Channel',
		fieldTypes: ['ChannelName', 'ChannelPublished'],
		inboundLinkTypes: [],
		outboundLinkTypes: ['ChannelChannelNode', 'ChannelChannelNodes', 'ChannelResource'],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'ChannelName',
		displayDescriptionFieldTypeId: ''
	},
	{
		id: 'ChannelNode',
		name: 'Channel node',
		fieldTypes: [
			'ChannelNodeName',
			'ChannelnodeVismaCategoryId',
			'ChannelNodeTitle',
			'ChannelNodeMetaTitle',
			'ChannelNodeMetaDescription',
			'ChannelNodeURL'
		],
		inboundLinkTypes: ['ChannelChannelNode', 'ChannelChannelNodes', 'ChannelNodeChannelNodes'],
		outboundLinkTypes: ['ChannelNodeChannelNodes', 'ChannelNodeProducts', 'AdditionalChannenode'],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'ChannelNodeName',
		displayDescriptionFieldTypeId: 'ChannelnodeVismaCategoryId'
	},
	{
		id: 'Item',
		name: 'Item',
		fieldTypes: [
			'ItemNumber',
			'ItemAmount',
			'ItemArticleNumber',
			'ItemColor',
			'ItemColorText',
			'ItemCondition',
			'ItemDateTimeLifeCycleStartDate',
			'ItemDiameter',
			'ItemEAN',
			'ItemERPname',
			'ItemHeightArticle',
			'ItemLengthArticle',
			'ItemMeasurement',
			'ItemModelNumber',
			'ItemPresenter',
			'ItemPrice',
			'ItemSortimentCode',
			'ItemSortimentCodeNK',
			'ItemStatusCode',
			'ItemStatusCodeNK',
			'ItemSupplier',
			'ItemVMKartNo',
			'ItemVolume',
			'ItemWidthArticle',
			'ItemLastUpdated'
		],
		inboundLinkTypes: ['TaskItem', 'ProductItem', 'TaskItems'],
		outboundLinkTypes: ['ItemResource'],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'ItemERPname',
		displayDescriptionFieldTypeId: 'ItemArticleNumber'
	},
	{
		id: 'Milestone',
		name: 'Milestone',
		fieldTypes: [
			'MilestoneNodeName',
			'MilestoneDescription',
			'MilestoneStartDate',
			'MilestoneEndDate',
			'MilestoneStatus'
		],
		inboundLinkTypes: ['ActivityMilestones'],
		outboundLinkTypes: [],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'MilestoneNodeName',
		displayDescriptionFieldTypeId: 'MilestoneDescription'
	},
	{
		id: 'Product',
		name: 'Product',
		fieldTypes: [
			'ProductId',
			'ProductName',
			'OnlineName',
			'ProductBrandCode',
			'ProductBrandOnline',
			'ProductSortiment',
			'ProductDepartment',
			'ProductVendingArea',
			'ProductCategory',
			'ProductSubcategory',
			'ProductCareInstructions',
			'ProductCategoryTreeKey',
			'ProductDescription',
			'ProductDesigner',
			'ProductDiameter',
			'ProductDishwasherProof',
			'ProductFamilyOnline',
			'ProductFamilyVisma',
			'ProductFilmUrl',
			'ProductFreezerProof',
			'ProductGrinder',
			'ProductHeight',
			'ProductInduction',
			'ProductKnivesHardness',
			'ProductLampSocket',
			'ProductLength',
			'ProductManufacturingCountry',
			'ProductMaterial',
			'ProductMaterialSpecification',
			'ProductMaxWatt',
			'ProductMeasurement',
			'ProductMicroSafe',
			'ProductOther',
			'ProductOvenProof',
			'ProductPower',
			'ProductRecommendedMaterial',
			'ProductSharpeningAngle',
			'ProductSupplier',
			'ProductVariantType',
			'ProductVolumeCl',
			'ProductVolumeL',
			'ProductVolumeMl',
			'ProductWarranty',
			'ProductWidth',
			'TriggerStormExport',
			'ProductMainCategoryHierarchy',
			'ProductAdditionalCategories'
		],
		inboundLinkTypes: [
			'ChannelNodeProducts',
			'AdditionalChannenode',
			'TaskProducts',
			'TaskProduct'
		],
		outboundLinkTypes: ['ProductResource', 'ProductItem'],
		isLinkEntityType: false,
		fieldSetIds: [
			'General',
			'ProductDinnerwareGlas',
			'ProductElectricTools',
			'ProductGrinders',
			'ProductKnives',
			'ProductLamps',
			'Test444'
		],
		displayNameFieldTypeId: 'OnlineName',
		displayDescriptionFieldTypeId: 'ProductFamilyOnline'
	},
	{
		id: 'Resource',
		name: 'Resource',
		fieldTypes: [
			'ResourceName',
			'ImageType',
			'ResourceFileId',
			'ResourceFilename',
			'ResourceMimeType',
			'ResourceSupplier'
		],
		inboundLinkTypes: [
			'ActivityResources',
			'ItemResource',
			'ProductResource',
			'ChannelResource',
			'TaskResources'
		],
		outboundLinkTypes: [],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'ResourceFilename',
		displayDescriptionFieldTypeId: 'ResourceMimeType'
	},
	{
		id: 'Swag',
		name: '',
		fieldTypes: [],
		inboundLinkTypes: [],
		outboundLinkTypes: [],
		isLinkEntityType: true,
		fieldSetIds: [],
		displayNameFieldTypeId: '',
		displayDescriptionFieldTypeId: ''
	},
	{
		id: 'Task',
		name: 'Task',
		fieldTypes: [
			'TaskName',
			'TaskDescription',
			'TaskCreatedBy',
			'TaskAssignedTo',
			'TaskAssignedGroupTask',
			'TaskStatus',
			'TaskDueDate'
		],
		inboundLinkTypes: [],
		outboundLinkTypes: ['TaskItem', 'TaskItems', 'TaskResources', 'TaskProducts', 'TaskProduct'],
		isLinkEntityType: false,
		fieldSetIds: [],
		displayNameFieldTypeId: 'TaskName',
		displayDescriptionFieldTypeId: 'TaskDescription'
	}
];
