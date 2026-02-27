import mongoose from 'mongoose';
import { ModelBuyCoin } from '../../buy-coin';
import { ModelCustomers } from '../../customer';
import { ModelSubProduct, ModelProductInfo } from '../../product';
export declare class ModelCoinOrder {
    coin_collection: ModelBuyCoin;
    customer: ModelCustomers;
    purchase_customer: ModelCustomers;
    gift_customer: ModelCustomers;
    sub_product: ModelSubProduct[];
    product_info: ModelProductInfo[];
    description: string;
    coin_count: number;
    gift_coins: number;
    price: number;
    status?: boolean;
}
export declare const ModelCoinOrderSchema: mongoose.Schema<ModelCoinOrder, mongoose.Model<ModelCoinOrder, any, any, any, (mongoose.Document<unknown, any, ModelCoinOrder, any, mongoose.DefaultSchemaOptions> & ModelCoinOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelCoinOrder, any, mongoose.DefaultSchemaOptions> & ModelCoinOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelCoinOrder>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    coin_collection?: mongoose.SchemaDefinitionProperty<ModelBuyCoin, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    purchase_customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gift_customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sub_product?: mongoose.SchemaDefinitionProperty<ModelSubProduct[], ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo[], ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: mongoose.SchemaDefinitionProperty<string, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coin_count?: mongoose.SchemaDefinitionProperty<number, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gift_coins?: mongoose.SchemaDefinitionProperty<number, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: mongoose.SchemaDefinitionProperty<number, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelCoinOrder, mongoose.Document<unknown, {}, ModelCoinOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCoinOrder>;
