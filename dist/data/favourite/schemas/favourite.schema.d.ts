import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelProduct } from '../../product';
export declare class ModelFaurite {
    is_deleted: boolean;
    customer: ModelCustomers;
    product: ModelProduct;
    showcase: string;
}
export declare const ModelFauriteSchema: mongoose.Schema<ModelFaurite, mongoose.Model<ModelFaurite, any, any, any, (mongoose.Document<unknown, any, ModelFaurite, any, mongoose.DefaultSchemaOptions> & ModelFaurite & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelFaurite, any, mongoose.DefaultSchemaOptions> & ModelFaurite & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelFaurite>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelFaurite, mongoose.Document<unknown, {}, ModelFaurite, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelFaurite & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelFaurite, mongoose.Document<unknown, {}, ModelFaurite, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFaurite & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelFaurite, mongoose.Document<unknown, {}, ModelFaurite, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFaurite & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelFaurite, mongoose.Document<unknown, {}, ModelFaurite, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFaurite & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelFaurite, mongoose.Document<unknown, {}, ModelFaurite, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFaurite & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelFaurite>;
