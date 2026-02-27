import { PhoneAndEmail, Social, Address, Work } from '../../interfaces';
export declare class ModelContact {
    phone_number: PhoneAndEmail[];
    email: PhoneAndEmail[];
    social: Social[];
    address: Address[];
    work_time: Work[];
    map: string;
}
export declare const ModelContactSchema: import("mongoose").Schema<ModelContact, import("mongoose").Model<ModelContact, any, any, any, (import("mongoose").Document<unknown, any, ModelContact, any, import("mongoose").DefaultSchemaOptions> & ModelContact & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelContact, any, import("mongoose").DefaultSchemaOptions> & ModelContact & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelContact>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    phone_number?: import("mongoose").SchemaDefinitionProperty<PhoneAndEmail[], ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<PhoneAndEmail[], ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    social?: import("mongoose").SchemaDefinitionProperty<Social[], ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<Address[], ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    work_time?: import("mongoose").SchemaDefinitionProperty<Work[], ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    map?: import("mongoose").SchemaDefinitionProperty<string, ModelContact, import("mongoose").Document<unknown, {}, ModelContact, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelContact>;
