import { Lang } from '../../interfaces';
export declare class ModelMenuPermission {
    name: Lang;
    key: string;
    is_required: boolean;
    group: string;
    post_group: string;
}
export declare const ModelMenuPermissionSchema: import("mongoose").Schema<ModelMenuPermission, import("mongoose").Model<ModelMenuPermission, any, any, any, (import("mongoose").Document<unknown, any, ModelMenuPermission, any, import("mongoose").DefaultSchemaOptions> & ModelMenuPermission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelMenuPermission, any, import("mongoose").DefaultSchemaOptions> & ModelMenuPermission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelMenuPermission>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    key?: import("mongoose").SchemaDefinitionProperty<string, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_required?: import("mongoose").SchemaDefinitionProperty<boolean, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    group?: import("mongoose").SchemaDefinitionProperty<string, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post_group?: import("mongoose").SchemaDefinitionProperty<string, ModelMenuPermission, import("mongoose").Document<unknown, {}, ModelMenuPermission, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelMenuPermission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelMenuPermission>;
