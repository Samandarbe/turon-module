import { Lang } from '../../interfaces';
export declare class ModelTranslation {
    value: Lang;
    key?: string;
    is_active?: boolean;
    is_deleted?: boolean;
}
export declare const ModelTranslationSchema: import("mongoose").Schema<ModelTranslation, import("mongoose").Model<ModelTranslation, any, any, any, (import("mongoose").Document<unknown, any, ModelTranslation, any, import("mongoose").DefaultSchemaOptions> & ModelTranslation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelTranslation, any, import("mongoose").DefaultSchemaOptions> & ModelTranslation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelTranslation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelTranslation, import("mongoose").Document<unknown, {}, ModelTranslation, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelTranslation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    value?: import("mongoose").SchemaDefinitionProperty<Lang, ModelTranslation, import("mongoose").Document<unknown, {}, ModelTranslation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTranslation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    key?: import("mongoose").SchemaDefinitionProperty<string | undefined, ModelTranslation, import("mongoose").Document<unknown, {}, ModelTranslation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTranslation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelTranslation, import("mongoose").Document<unknown, {}, ModelTranslation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTranslation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelTranslation, import("mongoose").Document<unknown, {}, ModelTranslation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTranslation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelTranslation>;
