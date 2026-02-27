import { Lang } from '../../interfaces';
export declare class ModelFAQCategory {
    name: Lang;
    position: number;
    is_active?: boolean;
    is_deleted: boolean;
}
export declare const ModelFAQCategorySchema: import("mongoose").Schema<ModelFAQCategory, import("mongoose").Model<ModelFAQCategory, any, any, any, (import("mongoose").Document<unknown, any, ModelFAQCategory, any, import("mongoose").DefaultSchemaOptions> & ModelFAQCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelFAQCategory, any, import("mongoose").DefaultSchemaOptions> & ModelFAQCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelFAQCategory>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelFAQCategory, import("mongoose").Document<unknown, {}, ModelFAQCategory, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelFAQCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelFAQCategory, import("mongoose").Document<unknown, {}, ModelFAQCategory, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFAQCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<number, ModelFAQCategory, import("mongoose").Document<unknown, {}, ModelFAQCategory, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFAQCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelFAQCategory, import("mongoose").Document<unknown, {}, ModelFAQCategory, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFAQCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelFAQCategory, import("mongoose").Document<unknown, {}, ModelFAQCategory, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFAQCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelFAQCategory>;
