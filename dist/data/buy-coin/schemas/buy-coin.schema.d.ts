export declare class ModelBuyCoin {
    photo?: string;
    title: string;
    position: number;
    coin_count: number;
    price: number;
    sale_price: number;
    is_active?: boolean;
    sale_status?: boolean;
    is_deleted: boolean;
}
export declare const ModelBuyCoinSchema: import("mongoose").Schema<ModelBuyCoin, import("mongoose").Model<ModelBuyCoin, any, any, any, (import("mongoose").Document<unknown, any, ModelBuyCoin, any, import("mongoose").DefaultSchemaOptions> & ModelBuyCoin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelBuyCoin, any, import("mongoose").DefaultSchemaOptions> & ModelBuyCoin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelBuyCoin>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    photo?: import("mongoose").SchemaDefinitionProperty<string | undefined, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<number, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coin_count?: import("mongoose").SchemaDefinitionProperty<number, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_price?: import("mongoose").SchemaDefinitionProperty<number, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_status?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelBuyCoin, import("mongoose").Document<unknown, {}, ModelBuyCoin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelBuyCoin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelBuyCoin>;
