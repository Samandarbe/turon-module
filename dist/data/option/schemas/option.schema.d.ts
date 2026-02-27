import { Lang } from '../../interfaces';
export declare class ModelOption {
    name: Lang;
    type: string;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelOptionSchema: import("mongoose").Schema<ModelOption, import("mongoose").Model<ModelOption, any, any, any, (import("mongoose").Document<unknown, any, ModelOption, any, import("mongoose").DefaultSchemaOptions> & ModelOption & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelOption, any, import("mongoose").DefaultSchemaOptions> & ModelOption & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelOption>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelOption, import("mongoose").Document<unknown, {}, ModelOption, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelOption & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOption>;
