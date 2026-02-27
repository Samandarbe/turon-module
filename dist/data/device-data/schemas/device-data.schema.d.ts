import { DeviceStatus } from '../../../enums';
export declare class ModelDeviceData {
    ip_address: string;
    referal_code: string;
    user_agent: string;
    language: string;
    timezone: string;
    fingerprint: string;
    status: DeviceStatus;
    width: string;
    height: string;
}
export declare const ModelDeviceDataSchema: import("mongoose").Schema<ModelDeviceData, import("mongoose").Model<ModelDeviceData, any, any, any, (import("mongoose").Document<unknown, any, ModelDeviceData, any, import("mongoose").DefaultSchemaOptions> & ModelDeviceData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelDeviceData, any, import("mongoose").DefaultSchemaOptions> & ModelDeviceData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelDeviceData>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ip_address?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    referal_code?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    user_agent?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    language?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timezone?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fingerprint?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<DeviceStatus, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    width?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    height?: import("mongoose").SchemaDefinitionProperty<string, ModelDeviceData, import("mongoose").Document<unknown, {}, ModelDeviceData, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelDeviceData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelDeviceData>;
