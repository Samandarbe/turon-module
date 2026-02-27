export declare class ModelBrand {
    photo?: string;
    title: string;
    position: number;
    is_active?: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelParetnerSchema: import("mongoose").Schema<ModelBrand, import("mongoose").Model<ModelBrand, any, any, any, (import("mongoose").Document<unknown, any, ModelBrand, any, import("mongoose").DefaultSchemaOptions> & ModelBrand & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelBrand, any, import("mongoose").DefaultSchemaOptions> & ModelBrand & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelBrand>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    photo?: import("mongoose").SchemaDefinitionProperty<string | undefined, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<number, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelBrand, import("mongoose").Document<unknown, {}, ModelBrand, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBrand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelBrand>;
