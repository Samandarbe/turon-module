export declare class ModelClientDevice {
    device: string;
    api: string;
}
export declare const ModelClientDeviceSchema: import("mongoose").Schema<ModelClientDevice, import("mongoose").Model<ModelClientDevice, any, any, any, (import("mongoose").Document<unknown, any, ModelClientDevice, any, import("mongoose").DefaultSchemaOptions> & ModelClientDevice & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelClientDevice, any, import("mongoose").DefaultSchemaOptions> & ModelClientDevice & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelClientDevice>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelClientDevice, import("mongoose").Document<unknown, {}, ModelClientDevice, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelClientDevice & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    device?: import("mongoose").SchemaDefinitionProperty<string, ModelClientDevice, import("mongoose").Document<unknown, {}, ModelClientDevice, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelClientDevice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    api?: import("mongoose").SchemaDefinitionProperty<string, ModelClientDevice, import("mongoose").Document<unknown, {}, ModelClientDevice, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelClientDevice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelClientDevice>;
