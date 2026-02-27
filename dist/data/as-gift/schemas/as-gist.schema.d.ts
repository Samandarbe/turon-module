import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelProductInfo, ModelSubProduct } from '../../product';
export declare class ModelAsGift {
    is_deleted: boolean;
    customer: ModelCustomers;
    sub_product: ModelSubProduct;
    product_info: ModelProductInfo;
}
export declare const ModelAsGiftSchema: mongoose.Schema<ModelAsGift, mongoose.Model<ModelAsGift, any, any, any, (mongoose.Document<unknown, any, ModelAsGift, any, mongoose.DefaultSchemaOptions> & ModelAsGift & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelAsGift, any, mongoose.DefaultSchemaOptions> & ModelAsGift & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelAsGift>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelAsGift, mongoose.Document<unknown, {}, ModelAsGift, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelAsGift & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelAsGift, mongoose.Document<unknown, {}, ModelAsGift, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAsGift & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelAsGift, mongoose.Document<unknown, {}, ModelAsGift, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAsGift & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sub_product?: mongoose.SchemaDefinitionProperty<ModelSubProduct, ModelAsGift, mongoose.Document<unknown, {}, ModelAsGift, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAsGift & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelAsGift, mongoose.Document<unknown, {}, ModelAsGift, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAsGift & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelAsGift>;
