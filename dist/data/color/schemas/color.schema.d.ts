import { Lang } from '../../interfaces';
export declare class ModelColor {
    name: Lang;
    color: string;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelColorSchema: import("mongoose").Schema<ModelColor, import("mongoose").Model<ModelColor, any, any, any, (import("mongoose").Document<unknown, any, ModelColor, any, import("mongoose").DefaultSchemaOptions> & ModelColor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelColor, any, import("mongoose").DefaultSchemaOptions> & ModelColor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelColor>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    color?: import("mongoose").SchemaDefinitionProperty<string, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelColor, import("mongoose").Document<unknown, {}, ModelColor, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelColor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelColor>;
