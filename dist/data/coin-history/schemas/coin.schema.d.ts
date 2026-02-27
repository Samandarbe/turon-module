import mongoose from 'mongoose';
import { CoinHistoryType, CoinHistoryInReason } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelSubProduct, ModelProductInfo } from '../../product';
export declare class ModelCoinHistory {
    coin?: number;
    customer: ModelCustomers;
    type: CoinHistoryType;
    purchase_customer: ModelCustomers;
    gift_customer: ModelCustomers;
    reason: CoinHistoryInReason;
    sub_product: ModelSubProduct[];
    product_info: ModelProductInfo[];
    description: string;
}
export declare const ModelCoinHistorySchema: mongoose.Schema<ModelCoinHistory, mongoose.Model<ModelCoinHistory, any, any, any, (mongoose.Document<unknown, any, ModelCoinHistory, any, mongoose.DefaultSchemaOptions> & ModelCoinHistory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelCoinHistory, any, mongoose.DefaultSchemaOptions> & ModelCoinHistory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelCoinHistory>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    coin?: mongoose.SchemaDefinitionProperty<number | undefined, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<CoinHistoryType, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    purchase_customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gift_customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reason?: mongoose.SchemaDefinitionProperty<CoinHistoryInReason, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sub_product?: mongoose.SchemaDefinitionProperty<ModelSubProduct[], ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo[], ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: mongoose.SchemaDefinitionProperty<string, ModelCoinHistory, mongoose.Document<unknown, {}, ModelCoinHistory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCoinHistory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCoinHistory>;
