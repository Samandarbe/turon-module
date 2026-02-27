import { Document } from 'mongoose';
export declare class AutoIncrement extends Document {
    model_name: string;
    seq: number;
}
export declare const AutoIncrementSchema: import("mongoose").Schema<AutoIncrement, import("mongoose").Model<AutoIncrement, any, any, any, (Document<unknown, any, AutoIncrement, any, import("mongoose").DefaultSchemaOptions> & AutoIncrement & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, AutoIncrement, any, import("mongoose").DefaultSchemaOptions> & AutoIncrement & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}), any, AutoIncrement>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AutoIncrement, Document<unknown, {}, AutoIncrement, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AutoIncrement & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, AutoIncrement, Document<unknown, {}, AutoIncrement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AutoIncrement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    model_name?: import("mongoose").SchemaDefinitionProperty<string, AutoIncrement, Document<unknown, {}, AutoIncrement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AutoIncrement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    seq?: import("mongoose").SchemaDefinitionProperty<number, AutoIncrement, Document<unknown, {}, AutoIncrement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AutoIncrement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AutoIncrement>;
