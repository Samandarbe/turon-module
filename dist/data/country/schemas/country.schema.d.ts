import { Lang } from '../../interfaces';
export declare class ModelCountry {
    name: Lang;
    photo: string;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelCountrySchema: import("mongoose").Schema<ModelCountry, import("mongoose").Model<ModelCountry, any, any, any, (import("mongoose").Document<unknown, any, ModelCountry, any, import("mongoose").DefaultSchemaOptions> & ModelCountry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelCountry, any, import("mongoose").DefaultSchemaOptions> & ModelCountry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelCountry>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<Lang, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: import("mongoose").SchemaDefinitionProperty<string, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelCountry, import("mongoose").Document<unknown, {}, ModelCountry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelCountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCountry>;
