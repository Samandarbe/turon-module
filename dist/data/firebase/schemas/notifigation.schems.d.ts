import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
export declare class ModelNotifications {
    title: string;
    customer: ModelCustomers;
    content: string;
    type: string;
    is_read: boolean;
}
export declare const ModelNotificationsSchema: mongoose.Schema<ModelNotifications, mongoose.Model<ModelNotifications, any, any, any, (mongoose.Document<unknown, any, ModelNotifications, any, mongoose.DefaultSchemaOptions> & ModelNotifications & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelNotifications, any, mongoose.DefaultSchemaOptions> & ModelNotifications & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelNotifications>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<string, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: mongoose.SchemaDefinitionProperty<string, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_read?: mongoose.SchemaDefinitionProperty<boolean, ModelNotifications, mongoose.Document<unknown, {}, ModelNotifications, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelNotifications & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelNotifications>;
