export type FieldType = {
	id: string;
	name?: Record<string, string | null>;
	localizedName?: string | null;
	description?: Record<string, string | null>;
	localizedDescription?: string | null;
	dataType?: string | null;
	/** @default false */
	isMultiValue?: boolean;
	/** @default false */
	isHidden?: boolean;
	/** @default false */
	isReadOnly?: boolean;
	/** @default false */
	isMandatory?: boolean;
	/** @default false */
	isUnique?: boolean;
	/** @default false */
	trackChanges?: boolean;
	defaultValue?: string | null;
	/** @default false */
	isExcludedFromDefaultView?: boolean;
	includedInFieldSets?: string[] | null;
	/** @default "General" */
	categoryId?: string | null;
	/** @format int32 */
	index?: number;
	cvlId?: string | null;
	parentCvlId?: string | null;
	settings?: Record<string, string | null>;
};
