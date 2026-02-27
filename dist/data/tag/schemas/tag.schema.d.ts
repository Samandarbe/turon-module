import { Lang } from '../../interfaces';
export declare class ModelTag {
    name: Lang;
    is_active: boolean;
    is_deleted: boolean;
}
export declare const ModelTagSchema: import("mongoose").Schema<ModelTag, import("mongoose").Model<ModelTag, any, any, any, (import("mongoose").Document<unknown, any, ModelTag, any, import("mongoose").DefaultSchemaOptions> & ModelTag & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelTag, any, import("mongoose").DefaultSchemaOptions> & ModelTag & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelTag>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelTag, import("mongoose").Document<unknown, {}, ModelTag, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelTag & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelTag, import("mongoose").Document<unknown, {}, ModelTag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTag & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, ModelTag, import("mongoose").Document<unknown, {}, ModelTag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTag & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelTag, import("mongoose").Document<unknown, {}, ModelTag, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelTag & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelTag>;
