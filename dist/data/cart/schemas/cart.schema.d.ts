import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelProductInfo, ModelSubProduct } from '../../product';
export declare class ModelCart {
    count: number;
    is_deleted: boolean;
    customer: ModelCustomers;
    sub_product: ModelSubProduct;
    product_info: ModelProductInfo;
    parent_product: string;
    showcase: string;
}
export declare const ModelCartSchema: mongoose.Schema<ModelCart, mongoose.Model<ModelCart, any, any, any, (mongoose.Document<unknown, any, ModelCart, any, mongoose.DefaultSchemaOptions> & ModelCart & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelCart, any, mongoose.DefaultSchemaOptions> & ModelCart & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelCart>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    count?: mongoose.SchemaDefinitionProperty<number, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sub_product?: mongoose.SchemaDefinitionProperty<ModelSubProduct, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parent_product?: mongoose.SchemaDefinitionProperty<string, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelCart, mongoose.Document<unknown, {}, ModelCart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCart>;
