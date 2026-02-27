export declare class ModelFileStorage {
    file: object;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelFileStorageSchema: import("mongoose").Schema<ModelFileStorage, import("mongoose").Model<ModelFileStorage, any, any, any, (import("mongoose").Document<unknown, any, ModelFileStorage, any, import("mongoose").DefaultSchemaOptions> & ModelFileStorage & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelFileStorage, any, import("mongoose").DefaultSchemaOptions> & ModelFileStorage & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelFileStorage>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelFileStorage, import("mongoose").Document<unknown, {}, ModelFileStorage, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelFileStorage & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    file?: import("mongoose").SchemaDefinitionProperty<object, ModelFileStorage, import("mongoose").Document<unknown, {}, ModelFileStorage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFileStorage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelFileStorage, import("mongoose").Document<unknown, {}, ModelFileStorage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFileStorage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelFileStorage, import("mongoose").Document<unknown, {}, ModelFileStorage, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelFileStorage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelFileStorage>;
